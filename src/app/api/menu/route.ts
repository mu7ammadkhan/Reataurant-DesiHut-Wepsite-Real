import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";

export async function GET() {
  try {
    await connectDB();

    const items = await MenuItem.find();

    return NextResponse.json({
      success: true,
      data: items,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching menu" },
      { status: 500 }
    );
  }
}