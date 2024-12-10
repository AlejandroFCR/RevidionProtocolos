export class Usuario {
    constructor(
      public user_id: number,
      public nombre: string,
      public apellido_paterno: string,
      public apellido_materno: string,
      public email: string,
      public telefono: string,
      public password: string
    ) {}
  }