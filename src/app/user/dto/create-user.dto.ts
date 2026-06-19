import { z } from 'zod';

export const createBookingSchema = z.object({
  pickupLocation: z.string().min(1, 'Pickup location is required'),
  dropOffLocation: z.string().min(1, 'Drop off location is required'),
  price: z.number().positive('Price must be positive'),
});

export type CreateBookingDto = z.infer<typeof createBookingSchema>;
