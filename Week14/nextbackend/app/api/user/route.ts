import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();


// get request which return json data
export async function GET() {
    return Response.json({ name: "Aviral", email: "aviralsingh@gmail.com" })
  }





  export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}