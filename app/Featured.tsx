import React from 'react';
import Image from 'next/image';

interface Recipes {
    recipes: Recipe[]
}

interface Recipe {
    id: number, title: string, image: string,
}

export const Featured = async () => {
    const secretKey = process.env.KEY;
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${secretKey}&number=1`
        , {next: {revalidate: 3600}});
    
        const data: Recipes = await res.json();
        return (
            <>
                {data.recipes.map(recipe =>
                    <div key={recipe.id} className='relative w-4/5 h-48'>
                        <p className='absolute bg-slate-800 text-slate-50'>
                            {recipe.title}
                        </p>
                        <Image className='border-2 border-slate-900'
                            src={recipe.image} alt={recipe.title}
                            fill />
                    </div>
                )}
            </>
        )
}