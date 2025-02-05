import { z } from "zod";
const emailSchema = z.string().email();

const validateEmailInput = (emailInput: string) => {
  const zParsedEmail = emailSchema.safeParse(emailInput);
  if (zParsedEmail.success === false) {
    const { error } = zParsedEmail;
    throw new Error(error.issues[0].message as string);
  }
};

export { validateEmailInput };
