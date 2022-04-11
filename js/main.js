//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //const choice = document.querySelector('input').value
  const url = 'https://emojihub.herokuapp.com/api/random'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('name').innerText = data.name[0].toUpperCase() + data.name.substring(1)
        document.getElementById('category').innerText = data.category[0].toUpperCase() + data.category.substring(1)
        document.querySelector('h3').innerHTML = data.htmlCode[0]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}