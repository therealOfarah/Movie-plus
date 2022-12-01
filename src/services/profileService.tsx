import * as tokenService from './tokenServices'

const BASE_URL = `http://localhost:3001/api/profiles`


export async function getProfileDetails(profileId: string) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  console.log(res)
  return await res.json()
}