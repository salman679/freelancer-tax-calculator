import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      userId,
      annualIncome,
      incomeSource,
      expenses,
      estimatedTax,
      taxableIncome,
      filingRequired,
      riskLevel,
    } = body;

    if (!annualIncome || !incomeSource) {
      return NextResponse.json(
        { success: false, error: "Required fields missing" },
        { status: 400 }
      );
    }

    const calculation = await prisma.calculation.create({
      data: {
        userId: userId || null,
        annualIncome,
        incomeSource,
        expenses: expenses || 0,
        estimatedTax,
        taxableIncome,
        filingRequired,
        riskLevel,
      },
    });

    return NextResponse.json(
      {
        success: true,
        calculation,
        message: "Calculation saved successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Save calculation error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save calculation" },
      { status: 500 }
    );
  }
}
