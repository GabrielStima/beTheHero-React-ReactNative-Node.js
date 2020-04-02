import React, {useState} from 'react';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import "./styles.css";
    
import api from '../../services/api';
export default function Register() {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [value, setValeu] = useState('');
const ongId = localStorage.getItem('ongId');
const history = useHistory();
async function handleNewIncident(e) {
  e.preventDefault();

  const data = {
    title,
    description,
    value,
  };

  try {
    await api.post('incidents', data, {
      headers:{
        Authorization: ongId
      }
    })
    alert('Cadastro feito com sucesso.')
    history.push('/profile');

  } catch (error) {
    alert('Não foi possivel cadastrar novo incidente, tenta mais tarde.')
  }
}

  return (
    <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link to="/profile" className="back-link">
                  <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para o home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titulo do caso"/>
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição"/>
                <input value={value} onChange={e => setValeu(e.target.value)} placeholder="Valor em Reais"/>
                
                <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    </div>
  );
}
