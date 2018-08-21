const main = document.querySelector('#main')
const paragraph = document.querySelector('p')
const inpur=document.selector('input')

main.addEventListener('click', (event) =>
  {   alert('Hey you clicked me')
    
  }
  )

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

