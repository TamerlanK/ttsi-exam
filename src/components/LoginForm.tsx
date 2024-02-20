import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const [fin, setFin] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ fin, password })
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
      <form className="flex flex-col gap-4 p-6" onSubmit={onSubmit}>
        <label htmlFor="fin" className="text-neutral-600">
          FİN nömrə
          <input
            type="text"
            id="fin"
            className="w-full rounded-sm outline-none border focus-within:border-gray-500 border-gray-300 h-8 px-1.5 mt-1"
            value={fin}
            onChange={(e) => setFin(e.target.value)}
            required
          />
        </label>

        <label htmlFor="password" className="text-neutral-600">
          Şifrə
          <input
            type="password"
            id="password"
            className="w-full rounded-sm outline-none border focus-within:border-gray-500 border-gray-300 h-8 px-1.5 mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-primary text-white text-sm h-8 rounded-[4px]"
        >
          Giriş
        </button>
      </form>
    </div>
  )
}

export default LoginForm
