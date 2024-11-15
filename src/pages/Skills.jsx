import { useEffect } from "react";
import data from "../data";

function Skills() {
  useEffect(() => {
    document.title = "Habilidades - Stivenm";
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <section className="px-2 py-5 ">
        <header className="md:px-0">
        </header>
        <p className="px-3 leading-relaxed rounded-md bg-sky-100/60 border-sky-600 md:text-lg text-slate-900">
        Especializado en desarrollo Backend con Laravel, he construido APIs RESTful y aplicaciones monolíticas con Laravel e Inertia usando MySQL para la gestión de bases de datos. Además, tengo conocimientos en frontend con React y Tailwind CSS. Comprometido con el aprendizaje continuo y con una excelente capacidad para leer y comprender documentación, estoy preparado para contribuir al éxito de proyectos desafiantes, demostrando flexibilidad y habilidades efectivas de resolución de problemas.
        </p>
      </section>

      <section className="container px-5 py-2 mx-auto">
        <header className="md:px-0">
          <h1 className="py-3 text-3xl font-semibold leading-snug text-gray-900 lg:leading-relaxed ">
            Tecnologías
          </h1>
        </header>
        <div className="flex flex-wrap -m-4 text-center">
          {data.certifications.map((c, index) => (
            <div className="w-full p-2 sm:w-1/2 md:w-1/5 " key={index}>
              <div className={`flex flex-col items-center px-2 py-2 transition duration-300 transform border border-gray-600 rounded-lg shadow-md bg-white/30 hover:scale-105 ${c.shadow}`}>
                <img className="w-12 " src={c.img} loading="lazy" />
                <h2 className="text-xl font-medium text-gray-900 title-font">
                  {c.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
