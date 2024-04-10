export {displayStorage}
import { DomCreator } from "./listDOM";


function displayStorage(){
  let x = JSON.parse(localStorage.getItem('Task'))
  if (x === null){
    return
  } else if(x !== null){

 let x = JSON.parse(localStorage.getItem('Task'))
 x.forEach((e) => {
 DomCreator(e)
})
  }
}
