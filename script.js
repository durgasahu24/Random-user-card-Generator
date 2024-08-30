let details = document.querySelector('.details')
let imgConatainer = document.querySelector('.img-container')
let gerUserBtn = document.getElementById('get-user-btn')
let url = "https://random-data-api.com/api/v2/users?response_type=json";
let getUser = () => {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {

            imgConatainer.innerHTML = `<img src = ${data.avatar}>`
            details.innerHTML = `<h2>${data.first_name} ${data.last_name}</h2>
            <h3>${data.employment.title}</h3>
            <h4><i class="fa-sharp fa-solid fa-location-pin"></i>${data.address.city}</h4>
            `
            let randomColor  = 
            // '#'+((Math.random() * 0xffffff)<<0).toString(16).padStart(6,'0')
            `#${Math.random(),toString(16).slice(2,8).padEnd(6,0)}`
            
            document.documentElement.style.setProperty('--theme-color',randomColor)

    })
}
window.addEventListener('load',getUser)
gerUserBtn.addEventListener('click',getUser)

