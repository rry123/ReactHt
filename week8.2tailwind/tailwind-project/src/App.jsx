import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid grid-cols-3">
      <RevenueCard title = {"Amount Pending"} orderCount={13} amount={"2,99,890.00"}></RevenueCard>
    </div>
  )

}

export default App
