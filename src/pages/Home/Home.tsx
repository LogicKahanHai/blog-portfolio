
import { BlogTeaserProps } from "../../components/Home/BlogTeaser";
import { HomeComponents } from "../../components/components";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import './Home.css';

const Home: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogTeaserProps[]>([]);

    const data = useLoaderData() as BlogTeaserProps[];

    const navigation = useNavigation();

    useEffect(() => {
        console.log('i am here');
        if (navigation.state === 'idle') {
            setBlogs(data);
        }
    }, [navigation.state]);

    const topTags = ['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Express', 'MongoDB',]

    return (
        <>
            <div className="w-full h-full justify-center items-center flex">
                <div className=" justify-around w-[66%] h-[60%] flex flex-col">
                    <div className="flex flex-row divide-x">
                        <div className="flex flex-1 flex-col">
                            <div>
                                <h1 className="text-4xl font-bold font-sans mb-5">Full Stack Web and App Developer 🧑‍💻</h1>
                            </div>
                            <div>
                                <p className="text-lg text-gray-500 mb-5">
                                    Hi, I'm RIshi Bhalla. A passionate Full Stack Developer based in Punjab, India. 📍
                                </p>
                            </div>
                            <div>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center items-center h-full flex-1">
                            <div className="h-full w-[50%] hero-img object-fill">
                                {/* <img src="/public/rishi.jpg" alt="Hero" className="h-3/4 w-3/4 object-fill rounded-full hero-img" /> */}
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div>

                </div>
            </div>
        </>
    );
};

export default Home;