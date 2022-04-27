const apiURL = 'https://swapi.dev/api/people/?page='

async function getPage(page) {
  let response = await fetch(`${apiURL}${page}`)
  let data = await response.json()
  return data
}

export async function getCharacters(startPage, endPage) {
  let currentPage = startPage
  let finalArr = []
  while (currentPage <= endPage) {
    const pageData = await getPage(currentPage)
    finalArr.push(...pageData.results)
    currentPage++
  }
  return finalArr
}
