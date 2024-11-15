import { useEffect } from "react";
import Lgithub from "../assets/github_logo.svg";
import Ltwitter from "../assets/logo_twitter.svg";
import Llinkedin from "../assets/logo_linkedin.svg";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "estivenm";
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      
      <div className="flex px-4 mt-0 lg:mt-8 md:px-0">
        <div className="relative z-10 w-full mt-4 md:w-2/3 lg:mt-16">
          <h1 className="text-xs font-extrabold leading-snug text-gray-900 sm:text-xl md:text-xl xl:text-2xl lg:leading-relaxed">
            <span className="p-2 px-4 rounded-lg text-neonGreen bg-slate-900 ">
              $Desarrollador Backend 🚀
            </span>
          </h1>
          <p className="mt-4 leading-relaxed md:text-xl text-slate-300 ">
            ¡Hola, mi nombre es Estiven Muñoz! Soy un estudiante de Ingeniería
            de Sistemas con enfoque en el desarrollo backend utilizando
            tecnologías como <span className="px-2 text-red-600 bg-white rounded-md" >Laravel</span>,
            <span className="px-2 bg-white rounded-md text-violet-700" >Inertia</span> y 
            <span className="px-2 bg-white rounded-md text-sky-700" >React</span>.
            <br />
            <br />
            <Link
              to="/Estiven_Muñoz_CV.pdf" target="_blank"
              className="py-1.5 px-3 md:px-4 rounded-full duration-500 hover:scale-95 bg-yellow-600 border-b border-indigo-500 shadow-sm shadow-indigo-700 hover:bg-yellow-700"
            >
              Ver CV
            </Link>
          </p>
          <div className="flex items-center justify-start mt-8">
            <Link to="https://github.com/estivenm0" target="_blank"
              className="block mr-8 text-gray-900 transition-all duration-200 transform fill-current md:mr-12 hover:text-slate-500 hover:-translate-y-1"
            >
              <img
                src={Lgithub}
                alt="github"
                className="w-12 h-12 rounded-full bg-slate-800"
              />
            </Link>
            <Link to="https://twitter.com/estivenm0" target="_blank"
              className="block mr-8 text-gray-900 transition-all duration-200 transform fill-current md:mr-12 hover:text-slate-500 hover:-translate-y-1"
            >
              <img
                src={Ltwitter}
                alt=""
                className="w-12 h-12 rounded-full bg-slate-800"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/maycolmu%C3%B1oz/" target="_blank"
              className="block mr-8 text-gray-900 transition-all duration-200 transform fill-current md:mr-12 hover:text-slate-500 hover:-translate-y-1"
              href="https://youtube.com/aschmelyun"
              rel="noreferrer"
            >
              <img
                src={Llinkedin}
                alt=""
                className="w-12 h-12 rounded-full bg-slate-800"
              />
            </Link>
          </div>
        </div>

        <div className="relative hidden w-1/3 ml-8 md:block">
          <div>

<dotlottie-player src="https://lottie.host/f10bc7dd-a2b2-410f-befb-6f0830069059/6hqyRavo99.json" background="transparent" speed="1" style={{width: '300px', height: '300px'}} loop autoplay></dotlottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
