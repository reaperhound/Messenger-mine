// "use client";

import clsx from "clsx"

interface ButtonProps {
  variants: "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "error" | "warning" | "outline-primary" | "outline-secondary" | "outline" ,
  text: string,
  disabled: boolean,
  type?: "submit" | "reset",
  onClick?: ()=> void,
}


export default function Button({ disabled, text, variants, onClick, type}:ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={clsx(`
      btn mx-auto`,
      variants === "primary" && `btn-primary`,
      variants === "secondary" && `btn-secondary`,
      variants === "accent" && `btn-accent`,
      variants === "ghost" && `btn-ghost`,
      variants === "error" && `btn-error`,
      variants === "info" && `btn-info`,
      variants === "warning" && `btn-warning`,
      variants === "success" && `btn-success`,
      variants === "outline" && `btn-outline`,
      variants === "outline-primary" &&  `btn-outline btn-primary`,
      variants === "outline-secondary" && `btn-outline btn-secondary`,
      )}
     >
      {text}
    </button>
  )
}
