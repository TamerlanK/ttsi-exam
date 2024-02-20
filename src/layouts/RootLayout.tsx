import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
