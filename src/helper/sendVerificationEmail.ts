import { resend } from "@/lib/resend";
import VerificationEmail from "@/../emails/verificationEmail";
import { Apiresponse } from "@/types/apiResponse";

interface SendVerificationEmailProps {
  username: string;
  email: string;
  otp: string;
}

export async function sendVerificationEmail({
  username,
  otp,
  email,
}: SendVerificationEmailProps): Promise<Apiresponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "verification email",
      react: VerificationEmail({ username, otp }),
    });
    return { success: true, message: "verification email send successfully" };
  } catch (emailError) {
    console.log("Failed to send email", emailError);
    return { success: false, message: "Failed to send email" };
  }
}
