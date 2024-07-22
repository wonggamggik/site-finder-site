import React from "react";
import { Link } from "react-router-dom";
import MainPageIcon from "./icons/MainPageIcon";
import TitleIcon from "./icons/TitleIcon";

const Sidebar = () => {
  return (
    <aside className="hidden w-64 flex-col border-r bg-[#f0f0f0] p-6 sm:flex">
      <a href="#" className="flex items-center gap-2 font-semibold">
        <TitleIcon className="h-6 w-6 fill-[#8d8d8d]" />
        <span className="text-[#8d8d8d]">Site-Find-Site</span>
      </a>
      <nav className="mt-8 flex flex-col space-y-1">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#8d8d8d] transition-colors hover:bg-[#e0e0e0] hover:text-[#6d6d6d]"
        >
          <MainPageIcon className="h-5 w-5 fill-[#8d8d8d]" />
          메인 페이지
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
