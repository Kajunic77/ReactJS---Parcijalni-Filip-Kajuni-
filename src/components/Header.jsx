import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="bg-gray-700 mb-6 shadow-lg text-neutral-100">
        <div className="container py-2 mx-auto flex items-center">
          <FaGithub className="inline pr-1 text-3xl" />
          <nav className="flex-1 px-2 mx-2 ">
            <h1 className="flex justify-center gap-2">Github Search</h1>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
