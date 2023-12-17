const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

//adding event listener to the button
get_joke.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke(){
    //call the joke API
    const jokeRes = await fetch('https://icanhazdadjoke.com/', 
    {
        headers:{
            accept: 'application/json'
        }
    })

    const joke = await jokeRes.json();
    console.log(joke);

    //set random joke
    jokeEl.innerHTML = joke.joke;
}
