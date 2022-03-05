import { supabase } from "@/lib/supabase/";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import * as yup from "yup";
import TextPageHeader from "./TextPageHeader";

const profileFormSchema = yup
  .object({
    username: yup.string().required(),
    website: yup.string().required(),
    affiliation: yup.string().required(),
  })
  .required();

export default function Account({ session }) {
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [affiliation, setAffiliation] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(profileFormSchema) });

  const getProfile = async () => {
    const user = supabase.auth.user();
    try {
      let { data, error, status } = await supabase
        .from("users")
        .select(`username, website, affiliation`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAffiliation(data.affiliation);
      }
    } catch (error) {
      alert(error.message);
    } finally {
    }
  };

  const onSubmit = async (formData) => {
    event.preventDefault();
    const user = supabase.auth.user();

    const formattedData = {
      id: user.id,
      username: formData.username || username,
      website: formData.website || website,
      affiliation: formData.affiliation || affiliation,
      updated_at: new Date(),
    };

    try {
      let { error } = await supabase.from("users").upsert(formattedData, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box mt="20" maxWidth="80ch" margin="auto">
      <TextPageHeader text="Update your profile" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="8" mt="4" paddingY="4">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="text" value={session.user.email} disabled />
            <FormHelperText>Email cant be updates once set.</FormHelperText>
          </FormControl>
          <FormControl isInvalid={errors.username} isRequired>
            <FormLabel htmlFor="username">Name</FormLabel>
            <Input id="username" type="text" defaultValue={username} {...register("username", { required: true })} />
            <FormErrorMessage>{errors.username && "This field is required."}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.website} isRequired>
            <FormLabel htmlFor="website">Company or personal website</FormLabel>
            <Input id="website" type="website" defaultValue={website} {...register("website")} />
            <FormErrorMessage>{errors.website && "Please enter a valid URL."}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.affiliation} isRequired>
            <FormLabel htmlFor="affiliation">
              How are you affiliated with the company you&apos;re posting for?
            </FormLabel>
            <Controller
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup onChange={field.onChange} value={field.value}>
                  <Wrap spacing="4">
                    <WrapItem>
                      <Radio value="hiring-manager" ref={field.ref}>
                        Hiring Manager
                      </Radio>
                    </WrapItem>
                    <WrapItem>
                      <Radio value="company-employee" ref={field.ref}>
                        Company Employee
                      </Radio>
                    </WrapItem>
                    <WrapItem>
                      <Radio value="recruter-or-staffing" ref={field.ref}>
                        Recruiter / Staffing Agency
                      </Radio>
                    </WrapItem>
                  </Wrap>
                </RadioGroup>
              )}
              control={control}
              name="affiliation"
            />
            <FormErrorMessage>{errors.affiliation && "This field is required."}</FormErrorMessage>
          </FormControl>
          <HStack>
            {isSubmitting ? (
              <Button isLoading loadingText="Submitting" variant="outline">
                Updating Profile...
              </Button>
            ) : (
              <Button type="submit">Update Profile</Button>
            )}

            <Button onClick={() => supabase.auth.signOut()} variant="outline">
              Sign Out
            </Button>
          </HStack>
        </Stack>
      </form>
    </Box>
  );
}
