import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white flex">
            <div className="w-full py-10 flex max-[580px]:flex-col max-[580px]:px-10 max-[580px]:text-center justify-around items-center">
                <p className="max-[580px]:text-sm font-display">Copyright © 2024. All Rights Reserved</p>
                <div className="flex flex-row gap-5 items-center justify-center m-5">
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
                </div>
            </div>
        </footer>
    );
}

export default Footer;