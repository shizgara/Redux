import {createStore} from "redux";
import index from "./index.css"

/*Створили редюсер, який приймає state і дію, яку потрібно зробити з даним state. Кожен action має свій тип(type).В залежності від type вибирається той чи інший case  */
const reducer = (state=0, action)=>{
  console.log("reducer works")
  switch(action.type){
    case "PLUS" : return state + 1;
    case "MINUS" : return state - 1;
    case "PLUS2" : return state + 2;
    case "MINUS2" : return state - 2;
    case "MNOG" : return state * 2;
    case "DILENNYA" : return state / 2;
    default : return state;
  }
}

/*Редюсер для зміни background */
const reducerTheme = (state="", action)=>{
  console.log("reducerTheme works")
  switch(action.type){
    case "GREY" : return 'gray';
    default : return "white"
  }
}

const store = createStore(reducer);//створили store і помістили в нього reducer
const storetheme = createStore(reducerTheme);//створили store і помістили в нього reducerTheme

/*При кліку на елемент з id = "plus, анонімна функція звертається до store а метод dispatch відловлює тип action і передає в редюсер для оброки */
document.getElementById("plus").addEventListener("click",()=>{
  store.dispatch({type: "PLUS"})
})

document.getElementById("minus").addEventListener("click",()=>{
store.dispatch({type: "MINUS"})
})

document.getElementById("plus2").addEventListener("click",()=>{
store.dispatch({type: "PLUS2"})
})
document.getElementById("minus2").addEventListener("click",()=>{
store.dispatch({type: "MINUS2"})
})
document.getElementById("mnog").addEventListener("click",()=>{
store.dispatch({type: "MNOG"})
})
document.getElementById("dilennya").addEventListener("click",()=>{
store.dispatch({type: "DILENNYA"})
})

/*подія для зміни background */
document.getElementById("theme").addEventListener("click",()=>{
  storetheme.dispatch({type: "GREY"})
  // console.log("worksss")
})

/*Функція я виводить в елемент на сторніці по його ід дані зі state */
const update=()=>{
  // console.log("state==>>", store.getState())
  document.getElementById("counter").innerHTML = store.getState();
}

const theme = ()=>{
 document.getElementById("test").classList.toggle(storetheme.getState())
}

store.subscribe(update);//Даний метод subscribe, буде викликати метод update коли буде відбуватись зміна в state
storetheme.subscribe(theme);//Даний метод subscribe, буде викликати метод theme коли буде відбуватись зміна в state
