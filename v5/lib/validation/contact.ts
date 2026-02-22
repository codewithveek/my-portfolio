import { z } from "zod";

export const CONTACT_NAME_MAX = 80;
export const CONTACT_EMAIL_MAX = 120;
export const CONTACT_MESSAGE_MAX = 3000;

const trimmedString = () => z.string().trim();

export const contactSubmissionSchema = z.object({
  name: trimmedString()
    .min(1, "Name is required.")
    .max(
      CONTACT_NAME_MAX,
      `Name must be ${CONTACT_NAME_MAX} characters or less.`
    ),
  email: trimmedString()
    .min(1, "Email is required.")
    .max(
      CONTACT_EMAIL_MAX,
      `Email must be ${CONTACT_EMAIL_MAX} characters or less.`
    )
    .email("Please enter a valid email address."),
  message: trimmedString()
    .min(1, "Message is required.")
    .max(
      CONTACT_MESSAGE_MAX,
      `Message must be ${CONTACT_MESSAGE_MAX} characters or less.`
    ),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
