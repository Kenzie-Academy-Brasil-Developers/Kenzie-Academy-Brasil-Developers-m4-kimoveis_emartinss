import { login } from "../../schemas/login.shema";
import { z } from "zod";

export type ILogin = z.infer<typeof login>;
export interface Token{
    token:string
}