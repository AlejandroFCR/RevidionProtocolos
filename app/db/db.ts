import sql, { config, ConnectionPool } from 'mssql'

// Configuración de la conexión
const dbConfig: config = {
  user: process.env.DB_USER, 
  password: process.env.DB_PASS,
  server: process.env.DB_HOST || '',
  database: process.env.DB_DATABASE, 
  options: {
    encrypt: true, 
    trustServerCertificate: true 
  }
};

// Función para conectarse a la base de datos
export async function db_session(): Promise<ConnectionPool> {
  try {
    const pool = await sql.connect(dbConfig);
    console.log('Conexión a SQL Server exitosa');
    return pool; // Retorna el pool de conexiones
  } catch (err) {
    console.error('Error al conectar a SQL Server:', err);
    throw err;
  }
}
