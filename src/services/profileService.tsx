import * as tokenService from './tokenServices'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

export async function getAllProfiles() {
  const res = await fetch(`${BASE_URL}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

export async function getProfileDetails(profileId: any) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}