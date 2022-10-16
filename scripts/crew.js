const crewImage = document.querySelector(".crew-image")
const crewName = document.querySelector(".crew-heading")
const crewBio = document.querySelector(".crew-bio")
const crewRole = document.querySelector(".crew-subheading")
const circles = document.querySelector(".crew-list-circles")

// console.log(circles.children)

let prevOption, option = 0

circles.addEventListener("click", (e) => {
    e.preventDefault()
    prevOption = option
    option = e.target.getAttribute("value") ? e.target.getAttribute("value") : prevOption
    if (e.target != circles) {
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

    crewImage.src = data.crew[option].images.png
    crewImage.setAttribute("alt", `Picture of ${data.crew[option].name}`)
    crewName.innerText = data.crew[option].name
    crewBio.innerText = data.crew[option].bio
    crewBio.style.width = `${data.crew[option].biowidth}`
    crewRole.innerText = data.crew[option].role

    // console.log(data.crew[option])
};

updateInfo(option)