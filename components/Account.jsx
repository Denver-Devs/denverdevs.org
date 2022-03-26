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
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import * as yup from "yup";
import TextPageHeader from "./TextPageHeader";

export default function Account({ session }) {
  return (
    <Box maxWidth="80ch" margin="auto" marginTop="20">
      {/* <TextPageHeader text="Update your profile" /> */}
      <Stack marginTop="4" paddingY="4" spacing="8">
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input disabled id="email" type="text" value={session.user.email} />
          <FormHelperText>Email cant be updated once set.</FormHelperText>
        </FormControl>

        <Text>
          User Since: {format(new Date(session.user.created_at), "MMM dd Y")}
        </Text>

        <HStack>
          <Button onClick={() => supabase.auth.signOut()} variant="outline">
            Sign Out
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
}
