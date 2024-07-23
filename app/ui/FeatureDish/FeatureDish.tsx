import React from 'react';

interface FeaturedDish {
    dishName: string, 
    dishImage: string,
    moveX: string,
    moveY: string
}

export function FeatureDish(props: FeaturedDish): JSX.Element {
  return (
    <div className='group m-1 p-5 relative flex justify-center items-center overflow-hidden
      w-[150px] h-[500px] cursor-pointer flex-auto rounded-md'>
        <p className='text-2xl font-bold text-center tracking-widest text-wrap text-slate-50 absolute opacity-0 z-10
            transition-opacity ease-in-out duration-700
            group-hover:opacity-100 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.5)]'>
            { props.dishName }
        </p>
        
        <img src={ props.dishImage } alt={ props.dishName }
            className='relative scale-90 min-w-max m-auto ease-in-out duration-700
                group-hover:blur-sm group-hover:scale-125'
            style={{left: `${props.moveX}`, top: `${props.moveY}`}}></img>
    </div>
  )
}