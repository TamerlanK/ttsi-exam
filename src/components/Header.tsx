export const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full bg-primary">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between w-full px-4 py-3">
          <a href="#" className="cursor-pointer">
            <img
              src="./logo.png"
              alt="logo"
              width={100}
              className="shrink-0"
            />
          </a>
          <a href="#" className="text-neutral-200 hover:text-white">
            İmtahan mərkəzi
          </a>
        </header>
      </div>
    </div>
  )
}
