export const apiURL = 'https://swapi.dev/api/people/'

export default function getCharacters(currentPageUrl) {
  return fetch(currentPageUrl)
    .then((res) => res.json())
    .then((data) => {
      return data
    })
}
