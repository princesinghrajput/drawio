
import React, {useContext, useEffect, useState} from "react";
import SideNavTopSection, { TEAM } from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottom from "./SideNavBottom";
import { useConvex, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FileListContext } from "@/app/_context/FileListContext";
function SideNav() {
    const {user}:any = useKindeBrowserClient();
    const {fileList_, setFileList_} = useContext(FileListContext)

    const createFile = useMutation(api.files.createFile)
    const [activeTeam, setActiveTeam] = useState<TEAM>();
    const [totalFiles, setTotalFiles] = useState<Number>();
    const convex = useConvex()

  useEffect(()=>{
    activeTeam&&getFiles();
  }, [activeTeam])

    const onFileCreate=(fileName:string)=>{
      console.log("File creation clicked", fileName);
      // Add your code here to navigate to file creation page.
      createFile({
        fileName: fileName,
        teamId: activeTeam?._id as string , 

        createdBy: user?.email,
        archive:false,
        document:'',
        whiteboard:''
       
       
      }).then(resp=>{
        if(resp){
          getFiles();
          toast.success('File created successfully')
        }
      }, (e)=>{
        toast.error('Error creating file')
        console.error(e)
      })
    }

    const getFiles = async() =>{
      const result = await convex.query(api.files.getFiles, {teamId:activeTeam?._id})
      console.log("Files", result)
      setFileList_(result);
      setTotalFiles(result.length)
    }
    
  return <div className=" flex flex-col text-gray-800 h-screen w-72 border-r border-[2px] p-6">
    <div className="flex-1">
    <SideNavTopSection user={user} setActiveTeamInfo={(activeTeam:TEAM)=>setActiveTeam(activeTeam)}/>
    </div>
    <div className="">
      <SideNavBottom onFileCreate={onFileCreate} totalFiles={totalFiles}/>
    </div>
  </div>;
}

export default SideNav;
