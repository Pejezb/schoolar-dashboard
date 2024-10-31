import connection from "../../lib/db";

export default async function handler(req, res) {
  try {
    const [rows] = await connection.query("SELECT 1 + 1 AS solution");
    res.status(200).json({ solution: rows[0].solution });
  } catch (error) {
    console.error("Error connecting to database:", error);
    res.status(500).json({ message: "Database connection error" });
  }
}
