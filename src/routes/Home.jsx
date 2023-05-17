import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {

  const [listas, setListas] = useState([]);

  const getListas = async () => {
    try {
      const response = await axios.get(
        "https://extranet.cebraspe.org.br/AvaliacaoCSA/BackEnd/"
      );

      const data = response.data;

      setListas(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListas();
  }, []);

  return (
    <div className='home'>
        <h1>EVENTOS</h1>
        {listas.map((lista, index) => (
        <div key={index}>
          <h2>{lista.message.nomeEvento}</h2>
          <p>{lista.message.webSite}</p>
          <p>Data: {lista.message.data}</p>
          <p>Número máximo de candidato: {lista.message.numeroMaxCandidato}</p>
          <p>
            Endereço: {lista.message.endereco.logradouro}, {lista.message.endereco.bairro}, {lista.message.endereco.cidade}, {lista.message.endereco.uf}, {lista.message.endereco.cep}
          </p>
          <img src={lista.message.imageUrl} alt="Logo do evento" />
        </div>
      ))}
    </div>
  )
}

export default Home