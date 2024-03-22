import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Socials = () => {
  return (
    <div className="flex flex-row gap-5">
      <a href="https://www.github.com/LogicKahanHai" target="_blank">
        <IconBrandGithub
          size={35}
          color="currentColor"
          stroke={2}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:text-indigo-600"
        />
      </a>
      <a href="https://www.linkedin.com/in/rishi-bhalla" target="_blank">
        <IconBrandLinkedin
          size={35}
          color="currentColor"
          stroke={2}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:text-indigo-600"
        />
      </a>
      <a href="https://www.linkedin.com/in/rishi-bhalla" target="_blank">
        <IconBrandYoutube
          size={35}
          color="currentColor"
          stroke={2}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:text-indigo-600"
        />
      </a>
      <a href="https://twitter.com/LogicKiTalaash" target="_blank">
        <IconBrandX
          size={35}
          color="currentColor"
          stroke={2}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:text-indigo-600"
        />
      </a>
      <a href="https://www.instagram.com/logickitalaash/" target="_blank">
        <IconBrandInstagram
          size={35}
          color="currentColor"
          stroke={2}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:text-indigo-600"
        />
      </a>
    </div>
  );
};

export default Socials;
