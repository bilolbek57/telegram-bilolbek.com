const container = document.querySelector(".container")
const inputControl = document.querySelector(".input__control")
const input = document.querySelector(".input__control input")
const menu = document.querySelector("#menu")
const closeBtn = document.querySelector("#close")
const sideModal = document.querySelector(".side__modal")
const anotherMessage = [
    "salom",
    "nma gap",
    "nma qivosi",
    "qaydasiz",
    "hmmm",
    "yoqqq",
    "😁😊😊😉",
    "👌"
]
// o'zimiz yozgan xabarni yaratish
inputControl.addEventListener("submit", (e)=>{
    e.preventDefault()
    let value = input.value
    if(value.trim() === ""){
        return 
    }
    let div = document.createElement("div")

    div.classList.add("msg")
    div.className = "msg another"

let date = new Date() 

   div.innerHTML = ` <div class="msg_item">
                     <p>${value}</p>
                    <span>${date.getHours()}:${date.getMinutes()}</span>
                    </div>`
    
    container.appendChild(div)
    input.value = ""
 setTimeout(()=>{
     partnerMsg()    
},3000)
})
// sherikni 
function partnerMsg() {
    let div = document.createElement("div")
    div.className = "msg"
    let date = new Date() 

   div.innerHTML = `
                <img src="./photo_2022-11-28_10-36-15.jpg" alt="">
                <div class="msg_item">
                     <p>${randomMsg()}</p>
                    <span>${date.getHours()}:${date.getMinutes()}</span>
                    </div>`
    
    container.appendChild(div)
}


// Tasodifiy xafar yaratib beradi
function randomMsg() {
    return anotherMessage[ Math.floor(Math.random()* anotherMessage.length)]
}

// saidbarni chiqarish uchun
menu.addEventListener("click", ()=>{
    console.log("open");
    sideModal.classList.add("side__show")
})

// sainbarni yopish ishun
closeBtn.addEventListener("click", ()=>{
    console.log("close");
    sideModal.classList.remove("side__show")
})

