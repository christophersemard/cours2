// src/app/signin/page.tsx

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignInButton from "@/components/SignInButton";
import { getProviders } from "next-auth/react";
import { getCsrfToken } from "next-auth/react"


const SignInPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("TEST "+ session);
  
  if (session) {
    redirect("/");
  } else {
   const csrfToken=  await getCsrfToken()

  const providers = await getProviders()
    console.log(providers);
    

    return (
      <main className="flex items-center justify-center min-h-lvh">

      <div className="flex justify-center flex-col items-center gap-3 bg-neutral min-w-60 w-96 max-w-96 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-0">Connexion</h1>

        
      <div className="divider my-2 w-full"></div>
       <form className="flex flex-col items-center gap-3 w-full" method="post" action="/api/auth/callback/credentials">

      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
       
        <div className="flex flex-col gap-2 w-full">
      <label htmlFor="username">
        Email
      </label>
        <input className="input  w-full" name="username" id="username" type="text" />
        </div>     
        <div className="flex flex-col gap-2 w-full">
      <label htmlFor="password">
        Mot de passe
      </label> </div>
        <input className="input  w-full  mb-3" name="password" id="password" type="password" />
      <button className="btn btn-primary  w-full" type="submit">Se connecter</button>

      <div className="divider w-full">OU</div>
      <div className="flex flex-col gap-3 w-full">

        { providers && Object.values(providers).map((provider) =>  provider.type == "oauth" && <SignInButton key={provider.id} provider={provider} />)
        }
        </div>
    </form>
      </div>
        </main>
    );
  }
};

export default SignInPage;