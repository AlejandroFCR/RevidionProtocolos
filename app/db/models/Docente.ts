export class Docente {
    constructor(
      public docente_matricula: string,
      public cedula: string,
      public interno: boolean,
      public num_protocolos: number,
      public academia_id: number,
      public user_id: number
    ) {}
  }