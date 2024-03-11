import React from 'react';
import Image from 'next/image';

interface Recipes {
    recipes: Recipe[]
}

interface Recipe {
    id: number, title: string, image: string
}

export const Explore = async () => {
    const secretKey = process.env.KEY;
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${secretKey}&number=5`
        , {next: {revalidate: 3600}});
        
    const data: Recipes = await res.json();
    return (
        <>
            {data.recipes.map(recipe => 
                <div key={recipe.id}>
                    <p>{recipe.title}</p>
                    <Image src={recipe.image} alt={recipe.title}
                        height={100} width={100}/>
                </div>
            )}
        </>
    )
}