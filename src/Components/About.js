import React from "react";
import Profile from "../Assets/gg.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const About = ({ ...otherProps }) => {
  document.title = "About";
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };
  return (
    <div>
      <header className="relative bg-black text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
          <div className="font-bold text-2xl">
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
      <div className="md:flex md:flex-row justify-evenly items-center mt-6 mb-6 lg:my-24">
        <img
          className="w-72 h-80 mt-10 mx-auto md:ml-32 transform lg:hover:scale-125 delay-150 lg:cursor-pointer shadow-lg"
          src={Profile}
          alt="profile"
        ></img>
        <div className="mx-16 mt-10">
          <h1 className="md:text-5xl text-4xl mb-5 font-roboto">About Me</h1>
          <p className="text-justify font-montserrat">
            Cras non magna quis nibh venenatis tempus sed sed enim. Duis eros
            dolor, maximus vitae imperdiet ut, consequat a augue. Etiam ac dolor
            id tellus pellentesque interdum eu eu leo. Phasellus luctus nisi
            metus, at cursus sapien interdum non. In dui metus, elementum vitae
            placerat nec, accumsan a enim. Proin aliquet dictum blandit. Aliquam
            metus diam, condimentum id feugiat id, aliquam eu risus. Aenean
            mattis viverra tellus id fermentum. Mauris id ex sed erat feugiat
            molestie et non odio. Fusce in dapibus orci.
          </p>
          <div className="text-center mt-8 flex justify-items-start uppercase font-bold font-lato">
            <a
              className="bg-black text-white px-4 py-2 rounded-full mr-8 hover:text-gray-300"
              href="https://rizkyananta.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Portfolio
            </a>
            <a
              className="bg-black text-white px-4 py-2 rounded-full hover:text-gray-300"
              href="https://drive.google.com/file/d/1wMseREnrl0h5N2HHVcANtyraZb-hJDKV/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              my Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
