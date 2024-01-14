import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import axios from 'axios'

export default function Editar() {
  const { id } = useParams()
  const [editar, setEditar] = useState()
  const [dados, setDados] = useState([])
  console.log(editar)
  useEffect(() => {
    async function loadingApi() {
      try {
        const response = await api.get(`/posts/${id}`)
        setDados(response.data)
      } catch (error) {}
    }
    loadingApi()
  }, [])

  async function atualizar() {
    try {
      const response = await axios.put(
        `https://json-test-kappa.vercel.app/posts/${id}`,
        {
          id: dados.id,
          name: editar
        }
      )
    } catch (error) {
      console.log('Erro na Api ' + error)
      alert('Name alterado !!')
      window.location.href = '/'
    }

    return (
      <div>
        <h1>Editar {id}</h1>
        <div>
          <div>Nome</div>
          <input
            onChange={e => setEditar(e.target.value)}
            placeholder="Descrição post"
          ></input>
          <button onClick={atualizar}>Atualizar</button>
        </div>
      </div>
    )
  }
}
