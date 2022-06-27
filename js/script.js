
let whoArePage = document.getElementById("whoAmI");
let whoWannaPage = document.getElementById("whoBecome");
let hobbiesPage = document.getElementById("hobbies");

    
let firstBtn = document.getElementById("buttonOne");
let secBtn = document.getElementById("buttonTwo");
let thirdBtn = document.getElementById("buttonThree");


firstBtn.addEventListener("click", () => { 
	changePage(1)
})

secBtn.addEventListener("click", () => {
	changePage(2)
})
thirdBtn.addEventListener("click", () => {
	changePage(3)
})

function changePage(pageNumber) {
    if (pageNumber == 1) {
    	whoArePage.style.display = "block";
      	whoWannaPage.style.display = "none";
      	hobbiesPage.style.display = "none";
		
      	
    } else if (pageNumber == 2) {
        whoArePage.style.display = "none";
        whoWannaPage.style.display = "block";
        hobbiesPage.style.display = "none";
		  	
    } else if (pageNumber == 3) {
        whoArePage.style.display = "none";
        whoWannaPage.style.display = "none";
        hobbiesPage.style.display = "block";
	
    }

}

