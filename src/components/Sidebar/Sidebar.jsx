import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainPageIcon from "./icons/MainPageIcon";
import SubPageIcon from "./icons/SubPageIcon";
import TitleIcon from "./icons/TitleIcon";
import UsersIcon from "./icons/UsersIcon";
import "./Sidebar.css";
import sitesData from "../../data/sites.json"; // JSON 파일 import

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const location = useLocation();
  const categories = Object.keys(sitesData);

  const handleArrowClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  }, [open]);

  const isActiveLink = (path) => {
    return location.pathname.startsWith(path) ? "active" : "";
  };

  return (
    <aside className="hidden w-64 flex-col border-r bg-gray-100 p-6 sm:flex">
      <a href="/" className="flex items-center gap-2 font-semibold">
        <TitleIcon className="h-6 w-6 fill-gray-600" />
        <span className="text-gray-600">Site-Find-Site</span>
      </a>
      <nav className="mt-8 flex flex-col space-y-1">
        <Link
          to="/main"
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-500 ${isActiveLink(
            "/main"
          )}`}
        >
          <MainPageIcon className="h-5 w-5 fill-gray-600" />
          메인 페이지
        </Link>
        <div className="relative">
          <Link
            to="/introduce"
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-500 ${isActiveLink(
              "/introduce"
            )}`}
          >
            <SubPageIcon className="h-5 w-5 fill-gray-600" />
            사이트 소개
          </Link>
          <span
            className={`absolute right-3 top-2 cursor-pointer transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
            onClick={handleArrowClick}
          >
            ▼
          </span>
          <ul
            ref={contentRef}
            className="mt-2 pl-6 overflow-hidden transition-max-height"
            style={{ maxHeight: "0px" }}
          >
            {categories.map((category) => (
              <li className="lw_menu_item" key={category}>
                <Link
                  to={`/${category}`}
                  className={`block py-1 text-sm font-medium transition-colors hover:text-gray-500 ${isActiveLink(
                    `/${category}`
                  )}`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to="/permanent"
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-500 ${isActiveLink(
            "/permanent"
          )}`}
        >
          <UsersIcon className="h-5 w-5 fill-gray-600" />
          임시 페이지
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
