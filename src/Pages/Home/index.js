import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import axios from 'axios'
import './style.css'

function Home() {
  const [list, setList] = useState([])
  useEffect(() => {
    async function loadingApi() {
      try {
        const response = await api.get('/posts')
        setList(response.data)
      } catch (error) {
        console.error('Erro ao carregar posts da API:', error)
      }
    }
    loadingApi()
  }, [])

  const [name, setName] = useState('')
  console.log(name)
  async function inputPost() {
    try {
      if (!name) {
        alert('Campo vazio !!')
        return
      }
      const response = await axios.post(
        'https://json-test-kappa.vercel.app/posts',
        {
          name: name
        }
      )

      const updateList = await api.get('/posts')
      setList(updateList.data)
    } catch (error) {
      console.log('Erro na api' + error)
      const updateList = await api.get('/posts')
      setList(updateList.data)
    }
    setName('')
  }

  async function exluir(e) {
    try {
      await axios.delete(`https://json-test-kappa.vercel.app/posts/${e}`)
      alert('Post deletado')

      const response = await api.get('/posts')
      setList(response.data)
      console.log(response.data)
    } catch (error) {
      console.log('Erro na api ' + error)
      const response = await api.get('/posts')
      setList(response.data)
    }
  }

  return (
    <div className="App">
      <h1>Praticando API JSON-Server!</h1>
      <div>
        <div>
          <input
            placeholder="Digite seu post"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={inputPost}
            style={{
              margin: '10px 0',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              padding: '10px',
              width: '105px',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            Adicionar
          </button>
        </div>
      </div>

      {list.map(item => (
        <div className="cards" key={item.id}>
          <div className="name">{item.name}</div>
          <div className="post">Post...</div>
          <Link to={`/editar/${item.id}`}>
            <div className="editar">Editar</div>
          </Link>
          <div onClick={e => exluir(item.id)} className="delete">
            Excluir
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
