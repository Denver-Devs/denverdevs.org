import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CircularProgress,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "chakra-react-select";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { v4 as uuid } from "uuid";
import * as yup from "yup";

import Auth from "@/components/Auth";
import ImageUpload from "@/components/ImageUpload";
import JobCardPreview from "@/components/JobCardPreview";
import { useUserContext } from "@/context/UserContext";
import * as ga from "@/lib/ga";
import { supabase } from "@/lib/supabase/";
import { jobTagsArray } from "@/utils/helpers/jobTagsArray";

const MAX_JOB_DESCRIPTION_LENGTH = 150;

const jobFormSchema = yup
  .object({
    company: yup.string().required(),
    job_url: yup.string().required(),
    job_tags: yup.array(
      yup.object({
        label: yup.string(),
        value: yup.string(),
      })
    ),
    location: yup.array(
      yup.object({
        label: yup.string(),
        value: yup.string(),
      })
    ),
    location_type: yup.string().required(),
    title: yup.string().required(),
    compensation_type: yup.string().required(),
    compensation_min: yup.number().required(),
    compensation_max: yup.number().nullable(true),
    job_description: yup.string().max(MAX_JOB_DESCRIPTION_LENGTH).required(),
  })
  .required();

const PostJobPage = () => {
  const { user } = useUserContext();
  const [companyAffilation, setCompanyAffilation] = useState(false);
  const [formSubmitSuccess, setformSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const errorToast = useToast();
  const [logoUrl, setLogoUrl] = useState(null);
  const [publicLogoUrl, setPublicLogoUrl] = useState(null);
  const backgroundColor = useColorModeValue("white", "gray.800");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(jobFormSchema) });

  const getPublicUrl = async (path) => {
    let publicURLData = await supabase.storage.from("logos").getPublicUrl(path);

    if (!publicURLData.error) {
      setPublicLogoUrl(publicURLData.publicURL);
    }
  };

  const onSubmit = async (formData) => {
    event.preventDefault();
    const user = supabase.auth.user();
    const id = uuid();

    const formattedData = {
      company: formData.company,
      job_url: formData.job_url,
      tags: formData?.job_tags?.map((tag) => tag.value),
      location_type: formData.location_type,
      location: formData?.location?.map((tag) => tag.value),
      title: formData.title,
      approved: false,
      public_logo_url: publicLogoUrl,
      user_id: user.id,
      user_email: user.email,
      compensation_type: formData.compensation_type,
      compensation_min: formData.compensation_min,
      compensation_max: formData.compensation_max,
      description: formData.job_description,
    };

    ga.event({
      action: "Submitted Job Post",
      params: { form_data: formData },
    });

    try {
      const { error, status } = await supabase
        .from("posts")
        .insert([formattedData])
        .single();

      if (error) {
        throw error;
      }
      if (status === 201) {
        setformSubmitSuccess(true);
        fetch("/.netlify/functions/ses-send-email", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        });
        router.push("/jobs/post-job-success");
      }
    } catch (error) {
      console.error("error", error);
      setFormErrors(error);
    }
  };

  const locationOptions = [
    { value: "remote", label: "Remote" },
    { value: "denver", label: "Greater Denver Area" },
    { value: "boulder", label: "Greater Boulder Area" },
    { value: "co-springs", label: "Colorado Springs" },
    { value: "ft-collins", label: "Fort Collins" },
    { value: "west-colorado", label: "Western Colorado" },
  ];

  const watchedFormData = useWatch({
    control,
  });

  // Color Getter for the Twitter Style Progress Circle
  // const getJobDescriptionProgressColor = (progress) => {
  //   const charsLeft = MAX_JOB_DESCRIPTION_LENGTH - progress;
  //   if (charsLeft <= 20 && charsLeft >= 0) {
  //     return "yellow.500";
  //   }
  //   if (charsLeft < 0) {
  //     return "red.500";
  //   }
  //   return undefined;
  // };

  return (
    <Box marginTop={["24", "32"]}>
      <Head>
        <title>Post a Job | Denver Devs Job Board</title>
      </Head>
      <Stack alignItems={"center"} spacing={4}>
        {!user && <Auth redirectPath="/jobs/post-job" />}
        <Box
          maxWidth="80ch"
          padding={["4", "8"]}
          borderWidth="1px"
          borderRadius="md"
        >
          <Alert
            marginBottom="8"
            padding="4"
            borderRadius="md"
            status="warning"
          >
            <AlertIcon />

            <Text marginBottom="2">
              You must be an employee or directly responsible for hiring or
              recruiting at the company you are posting for. No third-party
              postings or &quot;sharing to share&quot;.
            </Text>
          </Alert>
          <Alert
            marginBottom="8"
            padding="4"
            borderRadius="md"
            status="warning"
          >
            <AlertIcon />

            <Text marginBottom="2">
              Adhere to Colorado law regarding job post information as outlined
              in the{" "}
              <Link href="https://leg.colorado.gov/bills/sb19-085" isExternal>
                Equal Pay for Equal Work Act <ExternalLinkIcon mx="2px" />
              </Link>
              . You must proide a minimum compensation amount, and compensation
              type (salary or hourly) for your post to be approved.
            </Text>
          </Alert>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Stack spacing="8">
              <FormControl
                isDisabled={!user}
                isInvalid={errors.title}
                isRequired
              >
                <FormLabel htmlFor="title">Job title</FormLabel>
                <Input
                  id="title"
                  {...register("title", { required: true })}
                  disabled={!user}
                />
                <FormErrorMessage>
                  {errors.title && "This field is required."}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isDisabled={!user}
                isInvalid={errors.company}
                isRequired
              >
                <FormLabel htmlFor="company">Company name</FormLabel>
                <Input
                  type="text"
                  {...register("company", { required: true })}
                  disabled={!user}
                />
                <FormErrorMessage>
                  {errors.company && "This field is required."}
                </FormErrorMessage>
              </FormControl>

              <FormControl isDisabled={!user} isInvalid={errors.url} isRequired>
                <FormLabel htmlFor="job_url">Link to job description</FormLabel>
                <Input
                  type="job_url"
                  {...register("job_url", { required: true })}
                  disabled={!user}
                  placeholder="https://..."
                />
                <FormErrorMessage>{errors.url}</FormErrorMessage>
              </FormControl>

              <FormControl
                isDisabled={!user}
                isInvalid={errors.location?.ref}
                isRequired
              >
                <FormLabel>Location</FormLabel>
                <Controller
                  control={control}
                  name="location"
                  rules={{ required: true }}
                  // TODO: something about setting this to required, submitting and clearing causes it to fully error out
                  render={({ field }) => (
                    <Select
                      isMulti
                      inputRef={field.ref}
                      options={locationOptions}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select applicable location(s)"
                      closeMenuOnSelect={false}
                      selectedOptionStyle="check"
                      hideSelectedOptions={false}
                      disabled={!user}
                      isOptionDisabled={(option) => field?.value?.length >= 3}
                    />
                  )}
                />
                <FormHelperText>
                  Select locations to help with searching. Select up to three
                  tags.
                </FormHelperText>
                <FormErrorMessage>
                  {errors.location &&
                    "This field is required, please select up to three options"}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isDisabled={!user}
                isInvalid={errors.location_type}
                isRequired
              >
                <FormLabel htmlFor="location">Commute</FormLabel>
                <Controller
                  rules={{ required: true }}
                  render={({ field }) => (
                    <RadioGroup
                      disabled={!user}
                      onChange={field.onChange}
                      value={field.value}
                    >
                      <Wrap spacing="4">
                        <WrapItem>
                          <Radio ref={field.ref} value="remote">
                            Remote
                          </Radio>
                        </WrapItem>
                        <WrapItem>
                          <Radio ref={field.ref} value="hybrid">
                            Remote + in-office
                          </Radio>
                        </WrapItem>
                        <WrapItem>
                          <Radio ref={field.ref} value="on-site">
                            In-office only
                          </Radio>
                        </WrapItem>
                      </Wrap>
                    </RadioGroup>
                  )}
                  control={control}
                  name="location_type"
                />
                <FormErrorMessage>
                  {errors.location_type && "This field is required."}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isDisabled={!user}
                isInvalid={errors.compensation_type}
                isRequired
              >
                <FormLabel htmlFor="compensation_type">
                  Compensation type
                </FormLabel>
                <Controller
                  rules={{ required: true }}
                  render={({ field }) => (
                    <RadioGroup
                      disabled={!user}
                      onChange={field.onChange}
                      value={field.value}
                    >
                      <Wrap spacing="4">
                        <WrapItem>
                          <Radio ref={field.ref} value="salary">
                            Salary
                          </Radio>
                        </WrapItem>
                        <WrapItem>
                          <Radio ref={field.ref} value="hourly">
                            Hourly
                          </Radio>
                        </WrapItem>
                      </Wrap>
                    </RadioGroup>
                  )}
                  control={control}
                  name="compensation_type"
                />
                <FormErrorMessage>
                  {errors.compensation_type && "This field is required."}
                </FormErrorMessage>
              </FormControl>

              <Flex gap="10">
                <FormControl
                  isDisabled={!user}
                  isInvalid={errors.compensation_min}
                  isRequired
                >
                  <FormLabel htmlFor="compensation_min">
                    Compensation minimum
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement zIndex="0" pointerEvents="none">
                      $
                    </InputLeftElement>
                    <Input
                      type="number"
                      {...register("compensation_min", { required: true })}
                      disabled={!user}
                      placeholder="USD"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.compensation_min}</FormErrorMessage>
                  <FormHelperText>Only a minimum is required.</FormHelperText>
                </FormControl>
                <FormControl
                  isDisabled={!user}
                  isInvalid={errors.compensation_min}
                >
                  <FormLabel htmlFor="compensation_max">
                    Compensation maximum
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement zIndex="0" pointerEvents="none">
                      $
                    </InputLeftElement>
                    <Input
                      type="number"
                      {...register("compensation_max", { required: false })}
                      disabled={!user}
                      placeholder="USD"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.compensation_max}</FormErrorMessage>
                </FormControl>
              </Flex>

              <FormControl isDisabled={!user} isInvalid={errors.logo}>
                <FormLabel htmlFor="logo">Upload a company logo</FormLabel>
                <ImageUpload
                  bucket="logos"
                  url={logoUrl}
                  size={150}
                  onUpload={(url) => {
                    setLogoUrl(url);
                    getPublicUrl(url);
                  }}
                  disabled={!user}
                />
                <FormHelperText>
                  Background will be white, you can preview below
                </FormHelperText>
                <FormErrorMessage>{errors.logo}</FormErrorMessage>
              </FormControl>

              <FormControl isDisabled={!user}>
                <FormLabel>Tags</FormLabel>
                <Controller
                  control={control}
                  name="job_tags"
                  render={({ field }) => (
                    <Select
                      isMulti
                      options={jobTagsArray}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select applicable tags"
                      closeMenuOnSelect={false}
                      selectedOptionStyle="check"
                      hideSelectedOptions={false}
                      disabled={!user}
                      isOptionDisabled={(option) => field?.value?.length >= 6}
                    />
                  )}
                />
                <FormHelperText>
                  Select tags to help with searching. Select up to six tags.
                </FormHelperText>
              </FormControl>

              <FormControl
                isDisabled={!user}
                isInvalid={errors.job_description}
                isRequired
              >
                <FormLabel htmlFor="job_description">Job description</FormLabel>
                <Textarea
                  id="job_description"
                  placeholder="Eneter job description here..."
                  {...register("job_description", { required: true })}
                  resize="none"
                  isDisabled={!user}
                />
                <Box alignItems={"flex-end"} display={"flex"} my={1}>
                  {!errors.job_description ? (
                    <FormHelperText>
                      {watchedFormData.job_description?.length}/
                      {MAX_JOB_DESCRIPTION_LENGTH} characters
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>
                      {watchedFormData.job_description?.length}/
                      {MAX_JOB_DESCRIPTION_LENGTH} characters
                    </FormErrorMessage>
                  )}
                  {/* Twitter Style Circular Progress with Char Counter */}
                  {/* <Flex alignItems="center" justifyContent="center">
                    <CircularProgress
                      color={getJobDescriptionProgressColor(
                        watchedFormData.job_description?.length
                      )}
                      max={150}
                      size={8}
                      value={watchedFormData.job_description?.length}
                    />
                    {MAX_JOB_DESCRIPTION_LENGTH -
                      watchedFormData.job_description?.length <=
                      20 && (
                      <Text position="absolute" fontSize="xs">
                        {MAX_JOB_DESCRIPTION_LENGTH -
                          watchedFormData.job_description?.length}
                      </Text>
                    )}
                  </Flex> */}
                </Box>
              </FormControl>

              <Box>
                <Heading marginTop="0" marginBottom="2" size="med">
                  Preview
                </Heading>
                <JobCardPreview
                  job={watchedFormData}
                  publicLogoUrl={publicLogoUrl}
                />
              </Box>

              {isSubmitting ? (
                <Button isLoading loadingText="Submitting" variant="outline">
                  Submitting, please wait
                </Button>
              ) : (
                <Button disabled={formSubmitSuccess || !user} type="submit">
                  Submit for review
                </Button>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
    </Box>
  );
};

export default PostJobPage;
