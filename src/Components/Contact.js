import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = ({ ...otherProps }) => {
  document.title = "Contact";
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };
  return (
    <>
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
      <div className="lg:flex lg:flex-row justify-around my-7 lg:mt-32">
        <div className="mx-5 lg:ml-10">
          <h1 className="font-bold text-4xl font-roboto">Hire Me.</h1>
          <p className="text-xl font-montserrat mt-1">
            I am available for work. Connect with me via:
          </p>
          <div className="mt-3 font-poppins">
            <div>
              <p className="inline-flex items-center">
                <BsPhoneFill className="text-2xl" />
                <span className="ml-1">081383354828</span>
              </p>
            </div>
            <div>
              <p className="inline-flex items-center">
                <MdEmail className="text-2xl" />
                <span className="ml-1">ranantaprad@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-end-3 mx-5 lg:mr-10 mt-5 lg:mt-0">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="border-2 border-black rounded-lg w-full mb-3 focus:ring-gray-900 focus:border-transparent placeholder-gray-500 placeholder-opacity-75 font-lato"
            ></input>
            <input
              type="email"
              placeholder="Your Email"
              className="border-2 border-black rounded-lg w-full mb-3 focus:ring-gray-700 focus:border-transparent placeholder-gray-500 placeholder-opacity-75 font-lato"
            ></input>
            <textarea
              placeholder="Your Message"
              className="border-2 border-black rounded-lg w-full mb-3 h-40 focus:ring-gray-700 focus:border-transparent placeholder-gray-500 placeholder-opacity-75 font-lato"
            ></textarea>
            <br />
            <button className="bg-gray-700 hover:bg-black text-white py-2 px-3 rounded font-lato">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
