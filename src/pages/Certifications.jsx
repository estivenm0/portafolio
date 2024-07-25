import { useEffect } from "react";
import Certification from "../components/Certification";

function Certifications() {
  useEffect(() => {
    document.title = "Formación - Stivenm";
  }, []);

  return (
    <div className="flex flex-wrap justify-around animate__animated animate__fadeIn">

      <Certification img="/lgU/unad.webp" title="Ingeniería de Sistemas" date="2021 - actualmente (UNAD)"/>
      <Certification img="/lgU/utp.webp" title="Desarrollo de Aplicaciones Web" date=" 2022 - 2022 (UTP)"/>
      <Certification img="/lgU/one.webp" title="Desarrollo Frontend React" date="2022 - 2023 (Alura)"/>

    </div>
  );
}

export default Certifications;
