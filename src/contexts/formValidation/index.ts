import { z } from "zod";

const userSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type UserType = z.infer<typeof userSchema>;

const user: UserType = {
  email: "rafael@gmail.com",
  password: "12456",
};

const result = userSchema.parse(user);

console.log(result);
