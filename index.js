const md5 = require('md5')
const moment = require('moment')
const querystring = require('querystring')
const request = require('./utils/request')
const config = require('./config')

class LieLiu {
  constructor () {
    this.username = config.username
  }

  async getSysTimestamp () {
    const url = '/api/sys_now?format=json'
    const resp = (await request.get(url)).data
    return resp.data.time || String(Date.now()).slice(0, 10)
  }

  getSignKey (url) {
    const signm = config.secret
    const uri = `${url}&${signm}`
    const encodeUrl = querystring.escape(uri)
    console.log(encodeUrl)
    return md5(encodeUrl)
  }

  async tbLikeTask () {
    const path = '/ll/task_add'
    const timestamp = Number(await this.getSysTimestamp())

    const payload = {
      begin_time: String(moment().format('YYYY-MM-DD')),
      count: 50,
      format: 'json',
      hour: '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0',
      id: '20191010221003123459',
      itemid: '123123123',
      type: 17,
      timestamp,
      username: this.username,
      ver: 5
    }
    const url = `${path}?begin_time=${payload.begin_time}&count=${payload.count}&format=${payload.format}&hour=${payload.hour}` +
                `&id=${payload.id}&itemid=${payload.itemid}&type=${payload.type}&timestamp=${payload.timestamp}&username=${payload.username}&ver=${payload.ver}`

    // const urlV2 = `${path}?${querystring.stringify(payload)}`
    const signkey = this.getSignKey(url)
    const fullPath = `${url}&signkey=${signkey}`
    const encodeFullPath = querystring.escape(fullPath)
    console.log(fullPath)
    console.log(encodeFullPath)
    // return request.get(encodeFullPath)
  }
}

module.exports = LieLiu
