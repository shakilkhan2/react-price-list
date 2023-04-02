import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, BeakerIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Products",
      path: "/products",
    },
    {
      id: 4,
      name: "Blogs",
      path: "/blogs",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-700" />
          )}
        </span>
      </div>

      <ul
        className={`md:flex absolute md:static duration-500 pl-8 py-2 bg-purple-400 ${
          open ? "top-6" : "-top-36"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
