import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    const employees = await prisma.employees.findMany();
    return NextResponse.json(employees);

}