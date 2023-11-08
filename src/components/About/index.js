import React from "react";
import Skills from "../Skills";
export default function About() {
  return (
    <div name="about" className="flex items-center justify-center w-full responsive my-32 padding relative">
      <div className="max-w-[1240px] mx-auto ">
        <h2 className="title ">Mucho Gusto</h2>
        <h2 className="sub-title">Me presento</h2>
        <p className="text-xl">
          Soy Ingeniero Multimedia, egresado de la{" "}
          <strong className="border-b-2 border-cyan-700 text-white">
            Universidad Autónoma de Occidente.
          </strong>{" "}
          Con interés de trabajar en el area de la tecnología. Con experiencia
          en planeación y desarrollo de proyectos enfocados en problemáticas que
          puedan tener soluciones desde la tecnología. Con habilidades tales
          como; Liderazgo, Comunicación, Planificación y Gestión del tiempo,
          Adaptabilidad a cambios, escuchar las ideas de los integrantes del
          equipo. además de tener lógica de programación en lenguajes como
          Python, HTML, CSS, JavaScript,  React js ,Next js,  bases de datos relacionales y no relacionales.
        </p>
        <Skills />
      </div>
      <div className="absolute svgbground shadow-lg shadow-cyan-500/50 w-1/2 h-full right-0 top-0 blur-sm rounded-l-[25px] z-[-1]"></div>
    </div>
  );
}
