import React, { useEffect, useState } from 'react'
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
      <section className="list-fimes">
        {filmes.map((filme) => {
          return (
            <article>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
            </article>
          )
        })}
      </section>
    </main>
  )
}
