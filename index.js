const main = document.querySelector('#main')
const paragraph = document.querySelector('p')
const input=document.queryselector('input')

main.addEventListener('click', (event) =>
  {   alert('Hey you clicked me')
    
  }
  )

input.addEventListener('keydown', (event) =>
{ if (event.which===71)
    event.preventDefault()
}
console.log(event))

paragraph.addEventListener('click', (event) => 
{ 
    alert ('You clicked a p')
    paragraph.style.backgroundColor="Yellow"
})

let div = document.querySelectorAll('div')

function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
for (div of divs){
   div. addEventListener('click',bubble, true)
}

