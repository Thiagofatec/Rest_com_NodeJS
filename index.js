const express = require('express')

const app = express()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))

app.get('/', (req,res) => res.send('Server rodando :D') )
app.get('/atendimentos', (req,res) => res.send('Você está na rota de atendimentos e está realizando um get') )