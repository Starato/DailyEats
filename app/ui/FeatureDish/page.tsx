import React from 'react';

interface FeaturedDish {
    dishName: string, 
    dishImage: string,
    moveX: string,
    moveY: string
}

const FeatureDish: React.FC<FeaturedDish> = ({ dishName, dishImage, moveX, moveY }): JSX.Element => {
  return (
    <div className='group m-2 p-5 relative flex justify-center items-center overflow-hidden
      min-w-[300px] max-w-[500px] min-h-[600px] flex-auto'>
        <p className='text-2xl font-bold text-center tracking-widest text-wrap text-slate-50 absolute opacity-0 z-10
            transition-opacity ease-in-out duration-700
            group-hover:opacity-100 drop-shadow-md'>
            { dishName }
        </p>
        
        <img src={ dishImage } alt={ dishName }
            className='absolute scale-90 max-w-[400%] h-auto m-auto ease-in-out duration-700
                group-hover:blur-sm group-hover:scale-125'
            style={{left: `${moveX}`, top: `${moveY}`}}></img>
    </div>
  )
}

export default FeatureDish;
