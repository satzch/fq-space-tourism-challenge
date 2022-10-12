const sidebarMenuButton = document.querySelector(".sidebar-menu-button")
const sidebarMenu = document.querySelector(".sidebar-menu")

let sidebarOpen = false

sidebarMenuButton.addEventListener("click", (e)=>{
    e.preventDefault()

    sidebarOpen = !sidebarOpen

    sidebarMenu.classList.toggle("hidden")
    if(sidebarOpen){
        sidebarMenuButton.firstChild.src = "./assets/home/cross-icon.svg"
    }else{
        sidebarMenuButton.firstChild.src = "./assets/home/hamburger-icon.svg"
    }
})