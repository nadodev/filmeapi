import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './style.scss';
export default function Home() {

  const [filmes, setFimes] = useState([]);
  useEffect(() => {
    const loadFimes = async () => {
      const response = await api.get('r-api/?api=filmes')
      setFimes(response.data);
    }
    loadFimes();
  }, [])
  return (
    <main className="container">
      <section className="list-movies">
        {filmes.map((filme) => {
          return (
            <article>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </section>
    </main>
  )
}
