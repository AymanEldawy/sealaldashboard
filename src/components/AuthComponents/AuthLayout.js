import Image from 'next/image'
import React from 'react'

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex items-center'>
      <div className='flex justify-center gap-8'>
        <Image src="/images/authbanner.png" alt="Auth Banner" height={400} width={320} />
      </div>
    </div>
  )
}

export default AuthLayout