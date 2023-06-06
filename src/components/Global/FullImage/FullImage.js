import React, { useState } from 'react'
import Image from 'next/image';
import Modal from '@/components/Modal/Modal';

export const FullImage = ({ src, alt, height, width, ...imgProps }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} onClick={() => setOpen(true)} className='cursor-pointer' {...imgProps}  />
      <Modal open={open} close={() => setOpen(false)} modalClassName="!p-2" containerClassName="max-w-[575px]">
        <Image
          src={src}
          alt={alt}
          height={350}
          width={500}
          className="xs:w-96 min-w-[270px] w-full max-w-none max-h-[90vh] rounded-md object-cover "
        />
      </Modal>
    </>
  )
}
