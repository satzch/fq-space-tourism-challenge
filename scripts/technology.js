const technologyImage = document.querySelector(".technology-image")
const technologyName = document.querySelector(".technology-heading")
const technologyDesc = document.querySelector(".technology-desc")
const technology = document.querySelector(".technology-subheading")
const circles = document.querySelector(".technology-list-circles")

// console.log(circles.children)

let prevOption, option = 0

circles.addEventListener("click", (e) => {
    e.preventDefault()
    prevOption = option
    option = e.target.getAttribute("value") ? e.target.getAttribute("value") : prevOption
    if (e.target.classList.contains("circle")) {
        for (let circle of circles.children) {
            // console.log(circle);
            circle.firstElementChild.classList.remove("active-circle")
        }
        e.target.classList.add("active-circle")
    }

    // console.log(e.target);
    // console.log(e.target.getAttribute("value"));
    updateInfo(option)
})

let promiseData = fetch("https://raw.githubusercontent.com/satzch/fq-space-tourism-challenge/main/data.json")
    .then(response => response.json())
    .then(json => { return json })


const updateInfo = async (option) => {
    const data = await promiseData
    // console.log(data);

    technologyImage.src = data.technology[option].images.landscape
    if(window.innerWidth > 1280){
        technologyImage.src = data.technology[option].images.portrait
    }
    technologyName.innerText = data.technology[option].name
    technologyDesc.innerText = data.technology[option].description

    // console.log(data.crew[option])
};


const updateImage = async (option) => {
    const data = await promiseData
    
    technologyImage.src = data.technology[option].images.landscape
    if(window.innerWidth > 1280){
        console.log(window.innerWidth);
        technologyImage.src = data.technology[option].images.portrait
    }
}

updateInfo(option)

window.addEventListener("resize", (e) => {
    updateImage(option)
})