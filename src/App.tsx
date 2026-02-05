import './App.css'
import { Outlet } from 'react-router-dom'
import { MainLayout, Sidebar, TopNavbar } from '@/components/layout'

function App() {
  return (
    <>
      <TopNavbar />

      <div className="flex">
        <Sidebar />

        <MainLayout>
          <Outlet />
        </MainLayout>
      </div>
    </>
  )
}

export default App
