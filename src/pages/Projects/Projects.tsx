import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader, ShowMarkdown } from "../../components/components";
import { Project, ProjectDay, ProjectDayContent } from "../../utils";
import axios from "axios";

type DateTimeFormatOptions = Intl.DateTimeFormatOptions;

const ProjectPage: React.FC = () => {
  const [project, setProject] = useState<Project>({} as Project);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const { projectId } = useParams<{ projectId: string }>();

  const fetchProject = useCallback(async () => {
    const res = await axios.get(
      import.meta.env.VITE_BACKEND_HOST + "/projects/" + projectId,
    );
    console.log(res);
    if (!res.data.data) {
      setIsLoading(false);
      throw new Error("Could not find this project...");
    }
    const response = await res.data;
    console.log(response);
    setProject(response.data);
    setIsLoading(false);
  }, [projectId]);

  const formatDate = (date: string) => {
    const options: DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    return new Date(date)
      .toLocaleDateString(undefined, options)
      .replace(/-/g, " ");
  };

  useEffect(() => {
    fetchProject().catch((_) => { navigate("*") });

  }, [fetchProject]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="flex h-fit min-h-screen w-screen flex-col items-center">
          {/* blog-header */}
          <div className=" flex w-4/5 flex-col items-start px-32 max-laptop:px-0">
            <div className=" flex flex-col justify-start pb-5 pt-20 max-bigPhone:pt-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <h1 className="text-5xl max-bigPhone:text-3xl font-bold">{project.title}</h1>
                  <p className="text-xl max-bigPhone:text-base italic text-gray-600">
                    {project.teaser}
                  </p>
                </div>
                <div className="my-5 flex w-2/3 items-center divide-x-2 divide-gray-600">
                  <div className=" mr-8">
                    <img
                      src="/logo.jpeg"
                      alt="blog"
                      className="max-w-[60px] max-bigPhone:max-w-[50px] rounded-full"
                    />
                  </div>
                  <div className="text-nowrap px-8 max-bigPhone:px-8">
                    <p className="text-lg font-semibold">Rishi Bhalla</p>
                    <p className="text-base font-light italic">
                      {formatDate(project.dateTime)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {(project.content.length === 0 ||
            project.content[0].dayContent.length === 0) && (
              <div className="flex w-full justify-center text-lg max-bigPhone:text-base max-tablet:px-10 max-bigPhone:mt-10 max-tablet:mb-10 px-40 mt-20 font-semibold italic text-gray-600">
                It's possible that I could not devote any time to this project yet...
                or I have added this to my projects list very recently <br /><br />(almost like this very instant, congratulations! you know I am online rn)<br /><br /> Please check some other project... or please check back later to
                find my journey here.
              </div>
            )}
          {!(project.content.length === 0 ||
            project.content[0].dayContent.length === 0) && (
              <div className="flex w-full justify-center text-lg max-bigPhone:text-base font-semibold italic text-gray-600">
                You ready for this journey? Let's go!!
              </div>
            )}
          {/* blog-content */}
          {project.content.length > 0 &&
            project.content[0].dayContent.length > 0 && (
            <div className="flex w-4/5 flex-col justify-start gap-14 max-bigPhone:gap-10 px-20 max-laptop:px-0 py-20 max-bigPhone:py-10">
                {project.content.map((day: ProjectDay, index: number) => {
                  return (
                    <ProjectContent
                      day={day}
                      key={index}
                      formatDate={formatDate}
                      index={index}
                    />
                  );
                })}
              <div className="flex w-full justify-center text-lg max-bigPhone:text-base font-semibold italic text-gray-600">
                  That's all for now... please check back later for more
                  updates.
                </div>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

type Props = {
  day: ProjectDay;
  formatDate: (date: string) => string;
  index: number;
};

const ProjectContent = ({ day, index, formatDate }: Props) => {
  return (
    <>
      <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />
      <div className="flex w-full justify-center text-nowrap text-3xl max-bigPhone:text-2xl font-semibold italic">
        {formatDate(day.date)}
        <span className="font-light not-italic">
          &nbsp; (Day {(index + 1).toString().padStart(2, "0")})
        </span>
      </div>
      <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />
      <div className="w-full">
        {day.dayContent.map((content: ProjectDayContent, index: number) => {
          return <Content content={content} index={index} key={index} />;
        })}
      </div>
    </>
  );
};

type ContentProps = {
  content: ProjectDayContent;
  index: number;
};

const Content: React.FC<ContentProps> = ({ content, index }: ContentProps) => {
  const formatTime = (date: string | number) => {
    const options: DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleTimeString(undefined, options);
  };

  return (
    <>
      <div className="mr-8 text-nowrap py-5 text-xl font-semibold italic">
        <p className="text-lg font-medium">
          at{" "}
          <span className="text-lg font-semibold italic">
            {formatTime(content.dateTime)}
          </span>
          ...
        </p>
      </div>
      <div className="flex h-fit w-full items-start justify-start">
        <div className="w-full">
          {/* Markdown here */}

          <div
            key={content.dateTime + "-" + index}
            className={`mb-10 max-bigPhone:mb-0 flex h-fit w-full flex-col `}
          >
            <ShowMarkdown markdown={content.markdown} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
