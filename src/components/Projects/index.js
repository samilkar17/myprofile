import React from "react";
import Project from '../minComponents/Project'
export default function Projects() {
  return (
    <div name="projects" className="w-full my-32 relative">
      <div className="max-w-[1240px] padding mx-auto">
        <h2 className="title">Desarrollos</h2>
        <h2 className="sub-title">Proyectos Realizados</h2>
       <Project/>
      </div>
      <div className="absolute svgbground shadow-lg shadow-cyan-500/50 w-1/2 h-screen right-0 top-0 blur-sm rounded-l-[25px] z-[-1] mx-auto"></div>
    </div>
  );
}
