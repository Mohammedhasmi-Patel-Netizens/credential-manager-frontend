import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  const active = "bg-emerald-500 text-white";
  const inactive = "text-gray-300 hover:text-white hover:bg-gray-800";

  return (
    <>
      <nav className="flex items-center gap-3 px-6 py-4 bg-gray-900 shadow-md">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Home
        </NavLink>

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
      </nav>

      <main className="p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </>
  );
}