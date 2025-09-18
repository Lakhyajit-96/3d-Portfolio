import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black dark:text-white" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black dark:text-white"}>
          Projects
        </NavLink>
        <NavLink to='/case-studies' className={({ isActive }) => isActive ? "text-blue-600" : "text-black dark:text-white"}>
          Case Studies
        </NavLink>
        <NavLink to='/blog' className={({ isActive }) => isActive ? "text-blue-600" : "text-black dark:text-white"}>
          Blog
        </NavLink>
        <NavLink to='/tech-timeline' className={({ isActive }) => isActive ? "text-blue-600" : "text-black dark:text-white"}>
          Tech Stack
        </NavLink>
        <NavLink to='/code-snippets' className={({ isActive }) => isActive ? "text-blue-600" : "text-black dark:text-white"}>
          Code
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
