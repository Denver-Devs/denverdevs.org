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
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
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

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    event.preventDefault();

    const user = supabase.auth.user();
    const id = uuid();

    try {
      const { error, status } = await supabase
        .from("posts")
        .insert([{ ...formData, public_logo_url: logoUrl, approved: false, user_id: user.id, user_email: user.email }])
        .single();

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

  return (
    <Flex marginY="24" direction={{ base: "column", xl: "row" }}>
      <Head>
        <title>Post a Job | Denver Devs Job Board</title>
      </Head>
      {user ? (
        <Box
          marginBottom={{ base: "6", xl: "20" }}
          maxWidth="80ch"
          flex="auto"
          borderWidth="1px"
          borderRadius="md"
          padding="8"
        >
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
                <FormErrorMessage>{errors.company}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.title} isRequired>
                <FormLabel htmlFor="title">Job title</FormLabel>
                <Input id="title" {...register("title", { required: true })} />
                <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.location} isRequired>
                <FormLabel htmlFor="location">Location</FormLabel>
                <Input type="text" {...register("location", { required: true })} />
                <FormHelperText>Separate multiple locaitons with commas</FormHelperText>
                <FormErrorMessage>{errors.location}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.location_type} isRequired>
                <FormLabel htmlFor="location">Commute Type</FormLabel>
                <FormErrorMessage>{errors.location_type}</FormErrorMessage>
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
                  }}
                />
                <FormErrorMessage>{errors.logo}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="link">Job Tags</FormLabel>
                <Box borderWidth="1px" padding="4" borderRadius="lg">
                  <Controller
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <CheckboxGroup colorScheme="blue" onChange={field.onChange} value={field.value}>
                        <Wrap spacing="4">
                          {jobTagsArray.map((tag) => (
                            <WrapItem key={tag}>
                              <Checkbox value={tag} ref={field.ref}>
                                {tag}
                              </Checkbox>
                            </WrapItem>
                          ))}
                        </Wrap>
                      </CheckboxGroup>
                    )}
                    control={control}
                    name="tags"
                  />
                </Box>
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
      {/* <Box flex="1" maxWidth="300px" minWidth="300px" ml={{ base: "0", lg: "10" }}>
        <Box
          padding="4"
          borderRadius="md"
          color={useColorModeValue("#9a6700", "#d29922")}
          bg={useColorModeValue("#fef8c5", "#272115")}
          borderColor={useColorModeValue("#e7c000", "#9e6a03")}
          borderLeftWidth="thick"
        >
          <Heading size="sm" mb="2">
            Note
          </Heading>
          <Text fontSize="sm">
            <Link
              href="https://leg.colorado.gov/bills/sb19-085"
              isExternal
              color={useColorModeValue("yellow.900", "white")}
            >
              A new law was passed in Colorado <ExternalLinkIcon mx="2px" />
            </Link>
            that took effect on January 1, 2021, related to pay transparency. It requires that:
          </Text>
          <UnorderedList fontSize="sm">
            <ListItem>
              Employers must announce to all Colorado employees current job openings, and the pay ranges associated with
              them.
            </ListItem>
            <ListItem>
              All job postings for positions that can be hired for and/or performed in Colorado must indicate the hourly
              or salary compensation, or a range of the hourly or salary compensation, and a general description of all
              the benefits and other compensation to be offered to the hired applicant.
            </ListItem>
          </UnorderedList>
        </Box>
      </Box> */}
    </Flex>
  );
};

export default PostJobPage;
