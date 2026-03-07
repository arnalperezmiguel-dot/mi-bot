const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Piglin2012.aternos.me',
    port: 40624,
    username: 'funcionaporfa',
    version: '1.21.1'
  })

  bot.on('spawn', () => {
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 150)
    }, 600)
  })

  bot.on('end', () => {
    console.log('Reconectando en 5 segundos...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', () => setTimeout(createBot, 5000))
}

createBot()

// Servidor HTTP para UptimeRobot
const http = require('http')
http.createServer((req, res) => {
  res.write('Bot activo!')
  res.end()
}).listen(3000)
