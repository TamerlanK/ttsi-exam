import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { cn } from "../lib/utils"
import { LoginFormSchemaType, loginFormSchema } from "../lib/validation"
import { Check, X } from "lucide-react"
import ErrorMessage from "./ErrorMessage"
import Button from "./Button"

const LoginForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid, isSubmitting },
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<LoginFormSchemaType> = (data) => {
    console.log(data)
    navigate("/pre-exam-start")
  }
  return (
    <div className="w-full bg-white p-1.5 items-center">
      <div className="relative flex items-center justify-center h-40">
        <h1 className="absolute text-2xl font-semibold text-center text-neutral-100">
          ONLAYN İMTAHAN
        </h1>
        <img
          src="./hero.jpeg"
          alt="hero"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <form
        className="flex flex-col gap-4 p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <div className="text-neutral-600">
            <label htmlFor="fin">FİN nömrə</label>
            <div className="w-full relative mt-1">
              <input
                id="fin"
                className={cn(
                  "w-full rounded-sm outline-none border focus:border-gray-500 border-gray-300 h-8 px-1.5 transition uppercase",
                  dirtyFields.fin
                    ? errors.fin
                      ? "border-red-400 focus:border-red-600"
                      : "border-emerald-400 focus:border-emerald-600"
                    : ""
                )}
                maxLength={7}
                {...register("fin")}
              />
              <div className="absolute right-3 top-0 inset-y-0 flex justify-center items-center">
                {dirtyFields.fin ? (
                  errors.fin ? (
                    <X className="size-5 text-red-600" />
                  ) : (
                    <Check className="size-5 text-emerald-600" />
                  )
                ) : null}
              </div>
            </div>
          </div>
          {errors.fin && <ErrorMessage message={errors.fin.message} />}
        </div>

        <div className="space-y-2 relative">
          <div className="text-neutral-600">
            <label htmlFor="fin">Şifrə</label>
            <div className="w-full relative mt-1">
              <input
                id="password"
                type="password"
                className={cn(
                  "w-full rounded-sm outline-none border focus:border-gray-500 border-gray-300 h-8 px-1.5 transition",
                  dirtyFields.password
                    ? errors.password
                      ? "border-red-400 focus:border-red-600"
                      : "border-emerald-400 focus:border-emerald-600"
                    : ""
                )}
                {...register("password")}
              />
              <div className="absolute right-3 top-0 inset-y-0 flex justify-center items-center">
                {dirtyFields.password ? (
                  errors.password ? (
                    <X className="size-5 text-red-600" />
                  ) : (
                    <Check className="size-5 text-emerald-600" />
                  )
                ) : null}
              </div>
            </div>
          </div>
          {errors.password && (
            <ErrorMessage message={errors.password.message} />
          )}
        </div>
        <Button
          className="h-8 flex justify-center items-center text-sm rounded-[4px]"
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Giriş
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
