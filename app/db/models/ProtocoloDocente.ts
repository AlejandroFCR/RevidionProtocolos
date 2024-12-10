export class ProtocoloDocente {
    constructor(
      public protocolo_id: number,
      public docente_id: string,
      public activo: boolean,
      public rol_id: number
    ) {}
  }