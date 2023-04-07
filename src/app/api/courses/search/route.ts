import { NextResponse } from "next/server";
import courses from "../data.json";

type Course = {
  id: number;
  title: string;
  description: string;
  link: string;
  level: "beginner" | "Intermediate" | "all";
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(`${query?.toLowerCase()}`);
  });

  return NextResponse.json(filteredCourses);
}
