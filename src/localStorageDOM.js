export {storage}

function storage(s){
  localStorage.setItem(`Task`, JSON.stringify(s))
}

