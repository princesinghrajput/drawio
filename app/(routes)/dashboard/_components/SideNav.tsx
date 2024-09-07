
import React from "react";
import SideNavTopSection from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottom from "./SideNavBottom";

function SideNav() {
    const {user}:any = useKindeBrowserClient();
    
  return <div className=" flex flex-col text-gray-800 h-screen w-72 border-r border-[2px] p-6">
    <div className="flex-1">
    <SideNavTopSection user={user}/>
    </div>
    <div className="">
      <SideNavBottom/>
    </div>
  </div>;
}

export default SideNav;
