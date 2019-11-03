const user = [
  { id: 1, name: 'Nilo', bonus: 500 },
  { id: 2, name: 'Lucas', bonus: 400 },
  { id: 3, name: 'Hugo', bonus: 300 },
  { id: 4, name: 'Thiago', bonus: 200 },
  { id: 5, name: 'Ronan', bonus: 100 },
  { id: 6, name: 'Leonardo', bonus: 90 },
  { id: 7, name: 'Bruno', bonus: 95 }
]

const bonus = user.filter(users => {
  return users.bonus <= 300
})

const usuarios = document.querySelector('user')

console.log(bonus)
