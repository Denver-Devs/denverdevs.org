import CompanyLogo from "@/components/ImageUpload";
import { jobTagsArray } from "@/utils/helpers/jobTagsArray";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";

const PostJobForm = () => {
  return (
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
          <FormHelperText mb="3">Separate multiple locaitons with commas</FormHelperText>
          <FormErrorMessage>{errors.location}</FormErrorMessage>
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
                      Hybrid (remote + in-person)
                    </Radio>
                  </WrapItem>
                  <WrapItem>
                    <Radio value="on-site" ref={field.ref}>
                      On-site only
                    </Radio>
                  </WrapItem>
                </Wrap>
              </RadioGroup>
            )}
            control={control}
            name="tags"
          />
        </FormControl>

        <FormControl isInvalid={errors.url} isRequired>
          <FormLabel htmlFor="url">Link to job description</FormLabel>
          <InputGroup>
            <InputLeftAddon children="https://" />
            <Input type="url" {...register("job_url", { required: true })} />
          </InputGroup>
          <FormErrorMessage>{errors.url}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.logo}>
          <FormLabel htmlFor="logo">Company Logo URL</FormLabel>
          <CompanyLogo
            url={company_logo_url}
            size={150}
            onUpload={(url) => {
              setCompayLogoUrl(url);
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
  );
};

export default PostJobForm;
