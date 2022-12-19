import * as tokenService from "./tokenServices";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`;

export async function getProfileDetails(profileId: string) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  });
  return await res.json();
}
export async function deleteMovie(id: number) {
  const res = await fetch(`${BASE_URL}/movie/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  });
  const data = await res.json();
  return data;
}
export async function deleteShow(id: number) {
  const res = await fetch(`${BASE_URL}/show/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  });
  const data = await res.json();
  return data;
}
