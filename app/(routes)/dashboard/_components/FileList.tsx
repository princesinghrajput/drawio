import { FileListContext } from "@/app/_context/FileListContext";
import React, { useContext, useState, useEffect } from "react";
import moment from "moment";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { Archive, Delete, MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export interface FILE {
  archive: boolean;
  createdAt: string;
  editedAt: string;
  fileName: string;
  _id: string;
  teamId: string;
  _creationTime: number;
  userId: string;
  whiteBoard: string;
}
function FileList() {
  const { fileList_, setFileList_ } = useContext(FileListContext);
  const [fileList, setFileList] = useState<any>();
  const { user }: any = useKindeBrowserClient();
  const router = useRouter()
  useEffect(() => {
    fileList_ && setFileList(fileList_);
    console.log(fileList_, "file list wala");
  }, [fileList_]);
  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                File Name
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Created At
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Edited At
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Author
              </td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {fileList &&
              fileList.map((file: FILE, index: number) => {
                return (
                  <tr className="odd:bg-gray-50 cursor-pointer"
                  onClick={()=>router.push('/workspace/'+file._id)}
                  >
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {file.fileName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {moment(file._creationTime).format("DD MMM YYYY")}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {moment(file._creationTime).format("DD MMM YYYY")}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <Image
                        src={user?.picture}
                        height={30}
                        width={30}
                        alt=""
                        className="rounded-full"
                      />
                    </td>

                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          {" "}
                          <MoreHorizontal />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                     
                      
                          <DropdownMenuItem className="gap-2"> <Archive className="w-4 h-4"/> Archive</DropdownMenuItem>
                          <DropdownMenuItem className="gap-2"> <Delete className="h-4 w-4"/> Delete</DropdownMenuItem>
                      
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FileList;
