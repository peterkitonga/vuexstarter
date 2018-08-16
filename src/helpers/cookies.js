const get = (key) => {
  // get the payload key for querying the cookies
  let cname = key+'='
  // split document.cookie on semicolons into an array
  let cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++)
  {
    let cookie = cookies[i]
    while (cookie.charAt(0) === ' ') {
      cookie.substring(1, cookie.length)
    }
    // commit the cookie if found
    if (cookie.indexOf(cname) === 0) {
      let result = JSON.parse(unescape(cookie.substring(cname.length, cookie.length)))
      return {status: 'success', result: result}
    }
  }

  return {status: 'error', message: 'Cookie for "'+key+'" not found'}
}

const set = (key, value, duration, duration_type) => {
  // next date
  let next = ''
  // date today
  let now = new Date(Date.now())
  let durationType = duration_type

  // Check the duration type and apply the necessary addition to the date object
  if (durationType === 'seconds') {
    next = now.getSeconds() + duration
  } else if (durationType === 'minutes') {
    next = now.getMinutes() + duration
  } else if (durationType === 'hours') {
    next = now.getHours() + duration
  } else if (durationType === 'days') {
    next = now.getDate() + duration
  } else if (durationType === 'months') {
    next = now.getMonth() + duration
  } else if (durationType === 'years') {
    next = now.getFullYear() + duration
  } else {
    next = now.getDay()
  }
  // set the new date object
  now.setDate(next)
  // set the expiration date to the new date object
  let expiration = now.toString()
  // format the cookie to be saved
  let cookie = escape(key)+'='+escape(JSON.stringify(value))+';expires='+expiration+';'
  // check if the cookie exists and set the cookie
  if (document.cookie.indexOf(key+'=') >= 0)
  {
    return {status: 'error', message: 'Cookie for "'+key+'" already exists'}
  } else {
    document.cookie = cookie
    return {status: 'success', message: 'Cookie for "'+key+'" successfully set'}
  }
}

const remove = (key) => {
  let cookie = escape(key)+'=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

  if (document.cookie.indexOf(key+'=') >= 0)
  {
    document.cookie = cookie
    return {status: 'success', message: 'Cookie for "'+key+'" successfully removed'}
  } else {
    return {status: 'error', message: 'Cookie for "'+key+'" does not exist'}
  }
}

export default {
  get,
  set,
  remove
}
