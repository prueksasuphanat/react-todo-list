const mockItem = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `Task ${index + 1}`,
  description: `Description for Task ${index + 1}`,
  status: index % 3 === 0 ? 'Completed' : 'In Progress',
}))

function Dashboard() {
  return (
    <div className="flex flex-col! gap-2 mb-2">
      {mockItem.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default Dashboard
