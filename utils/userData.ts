"use server"
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; // App Router
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || "";

export async function getUserData() {
  const cookieStore = await cookies(); // <- await here
  const token = cookieStore.get('token')?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded === 'object' && decoded !== null) {
        return decoded as { userId: string; role: string };
      }
    return null; // { userId, role }
  } catch (err) {
    console.error('Invalid token', err);
    return null;
  }
}
