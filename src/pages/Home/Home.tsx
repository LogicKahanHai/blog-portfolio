import { useLoaderData } from "react-router-dom";
import { BlogTeaserProps } from "../../components/Home/BlogTeaser";
import { HomeComponents } from "../../components/components";

const Home: React.FC = () => {
    const blogs = useLoaderData() as BlogTeaserProps[];
    return (
        <div className="w-full flex justify-center h-full items-center">
            <div className="w-3/4">
                <h1 className="text-3xl font-bold mb-5">Welcome to my blog!</h1>
                <p className="text-lg mb-3">
                    Here you'll find a collection of my thoughts, experiences, and ideas. I hope you enjoy reading them as much as I enjoyed writing them!
                </p>
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