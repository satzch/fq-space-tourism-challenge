const destImage = document.querySelector(".destination-image")
const destName = document.querySelector(".destination-heading")
const destDesc = document.querySelector(".destination-description")
const destDistance = document.querySelector(".destination-distance-value")
const destTravelTime = document.querySelector(".destination-traveltime-value")
const options = document.querySelector(".destination-list")

// console.log(options.children)

let prevOption, option = 0

options.addEventListener("click", (e) => {
    e.preventDefault()
    prevOption = option
    option = e.target.name ? e.target.name : prevOption
    for(let option of options.children){
        // console.log(circle);
        option.firstElementChild.classList.remove("destination-list-active")
    }
    e.target.classList.add("destination-list-active")
    // console.log(option);
    updateInfo(option)
})

let promiseData = fetch("https://raw.githubusercontent.com/satzch/fq-space-tourism-challenge/main/data.json")
    .then(response => response.json())
    .then(json => { return json })


const updateInfo = async (option) => {
    const data = await promiseData
    
    destImage.src = "." + data.destinations[option].images.png
    destName.innerText = data.destinations[option].name
    destDesc.innerText = data.destinations[option].description
    destDistance.innerText = data.destinations[option].distance
    destTravelTime.innerText = data.destinations[option].travel

    // console.log(data.destinations[option])
};

updateInfo(option)
