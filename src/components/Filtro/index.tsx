import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { filtroDeEventos } from '../../state/atom';
import { IFiltroDeEventos, IFiltroStatus } from '../../interfaces/IFiltroDeEventos';

const Filtro: React.FC = () => {
  
  const [data, setData] = useState('')
  const [status, setStatus] = useState<IFiltroStatus>("Ambos")
  const setFiltroDeEvento = useSetRecoilState(filtroDeEventos)
  
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    
    const filtro: IFiltroDeEventos = {
      data: null,
      dateStatus: "Ambos"
    }

    if (data) {
      filtro.data = new Date(data)
    } else {
      filtro.data = null
    }

    setFiltroDeEvento(filtro)
  }

  const opcoes = ["Completo", "Incompleto", "Ambos"]

  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtrar por data</h3>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />
      <select 
        name="status" 
        id='filtro-status'
        className={style.input} 
        onChange={(evento) => setStatus(evento.target.value as IFiltroStatus)}
      >
        {opcoes.map((opcao, index) => (
          <option key={index} value={opcao}>{opcao}</option>
        ))}
      </select>

      <button className={style.botao}>Filtrar</button>
    </form>
  )
}

export default Filtro