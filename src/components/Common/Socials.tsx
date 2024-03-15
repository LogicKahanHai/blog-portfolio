import { IconBrandGithub, IconBrandLinkedin, IconBrandYoutube, IconBrandX, IconBrandInstagram } from '@tabler/icons-react';

const Socials = () => {
    return (
        <div className="flex flex-row gap-5">
            <a href="https://www.github.com/LogicKahanHai" target="_blank">
                <IconBrandGithub
                    size={35}
                    color="currentColor"
                    stroke={2}
                    className="hover:text-indigo-600 transition-all duration-300 ease-in-out cursor-pointer"
                />
            </a>
            <a href="https://www.linkedin.com/in/rishi-bhalla" target="_blank">
                <IconBrandLinkedin
                    size={35}
                    color="currentColor"
                    stroke={2}
                    className="hover:text-indigo-600 transition-all duration-300 ease-in-out cursor-pointer"
                />
            </a>
            <a href="https://www.linkedin.com/in/rishi-bhalla" target="_blank">
                <IconBrandYoutube
                    size={35}
                    color="currentColor"
                    stroke={2}
                    className="hover:text-indigo-600 transition-all duration-300 ease-in-out cursor-pointer"
                />
            </a>
            <a href="https://www.linkedin.com/in/rishi-bhalla" target="_blank">
                <IconBrandX
                    size={35}
                    color="currentColor"
                    stroke={2}
                    className="hover:text-indigo-600 transition-all duration-300 ease-in-out cursor-pointer"
                />
            </a>
            <a href="https://www.linkedin.com/in/rishi-bhalla" target="_blank">
                <IconBrandInstagram
                    size={35}
                    color="currentColor"
                    stroke={2}
                    className="hover:text-indigo-600 transition-all duration-300 ease-in-out cursor-pointer"
                />
            </a>
        </div>
    );
}

export default Socials;