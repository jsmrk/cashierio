import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRightFromBracket,
  faReceipt,
  faCashRegister,
  faGear,
  faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import supabase from "@/utils/supabase";

const sidebar = [
  {
    title: "Dashboard",
    icon: <FontAwesomeIcon icon={faHouse} />,
    path: "/",
  },
  {
    title: "Cashier",
    icon: <FontAwesomeIcon icon={faCashRegister} />,
    path: "/cashier",
  },
  {
    title: "Inventory",
    icon: <FontAwesomeIcon icon={faBoxesStacked} />,
    path: "/inventory",
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
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = (path: string) => {
    setActiveLink(path);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign out error:", error);
    }
  };

  const buttonStyle =
    "text-primary text-xl px-5 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-200";

  return (
    <div className="h-screen w-full bg-card flex flex-col justify-between items-center rounded-r-[2.5rem]">
      <div className="flex flex-col gap-11 justify-center items-center">
        <img
          src={Logo}
          alt="logo"
          className="size-11 rounded-xl mt-11 text-center"
        />
        <ul className="flex flex-col gap-5 justify-center items-center">
          {sidebar.map((data, index) => {
            return (
              <NavLink
                key={index}
                to={data.path}
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
      <button className={`${buttonStyle} mb-7`} onClick={handleSignOut}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </div>
  );
};

export default Sidebar;
