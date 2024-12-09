async function getUsers(){
  const resposta = await fetch('https://randomuser.me/api/?results=1')

  const users = await resposta.json()

  console.log(users.results)
}
getUsers()