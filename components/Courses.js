import Link from "next/link";
import { Calendar } from "lucide-react";
import { COURSES_DATA } from "@/app/_util/utility";
import Heading from "@/landingPage/pages/Heading";

function Courses() {
  return (
    <div>
      <Heading label="Meus cursos." />
      <p className="text-lg text-text-layout">
        Sempre buscando me aperfeiçoar em minhas áreas.
      </p>

      <br />
      <div>
        <ul className="list-none flex flex-col gap-y-8">
          {COURSES_DATA.map((course) => (
            <li
              key={course.id}
              className="border-x-4 border-x-gray-800 dark:border-x-gray-200 rounded-xl"
            >
              <div className="mx-5">
                <div className="flex flex-col justify-between md:flex-row gap-2 mb-3">
                  <h3 className="text-lg inline underline">
                    <Link href={course.link} target="_blank">
                      {course.title}
                      <span className="text-lg text-text-layout">
                        {course.location}
                      </span>
                    </Link>
                  </h3>
                  <p className="inline-flex items-center gap-x-1">
                    <Calendar className="inline" />{" "}
                    <span className="underline text-lg">{course.date}</span>
                  </p>
                </div>

                <div>
                  <p className="text-base hyphens-auto">{course.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Courses;
