import Image from 'next/image'
import React, { FC } from 'react'

 interface button {
  cta?: () => void;
  text?: string;
  pClass?: string;
  btnClass?: string;
  image?: string;
  children?: React.ReactNode;
  disabled?: boolean
}


export const OutlinedButton: FC<button> = ({cta, text, pClass, btnClass}) => {
  return (
    <button onClick={cta} className={`button-outline ${btnClass}`}>
        <p className={`text-textBody ${pClass}`}>{text}</p>
    </button>
  )
}

// export const BoundlessIconButton: FC<button> = ({cta, text, pClass, btnClass, image}) => {
//   return (
//     <button onClick={cta} className={`button-boundless flex items-center gap-1 ${btnClass}`}>
//         {
//           image ? (<Image
//           src={image}
//           alt="left arrow for back action"
//         />) : (<Image
//           src={require('../assets/icons/arrowLeft.svg')}
//           alt="left arrow for back action"
//         />)
//         }
//         <p className={`${pClass}`}>{text}</p>
//     </button>
//   )
// }

export const FilledButton: FC<button> = ({cta, text, pClass, btnClass, image, children, disabled}) => {
  return (
    <button disabled={disabled} onClick={cta} className={`button-filled flex items-center gap-1 ${btnClass}`}>
        {
          image && <Image
          src={image as string}
          alt="left arrow for back action"
          className='h-6 w-6'
          />
        }
        
        {
          children ? children : (<p className={`font-semibold ${pClass}`}>{text}</p>)
        }
    </button>
  )
}