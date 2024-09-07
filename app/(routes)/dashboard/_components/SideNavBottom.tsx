import React from "react";
import { Archive, Flag, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function SideNavBottom() {
  const menuList = [
    {
      id: 1,
      name: "Getting Started",
      icon: Flag,
      path: "",
    },
    {
      id: 2,
      name: "Github",
      icon: GithubIcon,
      path: "",
    },
    {
      id: 2,
      name: "Archive",
      icon: Archive,
      path: "",
    },
  ];
  return (
    <div>
      {menuList.map((menu, index) => {
        return (
          <div key={index}>
            <h2 className="flex gap-2 p-1 text-[14px] hover:bg-gray-300 rounded-md cursor-pointer">
              <menu.icon className="w-4 h-4" />
              {menu.name}
            </h2>
          </div>
        );
      })}

      {/* Add New File Button */}
      <Button className="w-full bg-blue-600 hover:bg-blue-800 justify-start mt-3">
        New File
      </Button>

      {/* Progress Bar */}

      <div className="h-4 w-full bg-gray-300 rounded-xl mt-5">
        <div className="h-4 w-[40%] bg-blue-600 rounded-lg"></div>
      </div>

      <h2 className="text-[12px] mt-3 "> <strong>1</strong> Out of  <strong>5</strong> files used</h2>
      <h2 className="text-[12px] mt-1">Upgrade your plan for unlimited access.</h2>
    </div>
  );
}

export default SideNavBottom;
