const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");

const apiKey = "IU2B8SWrUhd15WVL72NYdg==uy8eTIN0hk1QWuDU";

const options ={
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

 const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

 async function getJoke(){
    try{
        jokeElement.innerText = "Updating...";

        btnElement.disabled = true;
        btnElement.innerText = "Loading...";

        const response = await fetch(apiURL,options)
        const data = await response.json()
    
        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke";
        
    }catch(error){
        jokeElement.innerText = "An error happed, try again later";

        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke";
        console.log(error);
    }
   

   jokeElement.innerText = data[0].joke;
//    console.log(data[0].joke);
}
btnElement.addEventListener("click", getJoke);