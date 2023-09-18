import { z } from 'zod';

const registerSchema = z.object({
  name : z.string().nonempty(),
  email : z.string().email().nonempty(),
  password : z.string().min(8).nonempty(),
})

export default registerSchema;