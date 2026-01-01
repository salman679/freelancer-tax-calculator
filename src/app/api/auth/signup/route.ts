import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, benefitTier } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: true,
          user: existingUser,
          message: "User already exists",
        },
        { status: 200 }
      );
    }

    const user = await prisma.user.create({
      data: {
        email,
        name: name || null,
        benefitTier: benefitTier || "detailed",
      },
    });

    return NextResponse.json(
      {
        success: true,
        user,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}
