"use client";
import react, { useState, useEffect } from "react";
import Link from "next/link";
import Courses, { Course } from "../components/courses/courses";
import Loading from "./loading";
import SearchCourse from "../components/courses/search";

export default function HomePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`http://localhost:3000/api/courses`);
      const courses: Course[] = await response.json();
      setCourses(courses);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full min-h-screen px-2">
      <SearchCourse setCourses={setCourses} setLoading={setLoading} />
      <Courses courses={courses} />
    </div>
  );
}
