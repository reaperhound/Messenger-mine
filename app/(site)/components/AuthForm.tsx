'use client';

import Button from "@/app/components/Button"
import Input from "@/app/components/Input"
import { useCallback, useState } from "react"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import SocialButton from "./SocialButton";
import { BsGoogle, BsGithub } from "react-icons/bs"

export default function AuthForm () {
  type Variant = "LOGIN" | "REGISTER"
  const [variant, setVariant] = useState<Variant>("LOGIN")
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    variant === "LOGIN" 
    ? setVariant("REGISTER")
    : setVariant("LOGIN")
  },[variant])


  const {register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues : {
      name: "",
      email: "",
      password: ""      
    }
  })

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    console.log(data);
    reset();
  }

  const socialAuthHandler = (action: string) => {
    if(action === "google") {

    }

    if(action === "github") {

    }
  }

  return (
    <div 
      className="mt-8 w-full mx-auto max-w-md"
    >
      <div 
        className="bg-white mt-3 px-4 rounded-lg py-5"
      >
        
        <form 
          className="flex flex-col space-y-6"
        >
          {
            variant === "REGISTER" && 
            <Input 
              register={register}
              color="bg-gray-200"
              id="name"
              label="Name"
              required={true}
              disabled={isLoading}
              type="text"
              placeholder="eg: John Doe"
            />
          }
          <Input 
            register={register}
            color="bg-gray-200"
            id="email"
            label="Email"
            required={true}
            disabled={isLoading}
            type="email"
            placeholder="eg: johndoe@gmail.com"
          />
          <Input 
            register={register}
            color="bg-gray-200"
            id="password"
            label="Password"
            required={true}
            disabled={isLoading}
            type="password"
            placeholder=""
          />
          <Button 
            disabled={isLoading}
            variants="outline-primary"
            type="submit"
            onClick={handleSubmit(onSubmitHandler)}
            text={variant === "LOGIN" ? "Sign in" : "Register"}
          />
        </form>
        <div className="mt-6">
          <h3 className="flex flex-row before:content-[''] after:content-[''] before:flex-1 after:flex-1 before:border-b after:border-b before:border-gray-300 after-border-gray-300 after:m-auto before:m-auto">
            or continue with
          </h3>
        </div>
        <div className=" mt-6 flex gap-2" >
          <SocialButton 
            icon={BsGoogle}
            onClick={() => socialAuthHandler("google")}
          />
          <SocialButton
            icon={BsGithub}
            onClick={() => socialAuthHandler("github")}
          />
        </div>
        <div className="text-center mt-6">
          <p>
          {
            variant === "LOGIN" ? "New to messenger ? " : "Already have an account ? "
          }
          {
            variant === "LOGIN" 
            ? <span 
                className="underline text-gray-500 hover:text-gray-600 cursor-pointer"
                onClick={toggleVariant}>Create an account</span>
            : <span
                className="underline text-gray-800 hover:text-gray-600 cursor-pointer"
                onClick={toggleVariant}>Sign in</span>
          }
          </p>
        </div>
      </div>
    </div>
  )
}