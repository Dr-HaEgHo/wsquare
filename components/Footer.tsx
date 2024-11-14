import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='relative w-full py-16 px-[70px]'>
            <Image 
                src={require('@/assets/images/FooterBg.png')}
                alt='footer background'
                className='absolute z-0 w-full h-full object-cover top-0 left-0'
            />
        <div className='py-8 w-full max-w-[1300px] mx-auto flex items-center justify-between relative z-10'>

            <div className='flex flex-col items-start justify-between gap-5'>
                <p className='text-2xl text-black font-semibold lh151'>Address</p>
                <p className='text-2xl text-black font-semibold lh151'>071234567890</p>
            </div>
          
            <div className='flex flex-col items-start justify-between gap-5'>
                <p className='text-2xl text-black font-semibold lh151'>Contact us directly</p>
                <p className='text-2xl text-black font-semibold lh151'>071234567890</p>
            </div>

            <div className='flex flex-col items-start justify-between gap-5'>
                <p className='text-2xl text-black font-semibold lh151'>Follow Us</p>
                <div className='flex items-center gap-[18px]'>
                    <a href="" className='w-8 h-8'>
                        <Image
                            src={require('@/assets/icons/x.svg')}
                            alt='twitter'
                            className='w-full h-full object-cover'
                        />
                    </a>
                    <a href="" className='w-8 h-8'>
                        <Image
                            src={require('@/assets/icons/ig.svg')}
                            alt='instagram'
                            className='w-full h-full object-cover'
                        />
                    </a>
                    <a href="" className='w-8 h-8'>
                        <Image
                            src={require('@/assets/icons/in.svg')}
                            alt='linkedIn'
                            className='w-full h-full object-cover'
                        />
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer