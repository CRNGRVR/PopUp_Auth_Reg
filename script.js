"use strict"


let users = {
    "admin": {
        "login": "admin",
        "password": "12341234",
        "name": "Админ"
    }
}

let currentUser = {}

//  Для замены
let Auth_reg = document.querySelector(".wrapper")
let Content = document.querySelector(".content")

let text = document.querySelector(".text")

//  Текстовые поля авторизации
let auth_login = document.querySelector("#auth_login")
let auth_password = document.querySelector("#auth_password")

//  Текстовые поля регистрации
let reg_name = document.querySelector("#reg_name")
let reg_login = document.querySelector("#reg_login")
let reg_password = document.querySelector("#reg_password")



//  Назначение функций
let auth_button = document.querySelector(".auth_submit")
let reg_button = document.querySelector(".reg_submit")

auth_button.addEventListener("click", auth_click)
reg_button.addEventListener("click", reg_click)



function auth_click(){

    let login = auth_login.value
    let password = auth_password.value

    for (const key in users) {
        
        if(login == users[key]["login"] && password == users[key]["password"]){

            succes_login()
            currentUser = users[login]
            text.innerHTML = `Привет, ${currentUser["name"]}!`
            break
        }
    }
}

function reg_click(){

    let login = reg_login.value
    let password = reg_password.value
    let name = reg_name.value

    let f = false

    for (const key in users) {
        
        if(users[key]["login"] == login){
            alert("Логин уже занят.")
            reg_login.value = ""
            f = true
            return
        }
    }

    if(f != true){
        users[login] = {
            "login": login,
            "password": password,
            "name": name
        }

        currentUser = users[login]
        succes_login()

        alert("Регистрация успешна.")
        
        text.innerHTML = `Добро пожалоавть, ${currentUser["name"]}!`
    }
}

//  Успешный вход
function succes_login(){

    Auth_reg.style.display = "none"
    Content.style.display = "block"
    clear()
}


function clear(){
    auth_login.value = ""
    auth_password.value = ""

    reg_name.value = ""
    reg_login.value = ""
    reg_password.value = ""
}


//  --------- Экран пользователя ---------
let person_button = document.querySelector(".person")
let logout_button = document.querySelector(".logout")

logout_button.addEventListener("click", logout)

function logout(){
    
    Content.style.display = "none"
    Auth_reg.style.display = "block"
    currentUser = {}
}