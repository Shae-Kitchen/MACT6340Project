import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

let pool;

export async function connect() {
  pool = mysql
    .createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    })
    .promise();

  console.log("✅ Database connected!");
}

export default pool;
export async function getAllProjects() {
  try {
    const [rows] = await pool.query("SELECT * FROM projects;");
    return rows;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Rethrow to handle in the calling function
  }
}
