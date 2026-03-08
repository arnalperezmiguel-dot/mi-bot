const mineflayer = require('mineflayer')

function createBot1() {
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

  bot.on('end', () => setTimeout(createBot1, 5000))
  bot.on('error', () => setTimeout(createBot1, 5000))
}

function createBot2() {
  const bot = mineflayer.createBot({
    host: 'Piglin2012.aternos.me',
    port: 40624,
    username: 'funcionaporfa2',
    version: '1.21.1'
  })

  bot.on('spawn', () => {
    setInterval(() => {
      bot.activateItem()
    }, 500)
  })

  bot.on('end', () => setTimeout(createBot2, 5000))
  bot.on('error', () => setTimeout(createBot2, 5000))
}

createBot1()
createBot2()
