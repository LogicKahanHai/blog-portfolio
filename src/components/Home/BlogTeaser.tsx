import React from "react";
import { Link } from "react-router-dom";
import "./BlogTeaser.css";
import { useState } from "react";
import { Transition } from "@headlessui/react";
type DateTimeFormatOptions = Intl.DateTimeFormatOptions;

type BlogTeaserProps = {
    title: string;
    date: string;
    description: string;
    link: string;
    tags: string[];
};

const BlogTeaser: React.FC<BlogTeaserProps> = ({ title, date, description, link, tags }) => {

    const [divHeight, setDivHeight] = useState(0);
    const [pHeight, setPHeight] = useState(0);

    const formatDate = (date: string) => {
        const options: DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
        return new Date(date).toLocaleDateString(undefined, options);
    }
    return (
        <Link to={link}>
            <div className={`flex flex-col gap-2 p-4 shadow-sm hover:shadow-xl hover:z-10 border-2 hover:border-black group transition-all duration-500 ease-in-out`}>

                <h2 className="text-2xl group-hover:font-bold text-gray-900 group-hover:text-indigo-600 transition-all duration-500 ease-in-out">{title}</h2>
                <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-gray-500">{formatDate(date)}</p>

                    <p className="text-sm text-gray-600">{description}</p>



                    <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs font-medium bg-gray-100 rounded-lg px-2 py-1.5"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

const BlogTeaserSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 p-4 shadow-xl">
            <div className="animate-pulse">
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
};

export { BlogTeaserSkeleton };



export default BlogTeaser;
export type { BlogTeaserProps };