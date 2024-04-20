import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRightFromBracket,
  faReceipt,
  faCashRegister,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const sidebar = [
  {
    title: "Dashboard",
    icon: <FontAwesomeIcon icon={faHouse} />,
    path: "/dashboard",
  },
  {
    title: "Cashier",
    icon: <FontAwesomeIcon icon={faCashRegister} />,
    path: "/cashier",
  },
  {
    title: "Sales",
    icon: <FontAwesomeIcon icon={faReceipt} />,
    path: "/sales",
  },
  {
    title: "Settings",
    icon: <FontAwesomeIcon icon={faGear} />,
    path: "/settings",
  },
];

// type Props = {};

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard");

  const handleClick = (path: string) => {
    setActiveLink(path);
  };

  const buttonStyle =
    "text-primary text-xl px-5 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-200";

  return (
    <div className="h-full w-32  bg-dark-200 flex flex-col justify-between items-center rounded-r-[2.5rem]">
      <div className="flex flex-col gap-11 justify-center items-center">
        <img
          src={Logo}
          alt="logo"
          className="size-16 rounded-xl mt-11 text-center"
        />
        <ul className="flex flex-col gap-5 justify-center items-center">
          {sidebar.map((data, index) => {
            return (
              <NavLink
                key={index}
                to={data.path}
                className={`${
                  activeLink === data.path
                    ? "bg-dark-100 py-5 pl-5 rounded-l-3xl pr-11 ml-7"
                    : ""
                }`}
                onClick={() => handleClick(data.path)}
              >
                <li
                  className={`${buttonStyle} ${
                    activeLink === data.path ? "bg-primary  text-white" : ""
                  }`}
                >
                  {data.icon}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <button className={`${buttonStyle} mb-7`}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </div>
  );
};

export default Sidebar;
