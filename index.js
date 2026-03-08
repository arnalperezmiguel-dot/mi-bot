const mineflayer = require('mineflayer')

function createBot1() {
  const bot = mineflayer.createBot({
    host: 'Piglin2012.aternos.me',
    port: 40624,
    username: 'BotSaltador123',
    version: '1.21.1'
  })

  bot.on('spawn', () => {
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 150)
    }, 20000)
  })

  bot.on('end', () => setTimeout(createBot1, 5000))
  bot.on('error', () => setTimeout(createBot1, 5000))
}

function createBot2() {
  const bot = mineflayer.createBot({
    host: 'Piglin2012.aternos.me',
    port: 40624,
    username: 'BotClicker456',
    version: '1.21.1'
  })

  bot.on('spawn', () => {
    setInterval(async () => {
      const bed = bot.findBlock({
        matching: block => bot.isABed(block),
        maxDistance: 5
      })
      if (bed) {
        await bot.lookAt(bed.position.offset(0.5, 0.5, 0.5))
        bot.activateBlock(bed)
      }
    }, 20000)
  })

  bot.on('end', () => setTimeout(createBot2, 5000))
  bot.on('error', () => setTimeout(createBot2, 5000))
}

createBot1()
createBot2()
