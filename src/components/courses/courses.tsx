import Link from "next/link";
import React from "react";

type Props = {
  courses: Course[];
};

export type Course = {
  id: number;
  title: string;
  description: string;
  link: string;
  level: "beginner" | "Intermediate" | "all";
};

export default function Courses({ courses }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 mt-5">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white shadow-md w-full py-2 px-2 flex flex-col gap-y-3 rounded-md border border-slate-300"
        >
          <div className="w-full flex items-center justify-between text-slate-800">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <span
              className={`py-1 px-4 rounded-full font-bold text-xs flex items-center justify-center ${
                course.level === "beginner"
                  ? "bg-green-100 text-green-900 "
                  : course.level === "Intermediate"
                  ? "bg-red-100 text-red-900"
                  : "bg-yellow-100 text-yellow-900"
              }`}
            >
              {course.level}
            </span>
          </div>
          <p className="font-medium text-sm text-slate-600">
            {course.description}
          </p>
          <Link
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 mr-auto mt-auto"
          >
            <button className="px-3 py-2 inline-flex items-center justify-center bg-transparent border border-slate-500 text-slate-900 font-medium hover:bg-blue-500 hover:text-white hover:border-blue-400 text-sm rounded-md">
              go to course
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
