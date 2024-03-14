import React from 'react';

interface FeaturedDish {
    dishName: string, 
    dishImage: string,
    moveX: string,
    moveY: string
}

export default function FeatureDish(props: FeaturedDish): JSX.Element {
  return (
    <div className='group m-2 p-5 relative flex justify-center items-center overflow-hidden
      min-w-[300px] max-w-[500px] min-h-[600px] flex-auto'>
        <p className='text-2xl font-bold text-center tracking-widest text-wrap text-slate-50 absolute opacity-0 z-10
            transition-opacity ease-in-out duration-700
            group-hover:opacity-100 drop-shadow-md'>
            { props.dishName }
        </p>
        
        <img src={ props.dishImage } alt={ props.dishName }
            className='absolute scale-90 max-w-[400%] h-auto m-auto ease-in-out duration-700
                group-hover:blur-sm group-hover:scale-125'
            style={{left: `${props.moveX}`, top: `${props.moveY}`}}></img>
    </div>
  )
}
