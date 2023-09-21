import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento"

const useExcluirEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) => {  
    setListaDeEventos(listaAntiga => [...listaAntiga.filter(event => evento.id !== event.id)])
  }
}


export default useExcluirEvento