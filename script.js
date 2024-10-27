const button = document.getElementById('btn')
const input = document.getElementById('inputnew')
const image = document.getElementById('image')

const length = 12
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const symbol = '!@#$%^&*()\[]/'
const num = "1234567890"
const all = lowercase + uppercase + symbol + num



button.addEventListener('click',function(){
    let password = ""
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += symbol[Math.floor(Math.random()*symbol.length)]
    password += num[Math.floor(Math.random()*num.length)]

    while (length > password.length) {
         password += all[Math.floor(Math.random()*all.length)]
     }
    input.value = password;
    
})

image.addEventListener('click',function(){
    input.select();
    document.getSelection("copy")
})