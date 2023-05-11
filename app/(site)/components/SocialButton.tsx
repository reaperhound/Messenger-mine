import { IconType } from "react-icons"

interface SocialButtonProps {
  icon : IconType,
  onClick: () => void
}

export default function SocialButton ({onClick, icon: Icon }: SocialButtonProps) {

  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-slate-50 text-center w-full rounded-md border border-gray-400
      h-8 py-3 flex justify-center items-center hover:ring-1 ring-gray-300 shadow-md"
    >
      <Icon />
    </button>
  )
}