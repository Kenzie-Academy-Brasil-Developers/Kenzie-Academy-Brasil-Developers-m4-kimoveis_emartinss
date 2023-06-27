import { z } from "zod";

export const login = z.object({
    email:z.string().max(45).email().nonempty(),
    password:z.string().max(120).nonempty()
})