import React, { useState } from "react";
import "./css/global.css";
import myFace from "./assets/face.jpeg";
import Block from "./components/Block";
import {
  profileText,
  jobExperienceTitle,
  jobExperienceData,
  educationData,
  referenceData,
  cursosData,
  personalData,
  profileTextEn,
  jobExperienceDataEn,
  jobExperienceTitleEn,
  educationDataEn,
  referenceDataEn,
  cursosDataEn,
  personalDataEn,
} from "./Constants";
import Habilities from "./components/Habilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faSave } from "@fortawesome/free-solid-svg-icons";

function App() {
  const print = () => {
    window.print();
  };

  const [Spanish, setSpanish] = useState(true);

  return (
    <div className="App">
      <header>
        <img className="face" src={myFace} alt="face" />
        <div className="name-container">
          <h1>Juan David Nuñez Aguilar</h1>
          <p>{Spanish ? "Desarrollador Front end" : "Front end developer"} </p>
        </div>
        <div className="btn-container">
          <button className="btn-languaje" onClick={() => setSpanish(!Spanish)}>
            <FontAwesomeIcon icon={faLanguage} />
          </button>
          <button className="btn-download" onClick={print}>
            <FontAwesomeIcon icon={faSave} />
          </button>
        </div>
      </header>
      <section>
        <Block
          title={Spanish ? "Perfil" : "Profile"}
          text={Spanish ? profileText : profileTextEn}
          data={[]}
        />
        <Habilities title={Spanish ? "Competencias" : "Abilities"} />
        <Block
          title={Spanish ? "Educación" : "Education"}
          data={Spanish ? educationData : educationDataEn}
        />
        <Block
          title={Spanish ? jobExperienceTitle : jobExperienceTitleEn}
          data={Spanish ? jobExperienceData : jobExperienceDataEn}
          break
        />
        <Block
          title={Spanish ? "Referencias personales" : "Personal references"}
          data={Spanish ? referenceData : referenceDataEn}
        />
        <Block
          title={Spanish ? "Cursos adicionales" : "Additional courses"}
          data={Spanish ? cursosData : cursosDataEn}
        />
        <Block
          title={Spanish ? "Datos personales" : "Personal information"}
          data={Spanish ? personalData : personalDataEn}
          break
        />
      </section>
    </div>
  );
}

export default App;
