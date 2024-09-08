import React, { useState } from "react";
import { Archive, Flag, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function SideNavBottom({ onFileCreate, totalFiles }: any) {
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
      id: 3,
      name: "Archive",
      icon: Archive,
      path: "",
    },
  ];

  const [fileInput, setFileInput] = useState("");

  // Calculate the progress percentage
  const maxFiles = 10;
  const progressPercentage = Math.min((totalFiles / maxFiles) * 100, 100);

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
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-blue-600 hover:bg-blue-800 justify-start mt-3">
            {" "}
            New File
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white text-slate-800">
          <DialogHeader>
            <DialogTitle>Create New File</DialogTitle>
            <DialogDescription>
              <Input
                placeholder="Enter File Name "
                onChange={(e) => setFileInput(e.target.value)}
                className="mt-3"
              />
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="">
            <DialogClose asChild>
              <Button
                type="button"
                disabled={!(fileInput.length > 3 && fileInput)}
                onClick={() => onFileCreate(fileInput)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Create
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Progress Bar */}
      <div className="h-4 w-full bg-gray-300 rounded-xl mt-5">
        <div
          className="h-4 bg-blue-600 rounded-lg"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <h2 className="text-[12px] mt-3">
        {" "}
        <strong>{totalFiles}</strong> Out of <strong>{maxFiles}</strong> files used
      </h2>
      <h2 className="text-[12px] mt-1">Upgrade your plan for unlimited access.</h2>
    </div>
  );
}

export default SideNavBottom;
