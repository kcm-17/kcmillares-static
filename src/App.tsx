import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Routes>
        <Route
          path="/"
          element={
            <main className="flex items-center justify-center min-h-screen">
              <h1 className="text-4xl font-bold">kcmillares.com</h1>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
