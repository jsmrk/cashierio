import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRightFromBracket,
  faReceipt,
  faCashRegister,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const sidebar = [
  {
    title: "Dashboard",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title: "Cashier",
    icon: <FontAwesomeIcon icon={faCashRegister} />,
  },
  {
    title: "Sales",
    icon: <FontAwesomeIcon icon={faReceipt} />,
  },
  {
    title: "Settings",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
];

// type Props = {};

const Sidebar = () => {
  const buttonStyle =
    "text-primary text-4xl py-7 px-7 rounded-3xl hover:bg-primary hover:text-white transition-all duration-200";

  return (
    <div className="h-full bg-dark-200 flex flex-col justify-between items-center">
      <div>
        <img
          src={Logo}
          alt="logo"
          className="size-24 rounded-3xl mt-11 mb-20"
        />
        <ul className="flex flex-col gap-11 justify-center items-center ">
          {sidebar.map((data) => (
            <button>
              <li key={data.title} className={`${buttonStyle}`}>
                <div className=""> {data.icon}</div>
                {/* <p>{data.title}</p> */}
              </li>
            </button>
          ))}
        </ul>
      </div>
      <button className={`${buttonStyle} mb-11`}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </div>
  );
};

export default Sidebar;
