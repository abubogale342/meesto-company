import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [toggleMobileNavState, setToggleMobileNavState] = useState(false);

  const toggleMobileNav = () => {
    setToggleMobileNavState((state) => !state);
  };

  return (
    <nav className="fixed top-0 w-full z-10 flex justify-between items-center bg-slate-200 h-24 shadow-md shadow-zinc-400">
      <a href="#home">
        <Image
          src="/logo.png"
          height={45}
          width={45}
          alt="logo"
          className="ml-6 sm:ml-12"
        />
      </a>
      <div className="mr-6 sm:hidden">
        <button onClick={toggleMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <ul className="hidden sm:flex">
        <li className="inline pr-6 font-semibold text-xl text-sky-900">
          <a href="#home">Home</a>
        </li>

        <li className="inline pr-6 font-semibold text-xl text-sky-900">
          <a href="#howitworks">How it works</a>
        </li>

        <li className="inline pr-16 font-semibold text-xl text-sky-900">
          <a href="#advantages">Advantages</a>
        </li>

        <li className="inline mr-6 font-semibold text-xl text-sky-900">
          <button>
            <span className="text-white bg-blue-500">EN</span>|<span>CZ</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
