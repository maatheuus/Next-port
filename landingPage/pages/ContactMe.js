import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useScroll, useTransform } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import Heading from "./Heading";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Seu nome deve conter ao menos 2 caracteres",
  }),
  email: z.string().email({
    message: "Deve ser um email válido",
  }),
  description: z.string().min(15, {
    message: "Sua mensagem deve ter ao menos 15 caracteres.",
  }),
});

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

function ContactMe() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit() {
    toast({
      title: "Enviado com sucesso",
      description: "Assim que possível entrarei em contato :)",
    });
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      style={{ scale }}
      className="mt-12 h-svh"
    >
      <motion.div
        transition={transition}
        variants={variants}
        className="flex flex-col gap-4"
      >
        <Heading label="Contato." />
        <div>
          <p className="text-base text-primary-gray">
            Mande uma mensagem por aqui ou diretamente{" "}
            <b> matts14smkd@gmail.com</b>.
          </p>
        </div>
        <div style={{ maxWidth: "60%" }}>
          <Form {...form}>
            <form
              action="https://formsubmit.co/matts14smkd@gmail.com"
              method="POST"
              onSubmit={form.handleSubmit(onSubmit)}
              className="text-xl space-y-2"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Escreva seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Escreva seu email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sua mensagem</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Escreva sua mensagem" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>

        <footer className="h-full flex items-end justify-end">
          <p className="mr-2">@2024 Matheus</p>
          <p>&copy; All the right reserved</p>
        </footer>
      </motion.div>
    </motion.section>
  );
}

export default ContactMe;
