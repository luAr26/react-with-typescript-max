import { useState } from "react";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/course-goals";
import Header from "./components/header";
import NewGoal from "./components/new-goal";

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Learn ts",
      description: "Learn ts from the ground up.",
    },
    {
      id: 2,
      title: "Practice ts",
      description: "Practice working with ts",
    },
  ]);

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const handleAddGoal = (text: string, summary: string) => {
    setGoals((prevGoals) => {
      return prevGoals.concat({
        id: Math.random(),
        title: text,
        description: summary,
      });
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals." }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAdd={handleAddGoal} />
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
