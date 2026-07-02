import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
  // role: z.string().min(1, { message: 'Role is required' }),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
