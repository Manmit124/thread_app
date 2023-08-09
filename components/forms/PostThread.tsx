"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { updateUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";
import { ThreadValidation } from "@/lib/validation/thread";
import { UserValidation } from "@/lib/validation/user";
import { createThread } from "@/lib/actions/thread.actions";



interface Props {
  user: {
    id: String;
    objectId: String;
    username: String;
    name: String;
    bio: String;
    image: String;
  };
  btnTitle: String;
}


  


function PostThread({userId}:{userId:string}){

  const router=useRouter();
  const pathname=usePathname();
  
  const form = useForm<z.infer<typeof ThreadValidation>>({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread:'',
      accountId:userId,

    },
  });

  const onSubmit=async(values:z.infer<typeof ThreadValidation>) => {
await createThread({
    text:values.thread,
     author:userId,
      communityId:null, 
      path:pathname
});
router.push("/");


  }

    return(
        <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex mt-10 flex-col justify-start gap-10"
        >
             <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base-semibold text-light-2">
                Content
              </FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                <Textarea
                rows={15}
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-primary-500">
  Post Thread
        </Button>
            </form>
            </Form>
    )

}
export default PostThread; 