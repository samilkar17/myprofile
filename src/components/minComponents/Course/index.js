import React from "react";
import { courses } from "../../../Data/Data";

export default function Course() {
  return (
    <>
      <div className="p-4 mx-auto flex flex-col justify-center md:items-center w-full h-full">
        <div className="grid  gap-6 my-4 sm:grid-cols-1 md:grid-cols-3 lg:gap-4">
          {courses.certifications.map((certification, index) => {
            return (
              <div className="mx-auto flex flex-col justify-center items-center relative max-w-[385px] max-h-[390px]">
                <a href={certification.slug} target="_blank" className="flex items-center justify-center">
                <div className="absolute rounded-full bg-cyan-600 blur h-full w-1/2"></div>
                  <img
                    className="w-1/2 relative"
                    src={certification.image}
                    alt=""
                  />
                </a>
              </div>
            );
          })}
          {courses.courses.map((course, index) => {
            return (
              <div className="card" key={index}>
                <course.icon
                  className="w-12 h-12"
                  style={{ color: `${course.color}` }}
                />
                <h2 className="text-white font-bold">{course.description}</h2>
                <p>{course.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
