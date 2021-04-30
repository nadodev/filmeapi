import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './style.scss'
export default function Favoritos() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('filmes');
    setFilmes(JSON.parse(minhaLista) || []);
  }, [])
  function handleDelete(id) {
    let filtroFilmes = filmes.filter((item) => {
      return (item.id !== id)
    })
    setFilmes(filtroFilmes);
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
  }
  return (
    <>
      <h1>Favoritos</h1>
      <section className="meusFilmes">
        <table>
          {filmes.map((filme) => {
            return (
              <tbody key={filme.id}>
                <tr>
                  <th className="nome">{filme.nome}</th>
                  <th><Link to={`/filme/${filme.id}`}>Detalhes</Link></th>
                  <th><button onClick={() => handleDelete(filme.id)}>Excluir</button></th>
                </tr>
              </tbody>
            )
          })}
        </table>
      </section>

    </>
  )
}
