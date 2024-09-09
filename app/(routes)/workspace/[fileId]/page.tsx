import React from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import Editor from '../_components/Editor'


function Workspace() {
  return (
    <div className='text-gray-700'>
        <WorkspaceHeader/>

        {/* Workspace Layout */}

        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-gray-400 h-screen'>
                {/* Documents */}
                <Editor/>
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