import * as tokenService from './tokenServices'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}api/profiles`


export async function getProfileDetails(profileId: string) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  console.log(res)
  return await res.json()
}