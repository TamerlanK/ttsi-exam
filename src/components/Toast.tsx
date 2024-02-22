interface ToastProps {
  message: string
}

const Toast = ({ message }: ToastProps) => {
  return (
    <div className="p-4 rounded-md text-center bg-red-600 text-white">
      <p className="font-semibold">{message}</p>
    </div>
  )
}

export default Toast
