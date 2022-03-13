const BASE_URL = "https://swapi.dev/api/";

export function getAllPilots() {
  return fetch(`${BASE_URL}pilots`, { mode: "cors" }).then((res) => res.json());
}
