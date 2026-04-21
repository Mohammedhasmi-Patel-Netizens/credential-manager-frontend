import { Outlet, NavLink } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

export default function RootLayout() {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  const active = "bg-emerald-500 text-white";
  const inactive = "text-gray-300 hover:text-white hover:bg-gray-800";

  return (
    <>
      <nav className="flex items-center justify-betweengap-3 px-6 py-4 bg-gray-900 shadow-md w-full">
        <div className=" flex flex-1">
          <NavLink to="/">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-500">MyApp</h1>
        </NavLink>
        </div>
        <div className="flex flex-1 gap-4">

        <NavLink
          to="/hasmi"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Hasmi
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          About
        </NavLink>
         <NavLink
          to="/counter"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Counter
        </NavLink>
        </div>
          <div className=" flex items-center flex-end gap-4">
            <NavLink to="/cart" className="px-4 py-2 rounded-md text-sm font-medium cursor-pointer text-gray-300 hover:text-white hover:bg-gray-800">
              <ShoppingCart/>
            </NavLink>
            <NavLink to="/profile" className="px-4 py-2 rounded-md text-sm font-medium cursor-pointer text-gray-300 hover:text-white hover:bg-gray-800">
              <User/>
            </NavLink>
          </div>
      </nav>
      

      <main className="p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </>
  );
}