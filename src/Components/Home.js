import React from "react";
import { useState } from "react";
import Hero from "../Assets/img.jpg";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import TypewriterComponent from "typewriter-effect";

const Header = ({ ...otherProps }) => {
  document.title = "Home";

  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <div
      className="relative w-full h-screen bg-top bg-cover bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <header className="relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
          <div className="text-white font-bold text-2xl">
            <Link to="/">LOGO</Link>
          </div>

          <div onClick={onClick} className={`md:hidden text-white`}>
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
            } absolute flex flex-col top-full w-full left-0 z-20 md:static md:w-auto md:flex font-poppins`}
          >
            <ul className="md:flex-row md:flex">
              <li className="list-none md:mr-5">
                <Link
                  to="/"
                  className="flex w-full text-xl text-white hover:text-gray-200 cursor-pointer p-2 px-2.5"
                >
                  Home
                </Link>
              </li>
              <li className="list-none md:mr-5">
                <Link
                  to="/about"
                  className="flex w-full text-xl text-white hover:text-gray-200 cursor-pointer p-2 px-2.5"
                >
                  About
                </Link>
              </li>
              <li className="list-none md:mr-5">
                <Link
                  to="/technology"
                  className="flex w-full text-xl text-white hover:text-gray-200 cursor-pointer p-2 px-2.5"
                >
                  Technology
                </Link>
              </li>
              <li className="list-none md:mr-5">
                <Link
                  to="/contact"
                  className="flex w-full text-xl text-white hover:text-gray-200 cursor-pointer p-2 px-2.5"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center text-center mt-100">
        <div className="text-gray-50">
          <h1 className="lg:text-5xl font-bold text-4xl font-roboto">
            Rizky Ananta Pradana
          </h1>
          <p className="text-3xl mt-4 lg:mt-3 font-montserrat">
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I'm Developer")
                  .pauseFor(1000)
                  .deleteChars(9)
                  .typeString("Editor")
                  .pauseFor(1000)
                  .deleteChars(6)
                  .typeString("Engineer")
                  .pauseFor(1000)
                  .deleteChars(8)
                  .start();
              }}
            />
          </p>
        </div>
        <div className="flex flex-row mt-4 lg:mt-3 text-2xl">
          <a
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-3 text-white hover:text-gray-300"
            href="https://www.facebook.com/rizkyanantaaa"
            rel="noreferrer"
            target="_blank"
          >
            <BsFacebook />
          </a>
          <a
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-3 text-white hover:text-gray-300"
            href="https://www.twitter.com/ranantaprad"
            rel="noreferrer"
            target="_blank"
          >
            <BsTwitter />
          </a>
          <a
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-3 text-white hover:text-gray-300"
            href="https://www.instagram.com/rizkyanantaprad"
            rel="noreferrer"
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-3 text-white hover:text-gray-300"
            href="https://www.github.com/ranantaprad"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-3 text-white hover:text-gray-300"
            href="https://www.linkedin.com/in/ranantaprad/"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
