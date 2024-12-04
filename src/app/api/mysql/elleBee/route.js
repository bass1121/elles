import { NextResponse, NextRequest } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET(request) {
  const results = {
    message: 'Hello World!'
  }
  return NextResponse.json(results)
}