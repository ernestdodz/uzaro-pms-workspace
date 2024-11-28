import { Link, useLocation } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { MdOutlineCalendarToday } from "react-icons/md";
import { BiMoney } from "react-icons/bi";

interface NavItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

const navigation: NavItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: <RiMenuLine className="w-5 h-5" />,
  },
  {
    name: "Reservations",
    path: "/reservation",
    icon: <MdOutlineCalendarToday className="w-5 h-5" />,
  },
  {
    name: "Finance",
    path: "/finance",
    icon: <BiMoney className="w-5 h-5" />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6">
            <Link to="/">
              <h1 className="text-2xl font-semibold text-gray-800">
                Hotel PMS
              </h1>
            </Link>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                >
                  <div
                    className={`${
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-400 group-hover:text-gray-500"
                    } mr-3`}
                  >
                    {item.icon}
                  </div>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
