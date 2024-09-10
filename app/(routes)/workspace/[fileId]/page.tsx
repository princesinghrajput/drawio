"use client"
import React, {useState, useEffect} from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import Editor from '../_components/Editor'


function Workspace({params}:any) {
  const [triggerSave, setTriggerSave] = useState(false);
  useEffect(() => {
    console.log("Params", params)
  },[])
  return (
    <div className='text-gray-700'>
        <WorkspaceHeader onSave={()=>setTriggerSave(!triggerSave)}/>

        {/* Workspace Layout */}

        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-gray-400 h-screen'>
                {/* Documents */}
                <Editor onSaveTrigger={triggerSave} fileId={params.fileId}/>
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