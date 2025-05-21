export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-blue-500 text-blac">
      <nav className="flex w-full items-center justify-between">
        <div className="flex gap-2">
          <span className="material-symbols-outlined">menu</span>
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className="flex gap-2">
          <span className="material-symbols-outlined">notifications</span>
          <span className="material-symbols-outlined">minimize</span>
          <span className="material-symbols-outlined">close</span>
        </div>
      </nav>
    </header>
  )
}
