import Icons from "./Icons";

const Socials = () => {
  return (
    <div className="flex flex-row gap-5">
      <a href="https://www.github.com/LogicKahanHai" target="_blank">
        <Icons.BrandGitHub
          size={35}
          color="currentColor"
          stroke={2}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:text-indigo-600"
        />
      </a>
      <a href="https://www.linkedin.com/in/rishi-bhalla" target="_blank">
        <Icons.BrandLinkedIn
          size={35}
          color="currentColor"
          stroke={2}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:text-indigo-600"
        />
      </a>
      <a href="https://www.youtube.com/@LogicKahanHai" target="_blank">
        <Icons.BrandYoutube
          size={35}
          color="currentColor"
          stroke={2}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:text-indigo-600"
        />
      </a>
      <a href="https://twitter.com/LogicKiTalaash" target="_blank">
        <Icons.BrandX
          size={35}
          color="currentColor"
          stroke={2}
          className="cursor-pointer transition-all duration-300 ease-in-out hover:text-indigo-600"
        />
      </a>
      <a href="https://www.instagram.com/logickitalaash/" target="_blank">
        <Icons.BrandInstagram
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
