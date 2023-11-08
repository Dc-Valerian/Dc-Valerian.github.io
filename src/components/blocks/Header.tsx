import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { GrClose } from "react-icons/gr";
import "../../style.css";
import { motion } from "framer-motion";
import Switcher from "../DarkMode/Switcher/Switcher";

const Header = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  // const [click, setClick] = useState(false);

  // const Toggle = () => {
  //   setClick(!click);
  // };

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  const changeHeaderColor = () => {
    setShow(window.scrollY >= 90);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  return (
    <section>
      <div
        className={`w-[100%] h-[70px] flex justify-center top-0 bg-[] ${
          show ? "fixed bg-first z-10 bg-[var(--accent)]" : " fixed z-10"
        }`}
      >
        <div className="w-[95%] flex items-center justify-between">
          <div
            className={` name text-[26px] h-[45px] w-[130px] flex items-center justify-center text-[var(--accent)] animate-pulse  dark:text-[var(--cyan)]  ${
              show ? "text-[white]" : "text-[var(--accent)]"
            }`}
          >
            Valerian
          </div>

          <div className="text-[#fff] text-[33px] cursor-pointer flex lg:hidden mt-[12px] md:text-[30px]">
            <Switcher />
          </div>

          <div
            className={`items-center mt-[12px] text-[var(--accent)] text-[18px]  dark:text-[var(--cyan)] hidden  lg:flex ${
              show ? "text-[white]" : "text-[var(--accent)]"
            }`}
          >
            <NavLink to="/">
              <h3 className="mr-[55px] m-[10px] font-medium cursor-pointer border-b-2 border-transparent  hover:border-[var(--cyan)]  transition transform hover:scale-x-100">
                Home
              </h3>
            </NavLink>
            <NavLink to="/recipies">
              <h3 className="mr-[55px] m-[10px  font-medium cursor-pointer border-b-2 border-transparent  hover:border-[var(--cyan)]  transition transform hover:scale-x-100">
                Recipies
              </h3>
            </NavLink>
            <h3 className="mr-[55px] m-[10px] font-medium cursor-pointer border-b-2 border-transparent  hover:border-[var(--cyan)]  transition transform hover:scale-x-100">
              About Us
            </h3>
            <NavLink to="/contact-us">
              <h3 className="mr-[55px] m-[10px] font-medium cursor-pointer border-b-2 border-transparent hover:border-[var(--cyan)] transition transform hover:scale-x-100">
                Contact Us
              </h3>
            </NavLink>
          </div>

          <div
            className={`text-[#fff] text-[33px] cursor-pointer hidden lg:flex mt-[12px] md:text-[30px] ${
              show ? "text-[red]" : "text-[green]"
            }`}
          >
            <Switcher />
          </div>
          <div
            onClick={onOpenHandler}
            className={`text-[33px] cursor-pointer  lg:hidden mt-[12px] md:text-[30px]  dark:text-[white] ${
              show ? "text-[white]" : "text-[var(--accent)]"
            }`}
          >
            <HiMenuAlt3 />
          </div>

          <Dialog
            open={open}
            onClose={onCloseHandler}
            className="fixed top-0 right-0 h-full w-[60vw] md:w-[60%] z-50"
            aria-labelledby="dialog-title"
          >
            <div className="h-screen flex">
              <div
                className="fixed top-0 left-0 h-full w-[50%] bg-black bg-opacity-50"
                onClick={onCloseHandler}
              ></div>
              <div className="fixed top-0 right-0 bg-[white] dark:bg-[black] text-black w-[50%] h-full md:w-[65%]">
                <div className="flex justify-end p-4  shadow-md h-[80px]">
                  <button
                    className="text-[var(--accent)] dark:text-[#12C5E4] text-[30px] "
                    onClick={onCloseHandler}
                  >
                    <GrClose />
                  </button>
                </div>
                <div className="flex flex-col py-3 px-2 overflow-y-auto text-[var(--accent)]">
                  <h3
                    onClick={onCloseHandler}
                    className="mr-[55px] m-[10px] text-[20px] font-sm dark:text-[#12C5E4] cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100"
                  >
                    Home
                  </h3>

                  <h3
                    onClick={onCloseHandler}
                    className="mr-[55px] m-[10px] text-[20px] font-sm cursor-pointer border-b-2 border-transparent dark:text-[#12C5E4] hover:border-yellow-500 transition transform hover:scale-x-100"
                  >
                    Me
                  </h3>

                  <h3
                    onClick={onCloseHandler}
                    className="mr-[55px] m-[10px]  text-[20px] dark:text-[#12C5E4] font-sm cursor-pointer border-b-2 border-transparent hover:border-yellow-500 transition transform hover:scale-x-100"
                  >
                    About
                  </h3>

                  <div className="w-[90px] m-[10px] h-[45px] rounded-md text-[20px] text-[white] bg-[#12C5E4]  border border-[#12C5E4] flex items-center justify-center dark:text-[white] md:h-[40px] md:w-[50px]">
                    <Switcher />
                  </div>

                  <a
                    href="https://wa.me/+2349059493764"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center mt-[12px] animate-pulse text-[var(--accent)]">
                      <motion.button
                        animate={{ x: 10 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="w-[150px] h-[45px]  rounded-md text-[20px]  border border-[#12C5E4]  dark:text-[#12C5E4]"
                      >
                        Contact Me
                      </motion.button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Header;
