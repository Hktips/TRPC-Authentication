import { publicProcedure, router } from './trpc';
import {z} from "zod";
import { createHTTPServer } from '@trpc/server/adapters/standalone';

// const todoInputType= z.object({
//     title: z.string(),
//     description: z.string(),
//     done: z.boolean().optional()
// })

const appRouter = router({
  // createTodo: publicProcedure
  // .input(todoInputType)
  // .mutation(async(opts)=>{
  //   console.log("hi therir");
  //   const title=opts.input.title;
  //   const description=opts.input.description;

  //   /// do db stuff here
  //   return{
  //       id: "1",
  //       description:"go to gym"

  //   }
  // }),
  
  signUp: publicProcedure
  .input(z.object({
    email: z.string(),
    password: z.string()

  }))
  .mutation(async(opts)=>{
    //context
    // const username=opts.ctx.username;
    // console.log(username);
    let email=opts.input.email;
    let password=opts.input.password;
    // do validation here
     //do database stuff here
  let token="1234560";

  return{
    token
  }

  }),
  createTodos: publicProcedure
  .input(z.object({
    titles: z.string()
  }))
  .mutation(async (opts)=>{
    console.log(opts.ctx.username)
    return{
      id: "1"
    }
  })

});
 

const server = createHTTPServer({
    router: appRouter,
    createContext(opts){
      let autHeader = opts.req.headers["athorization"];
      console.log(autHeader);
      //jwt.varift
      return{
        username: "125"
      }
    }
  });
   
  server.listen(3002);

export type AppRouter = typeof appRouter;