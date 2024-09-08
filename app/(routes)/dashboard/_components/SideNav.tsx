
import React, {useState} from "react";
import SideNavTopSection, { TEAM } from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottom from "./SideNavBottom";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

function SideNav() {
    const {user}:any = useKindeBrowserClient();

    const createFile = useMutation(api.files.createFile)
    const [activeTeam, setActiveTeam] = useState<TEAM>()

    const onFileCreate=(fileName:string)=>{
      console.log("File creation clicked", fileName);
      // Add your code here to navigate to file creation page.
      createFile({
        fileName: fileName,
        teamId: activeTeam?._id,
        createdBy: user?.email,
        archive:false,
        document:'',
        whiteboard:''
       
       
      }).then(resp=>{
        if(resp){
          toast.success('File created successfully')
        }
      }, (e)=>{
        toast.error('Error creating file')
        console.error(e)
      })
    }
    
  return <div className=" flex flex-col text-gray-800 h-screen w-72 border-r border-[2px] p-6">
    <div className="flex-1">
    <SideNavTopSection user={user} setActiveTeamInfo={(activeTeam:TEAM)=>setActiveTeam(activeTeam)}/>
    </div>
    <div className="">
      <SideNavBottom onFileCreate={onFileCreate}/>
    </div>
  </div>;
}

export default SideNav;
