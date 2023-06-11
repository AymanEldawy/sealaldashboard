import { LanguageContext } from '@/context/LangContext';
import { links } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'

import { BellIcon, CalenderIcon, ChevronIcon, CloseIcon, MessageIcon, StoreIcon, UserIcon } from '../Icons';
import { Button } from '../Global/Button/Button';

export const MobileMenu = ({ closeMenu }) => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const [openSubMenu, setOpenSubMenu] = useState('')
  return (
    <nav className='lg:hidden fixed z-10 top-0 left-0 h-full bg-white w-screen'>
      <Button outline classes="mt-4 !border-0 mb-2 flex items-center justify-center h-10 mx-4 w-10 " onClick={closeMenu}><ChevronIcon className="text-primary rtl:rotate-180 h-6 w-6" /> </Button>
      <div className="relative flex flex-col gap-4 border-y py-3 px-4">
        <Link href="" className="flex gap-4 text-secondary whitespace-nowrap font-medium "><BellIcon className="w-5 h-5 text-secondary " /> {fetchWord('My_Announcements', lang)}</Link>
        <Link href="" className="flex gap-4 text-secondary whitespace-nowrap font-medium "><CalenderIcon className="w-5 h-5 text-secondary " /> {fetchWord('Calendar', lang)}</Link>
        <Link href="" className="flex gap-4 text-secondary whitespace-nowrap font-medium "><MessageIcon className="w-5 h-5 text-secondary " /> {fetchWord('Support', lang)}</Link>
        <Link href="" className="flex gap-4 text-secondary whitespace-nowrap font-medium "><StoreIcon className="w-5 h-5 text-secondary " /> {fetchWord('Go_To_Store', lang)}</Link>
        <Link href="" className="flex gap-4 text-secondary whitespace-nowrap font-medium "><UserIcon className="w-5 h-5 text-secondary " /> {fetchWord('with_the_Store', lang)}</Link>
      </div>
      <ul className='flex flex-col gap-4 flex-1 mt-4'>
        {links?.map(item => (
          <li key={item?.name} className="relative z-10 px-4 font-medium">
            {
              item?.children?.length ? (
                <>
                  <button onClick={() => setOpenSubMenu(item?.id)} className="text-secondary flex gap-1 justify-between w-full">
                    {fetchWord(item?.name, lang)}
                    <span className={`scale-75 block ltr:rotate-180 ${openSubMenu === item?.id ? 'ltr:!rotate-90 rtl:-rotate-90' : ''}`}> <ChevronIcon /></span>
                  </button>
                  {
                    openSubMenu == item?.id ? (
                      <ul className="z-[3]bg-gray-100 flex flex-col gap-2 rounded-md min-w-[150px] p-4 top-[40px]">
                        {item?.children?.map(subItem => (
                          <li key={subItem?.name}>
                            <Link href={subItem?.link} onClick={closeMenu} className="whitespace-nowrap capitalize text-secondary hover:text-primary ">
                              {fetchWord(subItem?.name, lang)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null
                  }
                </>
              ) :
                <Link onClick={closeMenu} href={item?.link} className={`capitalize whitespace-nowrap text-white hover:text-primary ${router?.pathname === item?.link ? 'text-primary' : ''}`}>{fetchWord(item?.name, lang)}</Link>
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}
