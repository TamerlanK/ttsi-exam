export const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full bg-primary">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between w-full h-16 px-4">
          <a href="#" className="cursor-pointer shrink-0">
            <img src="./logo.png" alt="logo" width={100} className="shrink-0" />
          </a>
          <p className="text-neutral-100">İmtahan mərkəzi</p>
        </header>
      </div>
    </div>
  )
}
