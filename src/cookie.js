function getCookie(cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i += 1) {
    var c = ca[i].trim()
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
  }
  return ''
}

function deletCookie(cname) {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}

export {
  getCookie,
  deletCookie
}
