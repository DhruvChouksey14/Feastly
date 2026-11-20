import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useAppData } from "../context/AppContext";
import { useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { BiMapPin, BiSearch } from "react-icons/bi";

const Navbar = () => {
  const { isAuth, city, quauntity } = useAppData();
  const currLocation = useLocation();
  const isHomePage = currLocation.pathname === "/";
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) setSearchParams({ search });
      else setSearchParams({});
    }, 400);
    return () => clearTimeout(timer);
  }, [search, setSearchParams]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
        <Link to="/" aria-label="Feastly home" className="flex items-center gap-2.5">
          <img src="/feastly-mark.svg" alt="" className="h-9 w-9 rounded-xl" />
          <span className="text-[1.4rem] font-extrabold tracking-tight text-neutral-950">Feastly<span className="text-neutral-400">.</span></span>
        </Link>
        <nav className="flex items-center gap-5">
          <Link to="/cart" aria-label="Shopping cart" className="relative rounded-full p-2 text-neutral-800 transition hover:bg-neutral-100">
            <CgShoppingCart className="h-6 w-6" />
            <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-neutral-950 px-1 text-[10px] font-bold text-white">{quauntity}</span>
          </Link>
          {isAuth ? (
            <Link to="/account" className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100">Account</Link>
          ) : (
            <Link to="/Login" className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700">Login</Link>
          )}
        </nav>
      </div>
      {isHomePage && (
        <div className="border-t border-neutral-100 px-4 py-3">
          <div className="mx-auto flex max-w-7xl items-center rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm focus-within:border-neutral-500">
            <div className="flex items-center gap-2 border-r border-neutral-200 px-3 text-neutral-700">
              <BiMapPin className="h-4 w-4" />
              <span className="max-w-35 truncate text-sm">{city}</span>
            </div>
            <div className="flex flex-1 items-center gap-2 px-3">
              <BiSearch className="h-4 w-4 text-neutral-400" />
              <input type="text" placeholder="Search restaurants or dishes" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-transparent py-2 text-sm outline-none" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

