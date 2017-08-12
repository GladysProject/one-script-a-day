// Want a random cocktail ? Ask the right API for that !
// Check https://forum.kodi.tv/showthread.php?tid=235298&pid=2079513#pid2079513 for more informations
gladys.utils.request('http://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((result) => {
        var cocktail = result.drinks[0];
        console.log(`Today, we are going to drink a ${cocktail.strDrink}. It's a ${cocktail.strCategory} !`);
        console.log(`Ingredients are : 
            ${cocktail.strIngredient1}, 
            ${cocktail.strIngredient2}, 
            ${cocktail.strIngredient3}
        `);
    });