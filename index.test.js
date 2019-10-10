const LieLiu = require('./index')

const lieLiu = new LieLiu()

// const signKey = lieLiu.getSignKey('/ll/task', Date.now())
// console.log(signKey)

// lieLiu.getSysTimestamp().then(res => console.log(res))

// lieLiu.addTask().then(res => console.log(res))

lieLiu.tbLikeTask().then(res => console.log(res))
