"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'

function CreateTeam() {
  const [teamName, setTeamName] = useState('')
  const createTeam = useMutation(api.teams.createTeam)
  const {user}:any= useKindeBrowserClient()
  const router = useRouter()
  const createNewTeam =()=>[
    createTeam({
      teamName: teamName,
      createdBy:user?.email
    }).then(resp=>{
      console.log(resp)
      if(resp){
        router.push('/dashboard')
        toast.success('Team Created Successfully')
       
      }
    })
  ]
  
  return (
    <div className='text-gray-700 px-6 md:px-16 my-16'>
      <Image src="/logo.png" height={100} width={100} alt='logo'/>
    
    <div className='flex flex-col items-center mt-8'>
      <h2 className='text-gray-900 font-bold text-[40px] py-3'>What should we call your team?</h2>
      <h2 className='text-gray-500'>You can always change this later from setting</h2>
      <div className='mt-7 w-[40%]'>
    <label className='text-gray-500'>Team Name</label>
    <Input placeholder="Team Name" onChange={(e)=>setTeamName(e.target.value)} className=''/>
    </div>
    <Button onClick={()=>createNewTeam()} className='bg-blue-500 mt-9 w-[30%] hover:bg-blue-800' disabled={!(teamName&&teamName?.length > 0 )}>Create Team</Button>
    
    </div>
    
    </div>
  )
}

export default CreateTeam