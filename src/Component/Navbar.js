import React, { useState } from "react";
import { Link } from '@chakra-ui/react'

import "animate.css";


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header>
      <nav className="md:bg-transparent bg-white absolute w-full h-14 items-center justify-center px-2 md:bg-opacity-0 z-10">
        <div className="container md:bg-transparent bg-white px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="animate__animated animate__backInDown animate__delay-2s " >
            <Link href="/">
              <a className="inline-block mr-4  border-4 border-grey-100 border-l-grey-300  bg-no-repeat bg-center rounded-lg  content-start whitespace-no-wrap object-contain w-20 md:w-36 cursor-pointer">
                <img class="animate__animated animate__backInDown animate__delay-2s " src="/logo-emege.png" />
              </a>
            </Link>
            <button
              className="text-gray cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded   block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className=" flex flex-col lg:flex-row list-none lg:ml-auto font-semibold">
              <li className="nav-item pr-10">
                <Link href="/patagonia">
                  <a className=" px-3 py-2 flex items-center text-xl text-green-500 hover:opacity-75 cursor-pointer ">
                  Cobertura Servicio
                  </a>
                </Link>
              </li>
              <li className="nav-item pr-10">
                <Link href="/euro">
                  <a className="px-3 py-2 flex items-center text-lg text-green-500 hover:opacity-75 cursor-pointer">
                   Promociones y Eventos
                  </a>
                </Link>
              </li>
              <li className="nav-item pr-10">
                <Link href="/termos">
                  <a className="px-3 py-2 flex items-center text-lg border-white text-green-500 hover:opacity-75 cursor-pointer">
                    Electro Trade
                  </a>
                </Link>
              </li>
              {/* <li className="nav-item pr-10">
                        <Link href="/asistencia">
                            <a className="px-3 py-2 flex items-center text-lg text-gray-600 hover:opacity-75 cursor-pointer">Asistencia</a>
                        </Link>
                    </li> */}
              <li className="nav-item">
                <Link  href="/contacto">
                  <a   className="px-3 py-2 flex items-center text-lg text-green-500 hover:opacity-75 cursor-pointer pr-8">
                <h3 class="animate__animated animate__heartBeat animate__slower 2s animate__infinite infinite"> Contacto</h3>
                  </a>
                </Link>
               </li>
              <li class="animate__animated animate__fadeInRightBig animate__slow 2s " className="nav-item">
                <Link  src="/logo-emege.png" href="https://www.instagram.com/fulltimegroup/">
                  <a
                    className="px-3 py-2 flex items-center text-lg text-black hover:opacity-75 cursor-pointer"
                    target="blank"
                  >
                    <i  className="fab fa-instagram fa-2x"></i>
                  </a>
                </Link>
              </li>
              <li  class="animate__animated animate__fadeInRightBig animate__slow 3s " className="nav-item">
                <Link href="https://www.facebook.com/fulltimegroup">
                  <a
                    className="px-3 py-2 flex items-center text-lg text-black hover:opacity-75 cursor-pointer"
                    target="blank"
                  >
                    <i className="fab fa-facebook-square fa-2x"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
