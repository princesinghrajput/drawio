import { Button } from '@/components/ui/button';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Search, Send } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function Header() {
    const {user}:any = useKindeBrowserClient()
  return (
    <div className='flex justify-end w-full items-center gap-2'>
      <div className='relative flex items-center'>
        {/* Search Icon */}
        <Search className='absolute left-2 h-4 w-4 text-gray-500' />

        {/* Input Field */}
        <input 
          type="text" 
          placeholder='Search' 
          className='pl-8 pr-3 py-1 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <div>
        <Image  src={user?.picture} height={30} width={30} alt='' className='rounded-full '/>
      </div>
      <Button className='gap-2 flex text-sm h-8 hover:bg-blue-700 bg-blue-600'><Send className='h-4 w-4'/></Button>
    </div>
  );
}

export default Header;
