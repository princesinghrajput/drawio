"use client"
import React, {useState, useEffect} from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import Editor from '../_components/Editor'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList';


function Workspace({params}:any) {
  const [triggerSave, setTriggerSave] = useState(false);
  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE | any>();
  useEffect(() => {
    console.log("Params", params)
    params.fileId&&getFileData()
  },[])

  const getFileData=async()=>{
    const result = await convex.query(api.files.getFileById,{_id:params.fileId})
    setFileData(result);
  }
  return (
    <div className='text-gray-700'>
        <WorkspaceHeader onSave={()=>setTriggerSave(!triggerSave)}/>

        {/* Workspace Layout */}

        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-gray-400 h-screen'>
                {/* Documents */}
                <Editor onSaveTrigger={triggerSave} fileId={params.fileId} fileData={fileData}/>
            </div>
            <div className='bg-red-400 h-screen'>
                {/* WhiteBoard/Canvas */}
                Canvas
            </div>
        </div>
    </div>
  )
}

export default Workspace