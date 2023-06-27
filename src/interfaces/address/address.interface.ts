import { z } from "zod";
import { AddressSchema } from "../../schemas/address.schema";

export type IAddress = z.infer<typeof AddressSchema>;
