import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import api from '../../services/api'
import './style.scss'
export default function Filme() {
  const { id } = useParams();
  const history = useHistory();
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFimes = async () => {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      if (response.data.length === 0) {
        history.replace('/');
        return;
      }
      setFilmes(response.data);
      setLoading(false);
    }
    loadFimes();
    return () => {
      /* server para desmontar o useEffect ao mudar de pagina */
    }
  }, [history, id]);

  if (loading) {
    return (
      <div className="carregando">
        <h1>Aguarde um momento, seu filme está carregando!!</h1>
      </div>
    )
  }
  return (
    <section className="details-movies">

      <h2>{filmes.nome}</h2>
      <div className="voltar"><Link to="/"><i class="fas fa-arrow-left"></i> Voltar</Link></div>
      <img src={filmes.foto} alt={filmes.nome} />
      <h4>Sinopse</h4>
      <p>{filmes.sinopse}</p>
      <div className="buttons">
        <button>Add aos Favoritos</button>
        <button>
          <a target="blank" href={`https://youtube.com/results?search_query=${filmes.nome} Trailer`}>
            Trailler
          </a>
        </button>
      </div>
    </section>
  )
}
