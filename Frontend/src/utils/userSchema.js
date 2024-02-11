import { z } from "zod";

export default z.object({
  userName: z.string().min(3, { message: "Username is required" }),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    }),
});
