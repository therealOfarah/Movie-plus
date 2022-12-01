import * as tokenService from './tokenServices'
// import { addPhoto as addProfilePhoto } from './profileService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}api/auth`

async function signup(user: { name: string; email: string; password: string; passwordConf: string }) {
  console.log(user)
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    const json = await res.json()
    if (json.err) {
      throw new Error(json.err)
    } else if (json.token) {
      tokenService.setToken(json.token)
    }
  } catch (err) {
    throw err
  }
}

function getUser() {
  return tokenService.getUserFromToken()
}

function logout(){
  // console.log("omarrr")
  tokenService.removeToken()
}

async function login(credentials: { email: string; pw: string }) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    const json = await res.json()
    if (json.token) {
      tokenService.setToken(json.token)
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err
  }
}

async function changePassword(credentials: any) {
  try {
    const res = await fetch(`${BASE_URL}/changePassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(credentials),
    })
    const json = await res.json()
    if (json.token) {
      tokenService.removeToken()
      tokenService.setToken(json.token)
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err
  }
}

export { signup, getUser, logout, login, changePassword }