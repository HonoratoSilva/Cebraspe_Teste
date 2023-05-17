import React, { useState } from 'react';
import axios from 'axios';
import './NewPost.css'

const NewPost = () => {
  const [evento, setEvento] = useState({
    nomeEvento: '',
    webSite: '',
    data: '',
    numeroMaxCandidato: 1,
    endereco: {
      logradouro: '',
      bairro: '',
      cidade: '',
      complemento: '',
      numero: '',
      uf: '',
      cep: ''
    },
    imageUrl: ''
  });

  //RESTRIÇÃO DE DATAS
  const minDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 30);
    return today.toISOString().substr(0, 10);
  };

  const maxDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 365);
    return today.toISOString().substr(0, 10);
  };

  //ADIÇÃO DE INFORMAÇÕES DOS EVENTOS
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setEvento((prevEvento) => ({
      ...prevEvento,
      [name]: value,
      endereco: {
        ...prevEvento.endereco,
        [name]: value
      }
    }));
  };

  //USANDO API DE ENDEREÇO
  const enderecoAPI = (cep) => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        const enderecoData = response.data;
        setEvento(prevEvento => ({
          ...prevEvento,
          endereco: {
            ...prevEvento.endereco,
            logradouro: enderecoData.logradouro,
            bairro: enderecoData.bairro,
            cidade: enderecoData.localidade,
            uf: enderecoData.uf
          }
        }));
      })
      .catch(error => {
        console.error('Erro ao buscar o endereço:', error);
      });
  };

  //CHECA SE CEP TEM 8 DIGITOS
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      enderecoAPI(cep)
    }
  }

  //POST PARA A API
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://extranet.cebraspe.org.br/AvaliacaoCSA/BackEnd/', evento)
      .then(response => {
        console.log('Formulário enviado com sucesso:', response.data);
      })
      .catch(err => {
        console.error('Erro ao enviar o formulário:', err);
      });
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Evento</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>
            Nome do Evento:
          </label>
          <input
            type="text"
            name="nomeEvento"
            value={evento.nomeEvento}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control">
          <label>
            Website:
          </label>
          <input
            type="text"
            name="webSite"
            value={evento.webSite}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control">
          <label>
            Data:
          </label>
          <input
            type="date"
            name="data"
            min={minDate()}
            max={maxDate()}
            value={evento.data}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-control">
          <label>
            Número Máximo de Candidatos:
          </label>
          <input
            type="number"
            name="numeroMaxCandidato"
            min={1}
            max={450}
            value={evento.numeroMaxCandidato}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <h3>
            Endereço
          </h3>

          <label>
            CEP:
          </label>
          <input
            type="text"
            name="cep"
            onBlur={checkCEP}
            value={evento.endereco.cep}
            onChange={handleInputChange}
            required
          />

          <label>
            Estado:
          </label>
          <input
            type="text"
            name="uf"
            value={evento.endereco.uf}
            onChange={handleInputChange}
            readOnly
            required
          />

          <label>
            Logradouro:
          </label>
          <input
            type="text"
            name="logradouro"
            value={evento.endereco.logradouro}
            onChange={handleInputChange}
            readOnly
            required
          />

          <label>
            Bairro:
          </label>
          <input
            type="text"
            name="bairro"
            value={evento.endereco.bairro}
            onChange={handleInputChange}
            readOnly
            required
          />

          <label>
            Cidade:
          </label>
          <input
            type="text"
            name="cidade"
            value={evento.endereco.cidade}
            onChange={handleInputChange}
            readOnly
            required
          />

          <label>
            Complemento:
          </label>
          <input
            type="text"
            name="complemento"
            value={evento.endereco.complemento}
            onChange={handleInputChange}
          />

          <label>
            Número:
          </label>
          <input
            type="text"
            name="numero"
            value={evento.endereco.numero}
            onChange={handleInputChange}
          />

          <label>
            Imagem URL:
          </label>
          <input
            type="text"
            name="imageUrl"
            value={evento.endereco.imageUrl}
            onChange={handleInputChange}
          />
          
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default NewPost