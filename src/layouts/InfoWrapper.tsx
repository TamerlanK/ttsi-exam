import { useLocation } from "react-router-dom"
import { cn } from "../lib/utils"

interface InfoWrapperProps {
  children: React.ReactNode
  title: string
}

const InfoWrapper = ({ title, children }: InfoWrapperProps) => {
  const { pathname } = useLocation()

  return (
    <section className="bg-white rounded-sm w-full p-1.5">
      <div className="w-full bg-[#eeeeee] py-2 rounded-md text-md">
        <h1
          className={cn(
            "text-gray-900 font-semibold !text-md text-center",
            pathname === "/pre-exam" && "text-red-600"
          )}
        >
          {title}
        </h1>
      </div>
      {children}
    </section>
  )
}

export default InfoWrapper
