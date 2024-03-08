import { useLoaderData } from "react-router-dom";
import { BlogTeaserProps } from "../../components/Home/BlogTeaser";
import { HomeComponents } from "../../components/components";

const Home: React.FC = () => {
    const blogs = useLoaderData() as BlogTeaserProps[];

    const topTags = ['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Express', 'MongoDB',]

    return (
        <div className="w-full flex justify-center h-full items-center divide-x">
            <div className="flex-1"></div>
            <div className="flex-3 w-3/4 p-10">
                <h1 className="text-3xl font-bold mb-5">What is this?</h1>
                <p className="text-lg mb-10">
                    Here you'll find a collection of my thoughts, experiences, and ideas. I hope you enjoy reading them as much as I enjoyed writing them!
                </p>
                <h1 className="text-3xl font-bold mb-5">Topics I love!</h1>
                <div className="flex gap-2 mb-14 overflow-x-auto">
                    {topTags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-sm text-nowrap font-medium bg-gray-100 rounded-lg px-2 py-1.5 cursor-pointer hover:bg-indigo-600 hover:text-white hover:shadow-md transition duration-300 ease-in-out"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    {blogs.map((blog, index) => (
                        <HomeComponents.BlogTeaser
                            key={index}
                            title={blog.title}
                            date={blog.date}
                            description={blog.description}
                            link={blog.link}
                            tags={blog.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;