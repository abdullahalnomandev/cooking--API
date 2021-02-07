
const inputBox = document.getElementById("inputValue");
const button = document.getElementById("btn");

button.addEventListener("click", () => {

    if (inputBox.value == "") {

        alert("Please search at least one meal ! ");
        document.getElementById("homeDetails").style.display = "none";
    }
    else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputBox.value}`)

            .then(response => response.json())
            .then(data => mealInfo(data.meals))

            .catch(error => alert("Meals not found. Plese search a different meal name !"))
        document.getElementById("homeDetails").style.display = "none";

    }

})

const mealInfo = mealDetailsInfo => {

    document.getElementById("detailsInfo").innerText = "";

    document.getElementById("mealIngredientDetails").innerText = "";

    mealDetailsInfo.forEach(name => {

        const detailsInfo = document.getElementById("detailsInfo");

        const newCreateDiv = document.createElement("div");

        newCreateDiv.className = "mealDetailsWiper";

        const mealDetails = `
        <div onclick="getIngredient ('${name.strMeal}')" class="singleItem">

         <img src="${name.strMealThumb}" class="card-img-top" alt="...">
        <p id="paragraph">${name.strMeal}</p>
         </div>
        `;
        detailsInfo.appendChild(newCreateDiv);

        newCreateDiv.innerHTML = mealDetails;

        inputBox.value = "";

    });

}

//  meal Ingredient

const getIngredient = details => {


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`)

        .then(response => response.json())
        .then(data => ingredientDetails(data.meals[0]))
}

const ingredientDetails = (ingredient) => {

    const mealIngredientDetails = document.getElementById("mealIngredientDetails");


    extraInformation = `
            <img src="${ingredient.strMealThumb}">
            <h3> ${ingredient.strMeal}</h3>
           <h5>Ingredient : </h5>
           <p> <i class="far fa-arrow-alt-circle-right"></i>    ${ingredient.strIngredient1}<p>
           <p><i class="far fa-arrow-alt-circle-right"></i>     ${ingredient.strIngredient2}<p>
           <p><i class="far fa-arrow-alt-circle-right"></i>     ${ingredient.strIngredient3}<p>
           <p><i class="far fa-arrow-alt-circle-right"></i>     ${ingredient.strIngredient4}<p>
           <p><i class="far fa-arrow-alt-circle-right"></i>     ${ingredient.strIngredient5}<p>
           <p><i class="far fa-arrow-alt-circle-right"></i>     ${ingredient.strIngredient6}<p>
        `;
    mealIngredientDetails.innerHTML = extraInformation;
    console.log(ingredient)
}

