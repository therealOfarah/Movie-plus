import * as tokenService from './tokenServices'

const BASE_URL = `http://localhost:3001/api/profiles`


export async function getProfileDetails(profileId: string) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  console.log(res)
  return await res.json()
}
export async function deleteMovie(id:number){
  const res = await fetch(`http://localhost:3001/api/profiles/movie/${id}`, {
    method: 'DELETE', 
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}, 
  })
  const data =  await res.json()
  console.log(data)
  return data
}
export async function deleteShow(id:number){
  const res = await fetch(`http://localhost:3001/api/profiles/show/${id}`, {
    method: 'DELETE', 
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}, 
  })
  const data =  await res.json()
  console.log(data)
  return data
}