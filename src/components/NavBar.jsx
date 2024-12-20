import { Link, useLocation } from "react-router-dom";
import logo from "../assets/profile.svg";
import document from '../assets/document.svg'
import skills from '../assets/skills.svg'
import projects from '../assets/projects.svg'

function NavBar() {
  const { pathname } = useLocation();

  const style = 'bg-yellow-600 border-b border-yellow-300 shadow-sm shadow-yellow-200 animate-pulse';
  return (
    <>
      <header className="font-semibold text-gray-200">
        <div className="container flex flex-col flex-wrap items-center px-3 py-4 mx-auto md:px-0 md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-4 font-semibold text-gray-200 transition-opacity duration-200 title-font md:mb-0 hover:opacity-75"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 p-2 bg-yellow-600 rounded-full"
              style={{ transform: 'scaleX(-1)' }} 
            />
          </Link>
          <nav className="flex flex-wrap items-center justify-around w-full space-x-0 text-base font-normal text-gray-200 md:w-auto md:ml-auto md:space-x-4 lg:justify-center">
            <Link
              to="/"
              className={`py-1.5 px-3 md:px-4 rounded-full duration-500 hover:scale-95
              ${pathname === "/" ? style : ""}`}
            >
              estivenm
            </Link>
            <Link
              to="/proyectos"
              className={`py-1.5 px-3 md:px-4 rounded-full duration-500 hover:scale-95 flex gap-x-1
              ${pathname === "/proyectos" ? style : ""}`}
            >
              <img src={projects} alt="" />
              Proyectos
            </Link>
            <Link
              to="/habilidades"
              className={`py-1.5 px-3 md:px-4 rounded-full duration-500 hover:scale-95 flex gap-x-1
              ${pathname === "/habilidades" ? style : ""}`}
            >
              <img src={skills} alt="" />
              Habilidades
            </Link>
            <Link
              to="/formacion"
              className={`py-1.5 px-3 md:px-4 rounded-full flex gap-x-1 duration-500 hover:scale-95
              ${pathname === "/formacion" ? style : ""}`}
            >
             <img src={document} alt="" />
              Formación
            </Link>
            <a
              href="mailto:estivenyeizon@gmail.com" 
              className="shadow-none rounded-full border-b text-white hover:shadow-sm py-1.5 px-3 md:px-4 bg-yellow-600
              hover:cursor-pointer hover:bg-yellow-700"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
