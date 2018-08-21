/*const main = document.querySelector('#main')
const paragraph = document.querySelector('p')

main.addEventListener('click', (event) =>
  {   alert('Hey you clicked me')
    
  }
  )

paragraph.addEventListener('click', (event) => 
{ 
    alert ('You clicked a p')
    paragraph.style.backgroundColor="Yellow"
})
*/
let div = document.querySelectorAll('div')

function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
