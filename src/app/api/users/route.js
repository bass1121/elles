import { NextResponse } from 'next/server';
import { createConnection } from "@/dbconfig/db";

export async function GET(req, res) {
  try {
    const db = await createConnection()
    const query = "SELECT * FROM users"
    const [users] = await db.query(query)
    return NextResponse.json(users)
  } catch(error) {
    console.log(error)
    return NextResponse.json({error: error.message})
  }
}

export async function POST(req, res) {

}