export type IFiltroStatus = "Completos" | "Incompletos" | "Ambos" 

export interface IFiltroDeEventos {
  data?: Date | null,
  dateStatus: IFiltroStatus
}