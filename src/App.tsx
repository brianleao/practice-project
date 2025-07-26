import Header from './components/Header.tsx'
import goalsImg from './assets/goals.jpg'
import CourseGoals from './components/CourseGoals.tsx'

export default function App() {

  return (
    <main>
      <Header image={{src: goalsImg, alt: "A list of goals"}}>
        <h1>Your course goals</h1>
      </Header>
      <CourseGoals goals={[
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
          ]}/>
    </main>
  )
}