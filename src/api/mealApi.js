export const fetchMeals = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken");
  const data = await res.json();
  return data.meals.map(meal => ({
    id: meal.idMeal,
    name: meal.strMeal,
    description: meal.strInstructions.slice(0, 100) + "...",
    image: meal.strMealThumb,
    price: Math.floor(Math.random() * (131 - 40 + 1)) ,
    strArea :meal.strArea

  }));
};
