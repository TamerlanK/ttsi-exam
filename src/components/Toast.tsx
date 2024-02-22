import { AlertTriangle } from "lucide-react"

interface ToastProps {
  message: string
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <div className="bg-red-500 shadow-lg rounded-lg p-5 max-w-sm">
      <div className="flex items-center justify-center text-white">
        <div className="mr-4">
          <AlertTriangle />
        </div>
        <div>
          <h4 className="text-lg font-semibold">Xəta!</h4>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Toast
