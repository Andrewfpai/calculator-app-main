let theme1BG = "hsl(222, 26%, 31%)";
let theme2BG = "hsl(0, 0%, 90%)";
let theme3BG = "hsl(268, 75%, 9%)";

function theme(x){

    let theme = x

    if (theme == 1){
        console.log("Masuk 1")
        document.getElementById("main_slider").style.transform = "translateX(0px)"
        document.getElementById("container").classList.remove("theme2","theme3")
        document.getElementById("container").classList.add("theme1")
        document.body.style.backgroundColor = theme1BG
        localStorage.setItem("index", 1)
        

    }if (theme == 2){
        console.log("2")
        document.getElementById("main_slider").style.transform = "translateX(16px)"
        document.body.style.backgroundColor = theme2BG
        document.getElementById("container").classList.remove("container1", "theme3")
        document.getElementById("container").classList.add("theme2")
        localStorage.setItem("index", 2)
        
    } if (theme == 3) {
        console.log("3")
        document.getElementById("main_slider").style.transform = "translateX(32px)"
        document.body.style.backgroundColor = theme3BG
        document.getElementById("container").classList.remove("container1", "theme2")
        document.getElementById("container").classList.add("theme3")
        localStorage.setItem("index", 3)
    }
}

function onLoad(){

    let index = localStorage.getItem("index");

    if (index){
        theme(index) // set from the save data
    } else {
        localStorage.setItem("index", 1)
        theme(1) // set to default
    }
    
}


