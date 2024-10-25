const contentJoke = document.querySelector('.joke')
const randombtn = document.querySelector('.random-btn')
const urlApi = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

let genratjoke = () => {
    contentJoke.classList.remove('fade')
    fetch(urlApi)
        .then(data => data.json())
        .then(item => {
            contentJoke.textContent = `${item.joke}`
            contentJoke.classList.add('fade')
        })
}        


randombtn.addEventListener('click', genratjoke)
genratjoke()