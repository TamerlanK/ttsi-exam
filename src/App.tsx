import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

import RootLayout from "./layouts/RootLayout"
import LoginPage from "./pages/LoginPage"
import PreExamPage from "./pages/PreExamPage"
import PreExamPage2 from "./pages/PreExamPage2"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LoginPage />} />
      <Route path="pre-exam-start" element={<PreExamPage />} />
      <Route path="pre-exam" element={<PreExamPage2 />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
