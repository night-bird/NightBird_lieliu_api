const LieLiu = require('./index')

const lieLiu = new LieLiu()

// const signKey = lieLiu.getSignKey()
// console.log(signKey)

// lieLiu.getSysTimestamp().then(res => console.log(res))

lieLiu.addTask().then(res => console.log(res))
