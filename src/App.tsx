import Header from './components/Header.tsx'
import goalsImg from './assets/goals.jpg'
import CourseGoals from './components/CourseGoals.tsx'
import { useState } from 'react'

export default function App() {

  const [goals, setGoals] = useState(
    [
        {
          id: 1,
          title: 'Learn TS',
          description: 'Lean TS from the ground up'
        },
        {
          id: 2,
          title: 'Practice TS',
          description: 'Practice working with TypeScript'
        },
    ]
  )

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter(g => g.id !== id));
  }
 
  return (
    <main>
      <Header image={{src: goalsImg, alt: "A list of goals"}}>
        <h1>Your course goals</h1>
      </Header>
      <CourseGoals goals={goals} onDelete={handleDeleteGoal}/>
    </main>
  )
}