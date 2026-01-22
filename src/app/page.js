import { prisma } from "@/lib/prisma";
import EmployeesList from "./Employees/page";

export default async function Home() {
const employeesData = await prisma.employees.findMany()
console.log(employeesData);

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 italic">SAQR TECH 🦅</h1>
      <EmployeesList employeesData={employeesData}/>
    </main>
  );
}
