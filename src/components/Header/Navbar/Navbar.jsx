import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://i.ibb.co/zbxkNkK/halo-halo.png"
            className="h-8"
            alt="Project Logo"
          />
          <span className="self-center  text-lg md:text-2xl font-semibold whitespace-nowrap">
            Dish Discovery
          </span>
        </a>
        <div className="flex lg:order-2 items-center md:gap-4">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="lg:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
          >
            <BsSearch />
          </button>
          <div className="relative hidden lg:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-xl">
              <CiSearch />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border-none rounded-full bg-[#F3F3F4]"
              placeholder="Search"
            />
          </div>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <GiHamburgerMenu />
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none  font-medium rounded-full text-lg lg:text-2xl p-2.5 text-center inline-flex items-center me-2"
          >
            <CgProfile />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 lg:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <CiSearch />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border-none rounded-lg bg-[#F3F3F4]"
              placeholder="Search"
            />
          </div>
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg  lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 bg-white">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[#150B2B] rounded hover:text-green-600 lg:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[#150B2B] rounded hover:text-green-600  lg:p-0"
              >
                Recipes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[#150B2B] rounded hover:text-green-600  lg:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[#150B2B] rounded hover:text-green-600  lg:p-0"
              >
                Search
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
