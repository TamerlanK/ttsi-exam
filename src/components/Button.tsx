import { ButtonHTMLAttributes } from "react"
import { cn } from "../lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

const Button = ({ onClick, className, children, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 text-white bg-primary rounded-[4px] disabled:opacity-75 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
