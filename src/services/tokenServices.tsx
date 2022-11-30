import jwtDecode from "jwt-decode";

// impoer jwtDecode
interface MyToken{
  user:string;
  exp:number;
}
function setToken(token: string) {
  localStorage.setItem('token', token)
}

function getToken() {
  let token = localStorage.getItem('token')
  if (token) {
    const payload = jwtDecode<MyToken>(token)
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token')
      token = null
    }
  } else {
    localStorage.removeItem('token')
  }
  return token
}

function getUserFromToken() {
  const token = getToken()
  return token ? jwtDecode<MyToken>(token).user : null
}

function removeToken() {
  localStorage.removeItem('token')
}

export { setToken, getToken, getUserFromToken, removeToken }