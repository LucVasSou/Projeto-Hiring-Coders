formjs.addEventListener('click', e => {
  e.preventDefault()

  let email = document.getElementById('preencher').value
  console.log(email)
  let data = {
    email
  }
  let convertData = JSON.stringify(data)

  localStorage.setItem('lead', convertData)
})
