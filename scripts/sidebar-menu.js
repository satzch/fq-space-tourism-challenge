const sidebarMenuButton = document.querySelector(".sidebar-menu-button")
const sidebarMenu = document.querySelector(".sidebar-menu")
const sidebarMenuItem = document.querySelectorAll(".sidebar-menu-link")

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

// console.log(sidebarMenuItem);

for(let item of sidebarMenuItem){
    item.addEventListener("mouseenter", (e) => {
        if(e.target.classList.contains("sidebar-menu-link")){
            e.target.classList.add("sidebar-menu-hover")
            // console.log(e.target);
        }
    })

    item.addEventListener("mouseleave", (e) => {
        if(e.target.classList.contains("sidebar-menu-link")){
            e.target.classList.remove("sidebar-menu-hover")
            // console.log(e.target);
        }
        
    })
}
