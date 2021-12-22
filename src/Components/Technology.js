import React from "react";
import react from "../Assets/react.png";
import reactrouter from "../Assets/reactrouter.png";
import tailwind from "../Assets/tailwind.png";
import netlify from "../Assets/netlify.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Technology = ({ ...otherProps }) => {
  document.title = "Technology";
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };
  return (
    <div>
      <header className="relative bg-black text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
          <div className="text-white font-bold text-2xl">
            <Link to="/">LOGO</Link>
          </div>

          <div onClick={onClick} className={`md:hidden`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <nav
            className={`${
              !active && "hidden"
            } absolute flex flex-col top-full w-full left-0 z-20 md:static md:w-auto md:flex font-poppins bg-black`}
          >
            <ul className="md:flex-row md:flex">
              <li className="list-none md:mr-5">
                <Link
                  to="/"
                  className="flex w-full text-xl hover:text-gray-200 cursor-pointer p-2"
                >
                  Home
                </Link>
              </li>
              <li className="list-none md:mr-5">
                <Link
                  to="/about"
                  className="flex w-full text-xl hover:text-gray-200 cursor-pointer p-2"
                >
                  About
                </Link>
              </li>
              <li className="list-none md:mr-5">
                <Link
                  to="/technology"
                  className="flex w-full text-xl hover:text-gray-200 cursor-pointer p-2"
                >
                  Technology
                </Link>
              </li>
              <li className="list-none md:mr-5">
                <Link
                  to="/contact"
                  className="flex w-full text-xl hover:text-gray-200 cursor-pointer p-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <h1 className="text-center md:text-5xl text-4xl font-semibold pt-12 text-black font-roboto">
          Technology Used
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-y-5 lg:flex lg:flex-row justify-around items-center lg:mt-32 mt-20 font-poppins">
        <ul>
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                className="transform hover:scale-75 lg:w-48 lg:h-40 w-36 h-28 mx-auto"
                src={react}
                alt="React"
              ></img>
              <p className="text-center font-semibold text-xl">React</p>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
              <img
                className="transform hover:scale-75 delay-100 lg:w-64 lg:h-40 w-48 h-28 mx-auto"
                src={reactrouter}
                alt="React Router"
              ></img>
              <p className="text-center font-semibold text-xl">React Router</p>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                className="transform hover:scale-75 delay-100 lg:w-48 lg:h-40 w-36 h-32 mx-auto"
                src={tailwind}
                alt="tailwind"
              ></img>
              <p className="text-center font-semibold text-xl">Tailwind CSS</p>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
              <img
                className="transform hover:scale-75 delay-100 lg:w-40 lg:h-36 w-26 h-32 mx-auto"
                src={netlify}
                alt="netlify"
              ></img>
              <p className="text-center font-semibold text-xl">Netlify</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Technology;
