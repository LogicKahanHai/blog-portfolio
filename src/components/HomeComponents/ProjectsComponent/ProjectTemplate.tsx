import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../../../utils";
type DateTimeFormatOptions = Intl.DateTimeFormatOptions;

type ProjectTemplateProps = {
  project: Project;
};

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ project }) => {
  const formatDate = (date: string) => {
    const options: DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // <div className="flex w-4/5 flex-col gap-5">
  //     {(projects as Project[]).map((project: Project) => {

  //     })}{" "}
  // </div>
  return (
    <Link to={`/blog/${project.id}`}>
      <div
        className={`group flex w-full cursor-pointer flex-col gap-2 border-2 p-4 font-sans shadow-sm transition-all duration-500 ease-in-out hover:z-10 hover:border-black hover:shadow-xl`}
      >
        <h2 className="text-2xl text-gray-900 transition-all duration-500 ease-in-out group-hover:text-3xl group-hover:text-indigo-600">
          {project.title}
        </h2>
        <div className="flex flex-col gap-1.5">
          <p className="text-sm text-gray-500">
            {formatDate(project.dateTime)}
          </p>

          <p className="text-sm text-gray-600">{project.teaser}</p>

          <div className="mt-2 flex flex-row flex-wrap gap-1.5">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="max-w-fit rounded-lg bg-gray-100 px-2 py-1.5 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectTemplate;
