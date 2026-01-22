// If this is a Client Component, it receives data via props
export default function EmployeesList({ employeesData }) {
  return (
    <div className="flex flex-col center">
      <h2 className="text-xl mb-4">Employees List</h2>

      <div className="grid gap-4">
        {employeesData && employeesData.length > 0 ? (
          employeesData.map((emp) => (
            <div key={emp.id} className="p-4 border rounded shadow-sm">
              <h3 className="font-semibold">Name: {emp.name}</h3>
              <p>Age: {emp.age}</p>
            </div>
          ))
        ) : (
          <p>No employees.</p>
        )}
      </div>
    </div>
  );
}
