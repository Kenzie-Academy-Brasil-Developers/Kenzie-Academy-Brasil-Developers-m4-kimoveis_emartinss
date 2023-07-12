import { z } from "zod";

export const AddressSchema = z.object({
  id: z.number().optional(),
  street: z.string().max(45).min(1),
  zipCode: z.string().max(8).min(1),
  number: z.string().max(7).min(1).nullish(),
  city: z.string().max(20).min(1),
  state: z.string().max(2).min(1),
});

export const addressCreate = AddressSchema.omit({id:true})