import Image from 'next/image';
import React, { FC } from 'react'

interface WWDCardProps {
    title: string;
    icon: string;
    description: string;
}

const WWDCards : FC<WWDCardProps> = ({
    title,
    icon,
    description
}) => {
  return (
    <div className='w-full aspect-[1.18] lg:aspect-[1.82] xl:aspect-[1.52] overflow-hidden rounded-[30px] flex items-center justify-center card-parent relative '>
        <div className='bg-primary w-full h-full px-[30px] 2xl:px-10 pt-[30px] xl:pt-[34px] 2xl:pt-[57px] top-[100%] absolute card-back pointer-events-none'>
            <p className='text-black text-lg font-medium lh151 text-left' >{description}</p>
        </div> 

        <div className='w-full flex flex-col items-center gap-10 card-front pointer-events-none'>
            <div className='w-[120px] h-[120px] thin-border-centered'>
                <div className='w-[100px] h-[100px] thin-border-centered'>
                    <div className='w-[50px] h-[50px] items-center justiyf-center'>
                        <Image
                            src={icon}
                            alt={title}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
            <p className='text-white text-2xl font-medium lh151'>{title}</p>
        </div>
    </div>
  )
}

export default WWDCards