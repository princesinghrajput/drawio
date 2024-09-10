import { Button } from '@/components/ui/button'
import { Link, Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader({onSave}:any) {
  return (
    <div className='p-3 border-b flex justify-between items-center'>
     <div className='flex gap-2 items-center'>
     <Image src='/logo.png' alt='' height={40} width={40}/>
     <h2>File Name</h2>
     </div>
      <div className='flex justify-between items-center gap-4'>
      <Button className='h-8 text-[12px]  bg-yellow-600 hover:bg-yellow-700'> <Save className='h-4 w-4' 
      onClick={()=>onSave()}
      />Save</Button>
      <Button className='h-8 text-[12px] gap-2 bg-blue-600 hover:bg-blue-700'>Share <Link className='h-4 w-4'/> </Button>
      </div>
    </div>
  )
}

export default WorkspaceHeader