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
}

createBot()
