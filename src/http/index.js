import axios from 'axios'
import {store} from '../store'
import * as TYPES from '../store/types'

const baseURL = process.env.API_URL

const headers = {
  'Content-Type': 'application/json'
}

const http = axios.create({
  baseURL,
  headers
})

http.interceptors.response.use(function (response) {
  return response
}, function (error) {
  const request = error.config

  if ((error.response && error.response.status === 401) && !request._retry)
  {
    request._retry = true

    return Http.get('auth/refresh',
      {
        headers: {
          'Authorization': store.getters[TYPES.GET_AUTH_TOKEN]
        }
      })
      .then(response => {
        let payload = response.data

        store.commit(TYPES.SET_AUTH_TOKEN, payload)
        request.headers['Authorization'] = payload.data.token_type+' '+payload.data.access_token
        // Remove and set a new cookie for the token
        // cookies.remove('token')
        // cookies.set('token', payload.data.token_type+' '+payload.data.access_token, 30, 'days')

        return axios(request)
      })
      .catch(error => {
        return Promise.reject(error.response)
      })
  }

  if (error.response && error.response.status === 403)
  {
    return Promise.reject(error.response)
  }

  return Promise.reject(error)
})

class Http extends http {}

export default Http
