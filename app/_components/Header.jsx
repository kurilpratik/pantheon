'use client';

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();
    useEffect(() => {
        console.log(path);
    }, []);
  return (
    <div className='flex justify-between p-6 px-10 shadow-sm fixed w-full top-0 z-10 bg-white'>
        <div className="flex gap-10">
            <Image src={'/logo.svg'} width={150} height={150} alt='Logo'/>
            <ul className='flex gap-4 items-center sm:hidden'>
                <Link href={'/'}>
                    <li className={`'hover:text-primary font-medium text-sm cursor-pointer' ${path=='/' && 'text-primary'}`}>Dashboard</li>
                </Link>
                <li className='hover:text-primary font-medium text-sm cursor-pointer'>Search</li>
                <li className='hover:text-primary font-medium text-sm cursor-pointer'>Chat</li>
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