import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainPageIcon from "./icons/MainPageIcon";
import SubPageIcon from "./icons/SubPageIcon";
import TitleIcon from "./icons/TitleIcon";
import { fetchSitesData } from "../../utils/fetchData";

const Sidebar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const subMenuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const sitesData = await fetchSitesData();
      const categoryData = Object.keys(sitesData).map((key) => ({
        key,
        ko: sitesData[key].ko,
      }));
      setCategories(categoryData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (subMenuRef.current) {
      subMenuRef.current.style.maxHeight = subMenuOpen
        ? `${subMenuRef.current.scrollHeight}px`
        : "0px";
    }
  }, [subMenuOpen]);

  const handleToggleSubMenu = (e) => {
    e.preventDefault();
    setSubMenuOpen(!subMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <aside className="fixed top-0 left-0 h-screen bg-sidebar_color p-6 transition-transform transform w-64">
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
          <div className="flex items-center justify-between">
            <Link
              to="/introduce"
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-500 ${isActiveLink(
                "/introduce"
              )}`}
            >
              <SubPageIcon className="h-5 w-5 fill-gray-600" />
              사이트 소개
            </Link>
            <button
              onClick={handleToggleSubMenu}
              className="transform transition-transform"
              aria-label="Toggle submenu"
            >
              <span className={`${subMenuOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
          </div>
          <ul
            ref={subMenuRef}
            className="mt-2 pl-6 overflow-hidden transition-max-height duration-300"
            style={{
              maxHeight: subMenuOpen
                ? `${subMenuRef.current.scrollHeight}px`
                : "0px",
            }}
          >
            {categories.map((category) => (
              <li className="lw_menu_item" key={category.key}>
                <Link
                  to={`/introduce/${category.key}`}
                  className={`block py-1 text-sm font-medium transition-colors hover:text-gray-500 ${isActiveLink(
                    `/introduce/${category.key}`
                  )}`}
                >
                  {category.ko}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
