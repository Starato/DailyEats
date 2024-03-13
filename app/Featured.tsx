import React from 'react';
import FeatureDish from './ui/FeatureDish/page';

// interface Recipes {
//     recipes: Recipe[]
// }

// interface Recipe {
//     id: number, title: string, image: string,
// }

export const Featured = async () => {
    // const secretKey = process.env.KEY;
    // const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${secretKey}&number=1`
    //     , {next: {revalidate: 3600}});

    //     const data: Recipes = await res.json();
    return (
        <>
            <div className='flex justify-center mt-5'>
                <h3 className='font-bold text-[75px] tracking-widest'>Featured</h3>
            </div>
            <div className='flex flex-wrap overflow-x-hidden justify-center mt-5'>
                <FeatureDish key={1} dishName='Salmon Risotto' moveX='-455px' moveY='-100px'
                    dishImage='https://i0.wp.com/aflavorjournal.com/wp-content/uploads/2022/01/Lemon-and-Pea-Risotto-with-Salmon-19.jpg?w=1000&ssl=1'/>
                
                <FeatureDish key={2} dishName='Berry Chia Smoothie' moveX='-250px' moveY='-200px'
                    dishImage='https://hips.hearstapps.com/hmg-prod/images/berry-smoothie-recipe-1657806564.png?crop=0.8xw:1xh;center,top&resize=980:*'/>

                <FeatureDish key={3} dishName='Butternut Squash Steaks' moveX='' moveY=''
                    dishImage='https://hips.hearstapps.com/hmg-prod/images/butternut-squash-steaks-lead-65ba84ad5716d.jpg?crop=1xw:1xh;center,top&resize=1200:*'/>

                <FeatureDish key={4} dishName='Low-Fat Cheesecake' moveX='' moveY='-350px'
                    dishImage='https://thebigmansworld.com/wp-content/uploads/2021/04/healthy-cheesecake5.jpeg'/>

                <FeatureDish key={5} dishName='Chicken Shawarma Bowl' moveX='' moveY='-400px'
                    dishImage='https://hips.hearstapps.com/hmg-prod/images/chicken-shawarma-bowls-lead-659dcc922af40.jpg?resize=1200:*' />
            </div>
        </>
    )
}