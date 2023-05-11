'use client';

import Button from "@/app/components/Button"
import Input from "@/app/components/Input"
import { useCallback, useState } from "react"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

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
      </div>
    </div>
  )
}