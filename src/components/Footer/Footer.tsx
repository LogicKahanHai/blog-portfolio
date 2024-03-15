import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"
import { Socials } from "../Common";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white flex">
            <div className="w-full py-10 flex max-[580px]:flex-col max-[580px]:px-10 max-[580px]:text-center justify-around items-center">
                <p className="max-[580px]:text-sm font-display">Copyright © 2024. All Rights Reserved</p>
                <div className="m-5">
                    <Socials />
                </div>
            </div>
        </footer>
    );
}

export default Footer;