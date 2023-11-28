import { z } from 'zod';

const file = z.object({
  lastModified: z.number(),
  name: z.string(),
  size: z.number(),
  type: z.string(),
  webkitRelativePath: z.string(),
});

export const formSchema = z.object({
  cover: file,
  profile: file,
  name: z.string().min(3),
  admins: z.array(z.string()),
  members: z.array(z.string()),
  description: z.string().min(3, {
    message: 'Descriptions must minimum 3 characters ',
  }),
});
export type InferedFormSchema = z.infer<typeof formSchema>;
