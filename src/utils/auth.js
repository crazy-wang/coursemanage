const paramsKey = 'params'
const TokenKey = 'token'
const userKey = 'username'
const userMenus = 'userMenus'
const qlikKEY = 'qlikTicket'
const qlikTestKEY = 'qlikTestTicket'
const pId = 'PageId'
const pName = 'pageName'
const surl = 'url'
const Keyd = 'Keyd'
const butV = 'butV'
const Item = 'Item'
const over = 'over'
const qsurl = 'qsurl'
const TableAu = 'TableAu'
const qlinkTkey = 'qlinkTkey'
export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function getFilterParams() {
  return sessionStorage.getItem(paramsKey)
}

// 根据obj的value大小排序
export function sortObj(obj) {
  var arr = []
  for (var i in obj) {
    arr.push([obj[i], i])
  }
  arr.sort(function (a, b) {
    return b[0] - a[0]
  })
  var len = arr.length,
    obj = {}
  for (var i = 0; i < len; i++) {
    obj[arr[i][1]] = arr[i][0]
  }
  return obj
}

export function setFilterParams(params) {
  return sessionStorage.setItem(paramsKey, params)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function setMenus(menus) {
  return sessionStorage.setItem(userMenus, menus)
}

export function getMenus() {
  return sessionStorage.getItem(userMenus)
}

export function removeMenus() {
  return sessionStorage.removeItem(userMenus)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

export function setUsername(username) {
  return sessionStorage.setItem(userKey, username)
}

export function getUsername() {
  return sessionStorage.getItem(userKey)
}

export function setQlikTicket(qlikTicket) {
  return sessionStorage.setItem(qlikKEY, qlikTicket)
}


export function getQlikTicket() {
  return sessionStorage.getItem(qlikKEY)
}

export function setQlikTestTicket(qlikTestTicket) {
  return sessionStorage.setItem(qlikTestKEY, qlikTestTicket)
}

export function getQlikTestTicket() {
  return sessionStorage.getItem(qlikTestKEY)
}

export function setPageId(pageId) {
  return sessionStorage.setItem(pId, pageId)
}

export function getPageId() {
  return sessionStorage.getItem(pId)
}

export function setPageName(pageNamge) {
  return sessionStorage.setItem(pName, pageNamge)
}

export function getPageName() {
  return sessionStorage.getItem(pName)
}

export function setUrl(url) {
  return sessionStorage.setItem(surl, url)
}

export function getUrl() {
  return sessionStorage.getItem(surl)
}

export function setKeyword(Keyword) {
  return sessionStorage.setItem(Keyd, Keyword)
}

export function getKeyword() {
  return sessionStorage.getItem(Keyd)
}

export function setbutValue(butValue) {
  return sessionStorage.setItem(butV, butValue)
}

export function getbutValue() {
  return sessionStorage.getItem(butV)
}

export function setsearchItem(searchItem) {
  return sessionStorage.setItem(Item, searchItem)
}

export function getsearchItem() {
  return sessionStorage.getItem(Item)
}

export function setoverview(overview) {
  return sessionStorage.setItem(over, overview)
}

export function getoverview() {
  return sessionStorage.getItem(over)
}

export function randomData(num) {
  return Math.ceil(Math.random() * num)
}

export function setQsurl(qslink) {
  return sessionStorage.setItem(qsurl, qslink)
}

export function getQsurl() {
  return sessionStorage.getItem(qsurl)
}

export function setTableAuTicket(TableAuTicket) {
  return sessionStorage.setItem(TableAu, TableAuTicket)
}

export function getTableAuTicket() {
  return sessionStorage.getItem(TableAu)
}

// export function getToken() {
//   return Cookies.get(TokenKey)
// }
//
// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }
//
// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

export function setqlinkTkey(qlinkTkeynew) {
  return sessionStorage.setItem(qlinkTkey, qlinkTkeynew)
}

export function getqlinkTkey() {
  return sessionStorage.getItem(qlinkTkey)
}
