import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-6 px-10'>
        <div className="flex gap-10">
            <Image src={'/logo.svg'} width={150} height={150} alt='Logo'/>
            <ul className='flex gap-4 items-center sm:hidden'>
                <li>Dashboard</li>
                <li>Search</li>
                <li>Chat</li>
            </ul>
        </div>
        <div className="flex gap-2">
            <Button><Plus/>Post Your Ad</Button>
            <Button variant="outline">Login</Button>
        </div>
    </div>
  )
}

export default Header