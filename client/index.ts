import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
//     👆 **type-only** import
 
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3002',
      async headers(){
        return{
          authorization:"Bearer 159"
        }
      }
    }),
  ],
}); 
async function main() {
  //  let response= await trpc.signUp.mutate({
  //       email: "hemant@gmail.com",
  //       password: "123450",
  //   })
  let response= await trpc.createTodos.mutate({
    titles: "hemant@gmail.com",
})
}
