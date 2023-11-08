import React from "react";
import Course from "../minComponents/Course";

export default function Courses() {
  return (
    <div name="courses" className="flex items-center justify-center w-full my-32">
      <div className="max-w-[1240px] mx-auto padding">
        <h2 className="title">Conocimientos</h2>
        <h2 className="sub-title">Estudios Realizados</h2>
        <Course />
      </div>
    </div>
  );
}
