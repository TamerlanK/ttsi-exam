interface NotificationProps {
  children: React.ReactNode
  variant: "info" | "warning"
}

const colorMap = {
  info: {
    text: "text-[#324E81]",
    bg: "bg-[#324E81]",
  },
  warning: {
    text: "text-[#D10A2E]",
    bg: "bg-[#D10A2E]",
  },
}

const Notification = ({ children, variant }: NotificationProps) => {
  const buttonStyles = variant === "warning" ? colorMap.warning : colorMap.info
  return (
    <div className="w-full bg-white px-4 py-2 rounded-[4px] overflow-hidden relative text-sm">
      <p className={`${buttonStyles.text}`}>{children}</p>
      <div
        className={`absolute h-full w-[5px] left-0 inset-y-0 ${buttonStyles.bg}`}
      />
    </div>
  )
}

export default Notification
