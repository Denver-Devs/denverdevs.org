import Auth from "@/components/Auth";
import ImageUpload from "@/components/ImageUpload";
import { useUserContext } from "@/context/UserContext";
import { supabase } from "@/lib/supabase/";
import { jobTagsArray } from "@/utils/helpers/jobTagsArray";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import Head from "next/head";
import { Router } from "next/router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

const PostJobPage = () => {
  const { user } = useUserContext();
  const [companyAffilation, setCompanyAffilation] = useState(false);
  const [formSubmitSuccess, setformSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const errorToast = useToast();
  const [logoUrl, setLogoUrl] = useState(null);
  const [publicLogoUrl, setPublicLogoUrl] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

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
    };

    console.log(formattedData);

    try {
      const { error, status } = await supabase.from("posts").insert([formattedData]).single();

      if (error) {
        throw error;
      }
      if (status === 201) {
        setformSubmitSuccess(true);
        Router.push("/jobs/post-job-success");
      }
    } catch (error) {
      console.error("error", error);
      setFormErrors(error);
    }
  };

  const locationOptions = [
    { value: "remote", label: "Remote" },
    { value: "denver", label: "Denver" },
    { value: "dtc", label: "DTC" },
    { value: "boulder", label: "Boulder" },
    { value: "ft-collins", label: "Fort Collins" },
  ];

  return (
    <Box marginTop={["24", "32"]}>
      <Head>
        <title>Post a Job | Denver Devs Job Board</title>
      </Head>
      {user ? (
        <Box maxWidth="80ch" marginX="auto" borderWidth="1px" borderRadius="md" padding="8">
          <Alert padding="4" mb="8" borderRadius="md" status="warning">
            <AlertIcon />

            <Text mb="2">
              <Text fontFamily="heading" fontSize="lg" mb="2">
                Are you affiliated with this company?
              </Text>
              We require that you are the &quot;source&quot; of this job, either by working at the company or actively
              hiring for it as a recruiting / talent agency. Dishonesty on this question will result in the removal of
              this post, and possible deactivation of your account.
            </Text>
          </Alert>
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column" }}>
            <Stack spacing="8">
              <FormControl isInvalid={errors.company} isRequired>
                <FormLabel htmlFor="company">Company Name</FormLabel>
                <Input type="text" {...register("company", { required: true })} />
                <FormErrorMessage>{errors.company && "This field is required."}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.title} isRequired>
                <FormLabel htmlFor="title">Job title</FormLabel>
                <Input id="title" {...register("title", { required: true })} />
                <FormErrorMessage>{errors.title && "This field is required."}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.location?.ref} isRequired>
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
                      placeholder="Select applicable locations (max 3)"
                      closeMenuOnSelect={false}
                      selectedOptionStyle="check"
                      hideSelectedOptions={false}
                      maxLength={3}
                    />
                  )}
                />
                <FormErrorMessage>
                  {errors.location && "This field is required, please select one option"}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.location_type} isRequired>
                <FormLabel htmlFor="location">Commute Type</FormLabel>
                <Controller
                  rules={{ required: true }}
                  render={({ field }) => (
                    <RadioGroup colorScheme="blue" onChange={field.onChange} value={field.value}>
                      <Wrap spacing="4">
                        <WrapItem>
                          <Radio value="remote" ref={field.ref}>
                            Remote
                          </Radio>
                        </WrapItem>
                        <WrapItem>
                          <Radio value="hybrid" ref={field.ref}>
                            Remote + in-office
                          </Radio>
                        </WrapItem>
                        <WrapItem>
                          <Radio value="on-site" ref={field.ref}>
                            In-office only
                          </Radio>
                        </WrapItem>
                      </Wrap>
                    </RadioGroup>
                  )}
                  control={control}
                  name="location_type"
                />
                <FormErrorMessage>{errors.location_type && "This field is required."}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.url} isRequired>
                <FormLabel htmlFor="url">Link to job description</FormLabel>
                <InputGroup>
                  <InputLeftAddon>https://</InputLeftAddon>
                  <Input type="url" {...register("job_url", { required: true })} />
                </InputGroup>
                <FormErrorMessage>{errors.url}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.logo}>
                <FormLabel htmlFor="logo">Upload a company logo</FormLabel>
                <ImageUpload
                  bucket="logos"
                  url={logoUrl}
                  size={150}
                  onUpload={(url) => {
                    setLogoUrl(url);
                    getPublicUrl(url);
                  }}
                />
                <FormErrorMessage>{errors.logo}</FormErrorMessage>
              </FormControl>

              <FormControl>
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
                      placeholder="Select applicable tags (max 5)"
                      closeMenuOnSelect={false}
                      selectedOptionStyle="check"
                      hideSelectedOptions={false}
                      maxLength={5}
                    />
                  )}
                />
              </FormControl>

              {isSubmitting ? (
                <Button isLoading loadingText="Submitting" colorScheme="blue" variant="outline">
                  Submitting, please wait
                </Button>
              ) : (
                <Button type="submit" colorScheme="blue" disabled={formSubmitSuccess}>
                  Submit for review
                </Button>
              )}
            </Stack>
          </form>
        </Box>
      ) : (
        <Box>
          <Auth redirectPath="/jobs/post-job" />
        </Box>
      )}
    </Box>
  );
};

export default PostJobPage;
