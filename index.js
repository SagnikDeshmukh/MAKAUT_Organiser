
document.getElementById("moon").addEventListener("click", () => {
    // document.body.classList.toggle("dark");
    let icon = document.getElementById("moon");
    if(document.documentElement.classList.contains("dark")){
        icon.src="../Resources/moon.svg"
        document.documentElement.classList.remove("dark")
    }
    else{
        icon.src="./Resources/sun.svg"
        document.documentElement.classList.add("dark");
    }
    // window.location.reload();
})



