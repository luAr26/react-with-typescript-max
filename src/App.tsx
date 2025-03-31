import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/course-goals";
import Header from "./components/header";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals." }}>
        <h1>Your course goals</h1>
      </Header>
      <CourseGoals
        goals={[
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
        ]}
      />
    </main>
  );
}

export default App;
