import { useState, useEffect } from 'react'
import './App.css'
import Pagination from '../Pagination'
import Modal from '../Modal'
import Header from '../Header'
import Characters from '../Characters'
import Spinner from '../Spinner'
import SorterButtons from '../SorterButtons'
import { apiURL } from '../services/getCharacters'
import getCharacters from '../services/getCharacters'

function App() {
  const [characters, setCharacters] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(apiURL)
  const [nextPageUrl, setNextPageUrl] = useState(true)
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [modalData, setModalData] = useState()

  useEffect(() => {
    setLoading(true)
    getCharacters(currentPageUrl).then((data) => {
      setNextPageUrl(data.next)
      setPrevPageUrl(data.previous)
      setCharacters(data.results)
      setLoading(false)
    })
  }, [currentPageUrl])

  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  const prevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }

  const sortByName = () => {
    const filtered = [].concat(
      characters.sort((a, b) => a.name.localeCompare(b.name))
    )
    setCharacters(filtered)
  }

  const sortByHeight = () => {
    const heightToNumber = characters.map((character) => ({
      ...character,
      height: Number(character.height),
    }))
    console.log('Number', heightToNumber)
    const filtered = [].concat(
      heightToNumber.sort((a, b) => a.height - b.height)
    )
    console.log('filtered', filtered)
    setCharacters(filtered)
  }

  const getData = (name, height, hairColor, gender) => {
    setModalData({
      name: name,
      height: height,
      hairColor: hairColor,
      gender: gender,
    })
    setModal(true)
  }

  return (
    <>
      <Header title={'SwapiWars'} />

      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
      />

      <div className='App-main'>
        <div className='App-main-cards'>
          <div>
            <SorterButtons
              sortByName={sortByName}
              sortByHeight={sortByHeight}
            />
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <Characters characters={characters} getData={getData} />
          )}
        </div>
        <div className='App-main-modal'>
          {modal ? (
            <Modal
              name={modalData.name}
              height={modalData.height}
              hairColor={modalData.hairColor}
              gender={modalData.gender}
              closeModal={() => setModal(false)}
            />
          ) : (
            ''
          )}
        </div>
      </div>

      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
      />
    </>
  )
}

export default App
