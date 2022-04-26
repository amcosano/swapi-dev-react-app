import { useState, useEffect } from 'react'
import './App.css'
import Pagination from './Pagination'
import Modal from './Modal'
import Header from './Header'
import Footer from './Footer'
import Characters from './Characters'
import Spinner from './Spinner'
import SorterButtons from './SorterButtons'

const apiURL = 'https://swapi.dev/api/people/'

function App() {
  const [characters, setCharacters] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(apiURL)
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [modalData, setModalData] = useState()

  useEffect(() => {
    setLoading(true)
    fetch(currentPageUrl)
      .then((res) => res.json())
      .then((data) => {
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
      <Header title={'Star Wars'} />

      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
      />
      <SorterButtons sortByName={sortByName} sortByHeight={sortByHeight} />
      <div className='App-content'>
        {loading ? (
          <Spinner />
        ) : (
          <Characters characters={characters} getData={getData} />
        )}

        {/* <Characters characters={characters} getData={getData} /> */}

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
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
      />

      <Footer />
    </>
  )
}

export default App
