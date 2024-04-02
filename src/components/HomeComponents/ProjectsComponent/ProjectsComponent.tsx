import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "../../../utils";
import { Loader } from "../../components";
// import ProjectTemplate from "./ProjectTemplate";

type DateTimeFormatOptions = Intl.DateTimeFormatOptions;

type ProjectsComponentProps = {
  postLoading: VoidFunction;
};

const ProjectsComponent: React.FC<ProjectsComponentProps> = ({
  postLoading,
}) => {
  const formatDate = (date: string) => {
    const options: DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProjects = async () => {
    const res = await fetch(
      import.meta.env.VITE_BACKEND_HOST + "/projects-list",
    );
    const response = await res.json();
    console.log(response);
    setProjects(response.data);
    setLoading(false);
    postLoading();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      {/* Phone */}
      <PhoneProjectsComponent
        loading={loading}
        projects={projects}
        formatDate={formatDate}
      />

      {/* Web */}
      <WebProjectsComponent
        loading={loading}
        projects={projects}
        formatDate={formatDate}
      />
    </>
  );
};

const WebProjectsComponent = ({
  loading,
  projects,
  formatDate,
}: {
  loading: boolean;
  projects: Project[];
  formatDate: (date: string) => string;
}) => {
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="hidden h-screen w-screen items-start justify-center font-display tablet:flex">
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex min-h-fit flex-col items-center justify-center tablet:ml-20 tablet:h-[60%]  tablet:w-[90%] laptop:ml-0 laptop:min-w-[75%] desktop:min-h-[60%] desktop:min-w-[78%]">
              <div className=" flex w-[90%] flex-row items-start">
                <div className="flex w-full flex-col gap-5 py-10">
                  <div>
                    <h1 className="text-center font-display text-3xl font-bold text-indigo-600">
                      Projects
                    </h1>
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <div className="flex w-4/5 flex-col gap-5">
                      {(projects as Project[]).map((blog: Project) => {
                        return (
                          <Link to={`/projects/${blog.id}`} key={blog.id}>
                            <div className="group flex w-full cursor-pointer flex-col gap-2 border-2 p-4 shadow-sm transition-all duration-500 ease-in-out hover:z-10 hover:border-black hover:shadow-xl">
                              <h2 className="font-sans text-2xl font-normal text-gray-900 transition-all duration-500 ease-in-out group-hover:font-bold group-hover:text-indigo-600">
                                {blog.title}
                              </h2>
                              <div className="flex flex-col gap-1.5">
                                <p className="text-sm text-gray-500">
                                  {formatDate(blog.dateTime)}
                                </p>

                                <p className="font-sans text-sm text-gray-600">
                                  {blog.teaser}
                                </p>

                                <div className="mt-2 flex flex-row flex-wrap gap-1.5 font-sans">
                                  {blog.tags.map(
                                    (tag: string, index: number) => (
                                      <span
                                        key={index}
                                        className="max-w-fit rounded-lg bg-gray-100 px-2 py-1.5 text-xs font-medium transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white"
                                      >
                                        #{tag}
                                      </span>
                                    ),
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}{" "}
                    </div>
                    <div className="mt-10 flex w-full justify-end">
                      {projects.length > 5 && (
                        <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white">
                          View All
                        </button>
                      )}
                      {projects.length <= 5 && (
                        <div className="cursor-wait rounded-lg bg-gray-300 px-5 py-2 text-gray-600">
                          Many more to come....
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const PhoneProjectsComponent = ({
  loading,
  projects,
  formatDate,
}: {
  loading: boolean;
  projects: Project[];
  formatDate: (date: string) => string;
}) => {
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="flex h-fit w-screen items-center justify-center font-display tablet:hidden">
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex min-h-fit flex-col items-center justify-center tablet:ml-20 tablet:h-[60%]  tablet:w-[90%] laptop:ml-0 laptop:min-w-[75%] desktop:min-h-[60%] desktop:min-w-[78%]">
              <div className=" flex w-[90%] flex-row items-start">
                <div className="flex w-full flex-col gap-5 py-10">
                  <div>
                    <h1 className="text-center font-display text-3xl font-bold text-indigo-600">
                      Projects
                    </h1>
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <div className="flex w-4/5 flex-col gap-5">
                      {(projects as Project[]).map((blog: Project) => {
                        return (
                          <Link to={`/projects/${blog.id}`} key={blog.id}>
                            <div className="group flex w-full cursor-pointer flex-col gap-2 border-2 border-black p-4 shadow-xl transition-all duration-500 ease-in-out hover:z-10">
                              <h2 className="font-sans text-2xl font-semibold text-gray-900 transition-all duration-500 ease-in-out">
                                {blog.title}
                              </h2>
                              <div className="flex flex-col gap-1.5">
                                <p className="text-sm text-gray-500">
                                  {formatDate(blog.dateTime)}
                                </p>

                                <p className="truncate font-sans text-sm text-gray-600">
                                  {blog.teaser
                                    .split(" ")
                                    .slice(0, 10)
                                    .join(" ")}
                                  {blog.teaser.split(" ").length > 10 && "..."}
                                </p>

                                <div className="mt-2 flex flex-row flex-wrap gap-1.5 font-sans">
                                  {blog.tags.map(
                                    (tag: string, index: number) => (
                                      <span
                                        key={index}
                                        className="max-w-fit rounded-lg bg-gray-100 px-2 py-1.5 text-xs font-medium transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white"
                                      >
                                        #{tag}
                                      </span>
                                    ),
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}{" "}
                    </div>
                    <div className="mt-10 flex w-full justify-end">
                      {projects.length > 5 && (
                        <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white">
                          View All
                        </button>
                      )}
                      {projects.length <= 5 && (
                        <div className="rounded-lg bg-gray-300 px-5 py-2 text-gray-600">
                          Many more to come....
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsComponent;
