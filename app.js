// body
var bodyvar = document.body

// FOUR BUTTONS
var consumptionvar = document.getElementById("consumption")
console.log("consumptionvar", consumptionvar); 

var Resourcesvar = document.getElementById("resources")
console.log("Resourcesvar", Resourcesvar);

var Peoplevar = document.getElementById("people")
console.log("Peoplevar" ,Peoplevar);

var climate = document.getElementById("climate")
console.log("climate" ,climate);

// save text 
var savetext = document.getElementById("save")

var iframe = document.getElementById("frame")

consumptionvar.onclick=()=>{ 
    // bg color 
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"

    // iframes
    iframe.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    // text
    savetext.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."

    // button color
    consumptionvar.style.background="#27AE60"
    Resourcesvar.style.background="none"
    climate.style.background="none"
    Peoplevar.style.background="none"
}

Resourcesvar.onclick=()=>{ 
    // bg color 
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"

    // iframes
    iframe.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    // text
    savetext.innerHTML=" Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"

    // button color
    Resourcesvar.style.background="#F2994A"
    climate.style.background="none"
    consumptionvar.style.background="none"
    Peoplevar.style.background="none"
}

Peoplevar.onclick=()=>{ 
    // bg color 
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"

    // iframes
    iframe.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    // text
    savetext.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."

    // button color
    Peoplevar.style.background="#EB5757"
    Resourcesvar.style.background="none"
    climate.style.background="none"
    consumptionvar.style.background="none"

}

climate.onclick=()=>{ 
    // bg color 
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"

    // iframes
    iframe.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    // text
    savetext.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"

    // button color
    climate.style.background="#2F80ED"
    Resourcesvar.style.background="none"
    consumptionvar.style.background="none"
    Peoplevar.style.background="none"
}