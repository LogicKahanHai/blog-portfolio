import { Socials } from "../Common";

const Footer = () => {
  return (
    <footer className=" flex bg-gray-800 text-white">
      <div className="flex w-full items-center justify-around py-10 max-[580px]:flex-col max-[580px]:px-10 max-[580px]:text-center">
        <p className="font-display max-[580px]:text-sm">
          Copyright © 2024. All Rights Reserved
        </p>
        <div className="m-5">
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
