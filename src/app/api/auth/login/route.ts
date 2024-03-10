// src/app/api/route.ts

import prisma from "@/utils/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        console.log(existingUser);

        if (!existingUser || existingUser.password != password) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 404 }
            );
        } else {
            const { password, ...userInfos } = existingUser;
            const token = jwt.sign(
                { user: userInfos },
                process.env.JWT_SECRET as string,
                {
                    expiresIn: "1h",
                }
            );

            return NextResponse.json({ token }, { status: 200 });
        }
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}
