import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import logo from "@assets/imgs/logo.png";
import navData from "@data/nav.json";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);


  const router = useRouter();

  useEffect(() => {
    const activeItem = router.pathname;
    setActive(activeItem);
  }, [router]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 w-full z-50 ${
      scrolled ? 'bg-black' : ''
    }`}>
      <div className="flex px-4">
        <div className="flex justify-start items-center">
          <Link href="/">
            <span>
              <Image src={logo} width={200} alt="" />
            </span>
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 flex h-20 justify-center items-center">
          <div className="hidden lg:block">
            <div className="flex items-center font-bold text-white space-x-20 justify-center h-full">
              {navData.map((value, key) => (
                <Link href={value.href} key={key}>
                  <span
                    className={`${
                      active === value.href
                        ? "border-b-2 py-1 border-[#FFFFFF]"
                        : ""
                    } nav-link`}
                  >
                    {value.item}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="bg-black p-2 rounded-md text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <AiOutlineClose color="#ffffff" size={25} />
              ) : (
                <FiMenu color="#ffffff" size={25} />
              )}
            </button>
          </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden px-2 pt-2 pb-3 font-bold text-white flex flex-col space-y-6 transition-all duration-500 ease-in-out`}
      >
        {navData.map((value, key) => (
          <Link href={value.href} key={key}>
            <span
              className={`${
                active === value.href
                  ? "border-b-2 py-1 border-[#DCCA87]"
                  : ""
              } nav-link`}
              onClick={() => setIsOpen(false)}
            >
              {value.item}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
