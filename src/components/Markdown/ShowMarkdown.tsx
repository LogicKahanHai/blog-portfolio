import React from "react";
import Markdown from "react-markdown";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import rehypeRaw from "rehype-raw";

const ShowMarkdown = ({ markdown }: { markdown: string }) => {
  return (
    <Markdown
      className={`flex h-fit w-full flex-col pb-5`}
      components={{
        h1({ ...props }) {
          return (
            <div className="mb-4 flex flex-col">
              <h1 className="text-3xl font-bold" {...props} />
              <hr className="mt-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-neutral-500 via-neutral-500 to-transparent dark:via-neutral-400" />
            </div>
          );
        },
        h2({ ...props }) {
          return <h2 className="text-2xl font-bold" {...props} />;
        },
        code({ children, className, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          console.log(match);
          return match ? (
            <div className="flex w-full justify-center">
              <div className="my-3 w-2/3 max-laptop:w-full border-2 border-gray-800 px-2 py-4">
                <SyntaxHighlighter
                  {...(props as SyntaxHighlighterProps)}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={githubGist}
                />
              </div>
            </div>
          ) : (
            <span
                className={`m-1 rounded-md bg-gray-300 px-2 py-1 text-sm font-semibold text-black text-nowrap ${className}`}
              {...props}
            >
              {children}
            </span>
          );
        },
        p({ children, ...props }) {
          const childrenArray = React.Children.toArray(children);
          const hasImage = childrenArray.some(
            (child) => React.isValidElement(child) && child.type === "img",
          );

          if (hasImage) {
            return (
              <div className="flex w-full justify-center">
                <div className="flex w-2/3 justify-center">
                  <p
                    className="text-center text-xl font-light font-poppins"
                    children={children}
                    {...props}
                  />
                </div>
              </div>
            );
          }

          return (
            <div className="mb-3 flex justify-start">
              <p
                className="text-left text-lg font-light font-poppins"
                children={children}
                {...props}
              />
            </div>
          );
        },
        a({ ...props }) {
          return <a className="text-blue-600 underline" {...props} />;
        },
        strong({ ...props }) {
          return <strong className="font-bold" {...props} />;
        },
        em({ ...props }) {
          return <em className="italic" {...props} />;
        },
        ol({ ...props }) {
          return (
            <ol
              className="list-outside list-decimal px-10 text-left font-light"
              {...props}
            />
          );
        },
        iframe({ ...props }) {
          return (
            <div className="w-full justify-center items-center flex my-5">
              <iframe
                {...props}
              />
            </div>
          );
        }
        // img({ node, title, ...props }) {
        //     return <img title="Hello" {...props} />
        // }
      }}
      rehypePlugins={[rehypeRaw]}
    >
      {`${markdown}`}
    </Markdown>
  );
};

export default ShowMarkdown;
