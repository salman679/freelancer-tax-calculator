import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, isSignedUp: false },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        isSignedUp: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          benefitTier: user.benefitTier,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Check user error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to check user" },
      { status: 500 }
    );
  }
}
