const md5 = require('md5')
const moment = require('moment')
const request = require('./utils/request')
const config = require('./config')

class LieLiu {
  constructor () {
    this.username = config.usernmae
  }

  async getSysTimestamp () {
    const url = '/api/sys_now?format=json'
    const resp = (await request.get(url)).data
    return resp.data.time || String(Date.now()).slice(0, 10)
  }

  getSignKey (timestamp) {
    const signm = config.secret
    const url = encodeURI(`/api/method?a=1&b=2&c=3&timestamp=${timestamp}&username=${this.username}&ver=5&signm=${signm}`)
    return md5(url)
  }

  async addTask () {
    const path = '/ll/task_add'
    const timestamp = (await this.getSysTimestamp())

    const username = this.username
    const beginTime = String(moment().format('YYYY-MM-DD'))
    const category = ''
    const count = 100
    const fav = 2160
    const goodsAttention = 30
    const goodsBrowsingTime = 30
    const hour = '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0'
    const id = 1552287074314
    const keyword = ''
    const liveid = ''
    const page = '1-10'
    const priceMax = 0
    const priceMin = 0
    const ri = 0
    const sUrl = ''
    const shop = ''
    const shopVisit = ''
    const shopVisitCount = 0
    const shopVisitTime = 30
    const target = 'https://detail.tmall.com/item.htm?spm=a21wu.241046-hk.9629632455.5.41cab6cboj1XEp&id=582913856495&scm=1007.22963.122686.0'
    const targetid = ''
    const type = 0
    const userid = ''
    const ver = 5
    const signm = this.getSignKey(timestamp)

    const url = `${path}/begin_time=${beginTime}&category=${category}&count=${count}&fav=${fav}&goodsAttention=${goodsAttention}&goodsBrowsingTime=${goodsBrowsingTime}` +
                `&hour=${hour}&id=${id}&keyword=${keyword}&liveid=${liveid}&page=${page}&price_max=${priceMax}&price_min=${priceMin}&ri=${ri}&sUrl=${sUrl}&shop=${shop}` +
                `&shopVisit=${shopVisit}&shopVisitCount=${shopVisitCount}&shopVisitTime=${shopVisitTime}&target=${target}&targetid=${targetid}&type=${type}&userid=${userid}` +
                `&username=${username}&ver=${ver}&signm=${signm}`
    return request.get(url)
  }
}

module.exports = LieLiu
