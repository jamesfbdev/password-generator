const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById('password-one-el')
let passwordTwoEl = document.getElementById('password-two-el')


function generate() {
     passwordOneEl.textContent = ""
     passwordTwoEl.textContent = ""
    
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * 91 )
        let passwordChar = characters[randomIndex]
        passwordOneEl.textContent += passwordChar
    }
    
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * 91 )
        let passwordChar = characters[randomIndex]
        passwordTwoEl.textContent += passwordChar
    }
    
    
}
