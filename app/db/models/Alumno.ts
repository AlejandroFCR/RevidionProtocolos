  import sql, { ConnectionPool } from 'mssql';
  import { db_session } from '../db';
  
  export class Alumno {
    alumno_matricula: string;
    generacion: string;
    promedio: number;
    semestre: number;
    porcentaje_acreditado: number;
    carrera_id: number;
    user_id: number;
  
    constructor(
      alumno_matricula: string,
      generacion: string,
      promedio: number,
      semestre: number,
      porcentaje_acreditado: number,
      carrera_id: number,
      user_id: number
    ) {
      this.alumno_matricula = alumno_matricula;
      this.generacion = generacion;
      this.promedio = promedio;
      this.semestre = semestre;
      this.porcentaje_acreditado = porcentaje_acreditado;
      this.carrera_id = carrera_id;
      this.user_id = user_id;
    }
  
    // Método para guardar un alumno en la base de datos
    async guardar(): Promise<void> {
      try {
        const pool: ConnectionPool = await db_session();
        await pool
          .request()
          .input('alumno_matricula', sql.VarChar, this.alumno_matricula)
          .input('generacion', sql.VarChar, this.generacion)
          .input('promedio', sql.Float, this.promedio)
          .input('semestre', sql.Int, this.semestre)
          .input('porcentaje_acreditado', sql.Float, this.porcentaje_acreditado)
          .input('carrera_id', sql.Int, this.carrera_id)
          .input('user_id', sql.Int, this.user_id)
          .query(`
            INSERT INTO Alumno (alumno_matricula, generacion, promedio, semestre, porcentaje_acreditado, carrera_id, user_id)
            VALUES (@alumno_matricula, @generacion, @promedio, @semestre, @porcentaje_acreditado, @carrera_id, @user_id)
          `);
        console.log('Alumno guardado exitosamente');
      } catch (err) {
        console.error('Error al guardar el alumno:', err);
        throw err;
      }
    }
  
    // Método para buscar un alumno por matrícula
    static async buscarPorMatricula(matricula: string): Promise<Alumno | null> {
      try {
        const pool: ConnectionPool = await db_session();
        const result = await pool
          .request()
          .input('matricula', sql.VarChar, matricula)
          .query(`
            SELECT * FROM Alumno WHERE alumno_matricula = @matricula
          `);
  
        if (result.recordset.length > 0) {
          const row = result.recordset[0];
          return new Alumno(
            row.alumno_matricula,
            row.generacion,
            row.promedio,
            row.semestre,
            row.porcentaje_acreditado,
            row.carrera_id,
            row.user_id
          );
        }
  
        console.log('Alumno no encontrado');
        return null;
      } catch (err) {
        console.error('Error al buscar el alumno:', err);
        throw err;
      }
    }
  }