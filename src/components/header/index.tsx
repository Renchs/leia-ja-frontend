
import { Link, useLocation } from "react-router-dom";
import image from "/src/assets/logo-2.png";
import searchImg from "/src/assets/Search.svg";
export function Header() {
  const path = useLocation().pathname;
  if (path === "/login" || path === "/signup") {
    return;
  }
  return (
    <header className="min-h-28 flex flex-col lg:flex-row gap-4 items-center justify-around bg-white">
      <div className="flex items-center justify-center gap-3">
        <img className="h-10" src={image} alt="LeiaJá Logo" />
        <h1 className="text-2xl font-semibold">LeiaJá</h1>
      </div>
      <div className="flex items-center justify-center h-12 w-10/12 md:w-1/2 rounded bg-zinc-200 gap-1">
        <img className="w-5 ml-3" src={searchImg} alt="" />
        <input className="w-full h-full bg-transparent focus:outline-none " type="search" placeholder="Search"/>
      </div>
      <nav>
        <ul className="flex gap-4 text-xl font-semibold">
          <Link to="/">Explorar</Link>
          <Link to="/signup">Cadastre-se</Link>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
    </header>
  )
}
