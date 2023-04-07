"use client";
import React, { useEffect, useState } from "react";
import { Course } from "./courses";
import { useRouter } from "next/navigation";

type Props = {
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchCourse({ setCourses, setLoading }: Props) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `http://localhost:3000/api/courses/search?query=${query}`
    );
    const courses: Course[] = await response.json();
    setCourses(courses);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl mx-auto gap-4 mt-10 flex gap-x-2"
    >
      <input
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        name="query"
        placeholder="search courses"
        className="border placeholder:text-sm flex-1 border-slate-500 py-2 px-2 outline-none focus:border-blue-500 rounded-md focus:ring-1 ring-offset-1 ring-blue-400"
      />
      <div className="w-fit">
        <button className="h-full px-3 py-2 inline-flex items-center justify-center  border bg-blue-500  font-medium  text-white border-blue-400 text-sm rounded-md">
          find course
        </button>
      </div>
    </form>
  );
}
