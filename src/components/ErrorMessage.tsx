interface ErrorMessageProps {
  message: string | undefined
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="py-1.5 px-2 rounded-sm bg-red-300 text-red-600 text-sm">
      {message}
    </div>
  )
}

export default ErrorMessage
