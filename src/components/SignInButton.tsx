"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";

const SignInButton = ({provider} : {provider:ClientSafeProvider}) => {
  return (
    <button
      className="btn-accent btn-sm px-4 py-2  btn  w-full"
      onClick={() => signIn(provider.id)}
      type="button"
    >
      Se connecter avec {provider.name}
    </button>
  );
};

export default SignInButton;