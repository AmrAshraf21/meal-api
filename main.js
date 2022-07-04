const get_meal_btn= document.getElementById('get_meal');
const meal_container = document.getElementById('meal');
const video = document.getElementById('video')

get_meal_btn.addEventListener('click',()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => createMeal(data.meals[0])
    )
    })
const createMeal = (meal)=>{

        const ingredients = [];
        for(let i = 1; i<=20;i++){
            if(`strIngredient${i}` && meal[`strIngredient${i}`] !==''&& meal[`strIngredient${i}`] !==null ){
                ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)

            }else{
                break;
            }

           
        }
        console.log(ingredients);
        let newInnerHTML = `
            <div class="row">
                <div class="column five">
                    <img src="${meal.strMealThumb}">
                    ${meal.strCategory ?`<p><strong>Category:</strong>${meal.strCategory}</p>` : ""}
                    ${meal.strArea ?`<p><strong>Area:</strong> ${meal.strArea}</p>` : ""}
                    ${meal.strTags ?`<p><strong>Tags:</strong> ${meal.strTags}</p>` : ""}
                   
                    <h>Ingredients: </h>
                    <ul>
                      ${ingredients.map(e => `<li>${e??""}</li>`).join('')}

                    </ul>


                </div>

            <div class="columns seven">
                <h4 class="meal-name">Meal Name: ${meal.strMeal}</h4>
                <span class="ins">Some Instruction</span>
                <p>${meal.strInstructions}</p>

            </div>
          </div>


         

          
           `
       
        
        
            
        

        

       
        meal_container.innerHTML = newInnerHTML;


}

