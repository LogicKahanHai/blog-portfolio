import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, ShowMarkdown } from "../../components/components";
import { Project, ProjectDay, ProjectDayContent } from "../../utils";

type DateTimeFormatOptions = Intl.DateTimeFormatOptions;

const ProjectPage: React.FC = () => {
  const [project, setProject] = useState<Project>({} as Project);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { projectId } = useParams<{ projectId: string }>();

  const fetchProject = useCallback(async () => {
    const res = await fetch(
      import.meta.env.VITE_BACKEND_HOST + "/projects/" + projectId,
    );
    const response = await res.json();
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
    fetchProject();
  }, [fetchProject]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="flex h-fit min-h-screen w-screen flex-col items-center">
          {/* blog-header */}
          <div className=" flex w-4/5 flex-col items-start px-32">
            <div className=" flex flex-col justify-start pb-5 pt-20">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <h1 className="text-5xl font-bold">{project.title}</h1>
                  <p className="text-xl italic text-gray-600">
                    {project.teaser}
                  </p>
                </div>
                <div className="my-5 flex w-2/3 items-center divide-x-2 divide-gray-600">
                  <div className=" mr-8">
                    <img
                      src="/logo.jpeg"
                      alt="blog"
                      className="max-h-[60px] max-w-[60px] rounded-full"
                    />
                  </div>
                  <div className="text-nowrap px-8">
                    <p className="text-lg font-semibold">Rishi Bhalla</p>
                    <p className="text-lg font-light italic">
                      {formatDate(project.dateTime)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center text-lg font-semibold italic text-gray-600">
            You ready for this journey? Let's go!!
          </div>
          {/* blog-content */}
          {project.content.length > 0 &&
            project.content[0].dayContent.length > 0 && (
              <div className="flex w-4/5 flex-col justify-start gap-14 px-20 py-20">
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
                <div className="flex w-full justify-center text-xl font-semibold italic text-gray-600">
                  That's all for now... please check back later for more
                  updates.
                </div>
              </div>
            )}
          {(project.content.length === 0 ||
            project.content[0].dayContent.length === 0) && (
            <div>
              It's possible that I could not devote any time to this project...
              please check some other project... or please check beack later to
              find my journey here.
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
      <div className="flex w-full justify-center text-nowrap text-3xl font-semibold italic">
        {formatDate(day.date)}
        <span className="font-light not-italic">
          &nbsp; (Day {(index + 1).toString().padStart(2, "0")})
        </span>
      </div>
      <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />
      <div className="w-full gap-x-10 divide-gray-600">
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
            className={`mb-10 flex h-fit w-full flex-col `}
          >
            <ShowMarkdown markdown={content.markdown} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
