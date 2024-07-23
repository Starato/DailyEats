import React from 'react';
import {FeatureDish} from './ui/FeatureDish/FeatureDish';

export const Featured = async () => {
    return (
        <div className=' mx-10'>
            <div className='absolute rounded-md -translate-x-4 -translate-y-8 z-10 bg-stone-900 text-yellow-400 p-4'>
                <p className='font-bold text-3xl tracking-wide'>Featured</p>
            </div>
            <div className='flex justify-center mt-16'>
                <FeatureDish key={1} dishName='Salmon Risotto' moveX='-50px' moveY='-200px'
                    dishImage='https://i0.wp.com/aflavorjournal.com/wp-content/uploads/2022/01/Lemon-and-Pea-Risotto-with-Salmon-19.jpg?w=1000&ssl=1'/>
                
                <FeatureDish key={2} dishName='Berry Chia Smoothie' moveX='-50px' moveY='-250px'
                    dishImage='https://hips.hearstapps.com/hmg-prod/images/berry-smoothie-recipe-1657806564.png?crop=0.8xw:1xh;center,top&resize=980:*'/>

                <FeatureDish key={3} dishName='Butternut Squash Steaks' moveX='' moveY='-150px'
                    dishImage='https://hips.hearstapps.com/hmg-prod/images/butternut-squash-steaks-lead-65ba84ad5716d.jpg?crop=1xw:1xh;center,top&resize=1200:*'/>

                <FeatureDish key={4} dishName='Low-Fat Cheesecake' moveX='' moveY='-350px'
                    dishImage='https://thebigmansworld.com/wp-content/uploads/2021/04/healthy-cheesecake5.jpeg'/>

                <FeatureDish key={5} dishName='Chicken Shawarma Bowl' moveX='' moveY='-600px'
                    dishImage='https://hips.hearstapps.com/hmg-prod/images/chicken-shawarma-bowls-lead-659dcc922af40.jpg?resize=1200:*' />
            </div>
        </div>
    )
}