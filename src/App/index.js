import { useState, useEffect } from 'react'
import './App.css'
import Modal from '../Modal'
import Header from '../Header'
import Characters from '../Characters'
import Spinner from '../Spinner'
import SorterButtons from '../SorterButtons'
import ScrollButton from '../ScrollButton'
import { API_PAGES_LIMIT } from './constants'
import { getCharacters } from '../services/getCharacters'

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [modalData, setModalData] = useState()

  useEffect(() => {
    setLoading(true)
    getCharacters(API_PAGES_LIMIT.StartPage, API_PAGES_LIMIT.EndPage).then(
      (finalArr) => {
        setCharacters(finalArr)
        setLoading(false)
      }
    )
  }, [])

  const sortByName = () => {
    const filtered = [].concat(
      characters.sort((a, b) => a.name.localeCompare(b.name))
    )
    setCharacters(filtered)
  }

  const sortByHeight = () => {
    const heightToNumber = characters.map((character) => ({
      ...character,
      height: Number(isNaN(character.height) ? 0 : character.height),
    }))
    const filtered = [].concat(
      heightToNumber.sort((a, b) => a.height - b.height)
    )
    setCharacters(filtered)
  }

  const getModalData = (name, height, hairColor, gender) => {
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
            <Characters characters={characters} getModalData={getModalData} />
          )}
          <div>
            <ScrollButton />
          </div>
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
    </>
  )
}

export default App
