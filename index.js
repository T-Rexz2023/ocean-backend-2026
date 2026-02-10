import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/oi', (req, res) => {
  res.send('Olá mundo!')
})

const lista = ['Rick Sanchez', 'Morty Smith', 'Beth Smith']

app.get('/personagens', (req, res) => {
  res.send(lista)
})

app.get('/personagens/:id', (req, res) => {
  const id = req.params.id
  const personagem = lista[id - 1]
  res.send(personagem)
})

app.use(express.json())

app.post('/personagens', (req, res) => {
  const novoPersonagem = req.body.nome

  lista.push(novoPersonagem)

  res.send("Novo personagem adicionado com sucesso!")
})

app.put('/personagens/:id', (req, res) => {
  const id = req.params.id
  const nomeAtualizado = req.body.nome

  lista[id - 1] = nomeAtualizado

  res.send("Personagem atualizado com sucesso!")
})

app.delete('/personagens/:id', (req, res) => {
  const ide = req.params.id
  
  lista.splice(ide - 1, 1)

  res.send("Personagem deletado com sucesso!")
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})