export class Protocolo {
    constructor(
      public protocolo_id: number,
      public palabras_clave: string,
      public titulo: string,
      public resumen: string,
      public documento: string,
      public status_id: number,
      public equipo_id: number,
      public academia_id: number
    ) {}
  }