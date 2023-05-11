// "use client";

import { UseFormRegister, FieldValues } from "react-hook-form/dist/types"

interface InputProps {
  label: string,
  id : string,
  required: boolean,
  color: string,
  width?: string,
  height?: string,
  disabled: boolean
  type: string,
  placeholder: string,
  register: UseFormRegister<FieldValues>,
}

export default function ({color, label, required, height, id, width, disabled, placeholder, type, register}:InputProps) {

  return (
    <>
    <label className="text-gray-500">
      {label}
    </label>
    <input 
      id={id}
      {...register(id)}
      type={type} 
      placeholder={placeholder} 
      required={required} 
      disabled={disabled} 
      className={`input input-bordered input-md ${color} w-[${width}] h-[${height}] shadow-md`} 
    />
    </>
  )
}