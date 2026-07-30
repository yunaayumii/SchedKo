import { useState } from "react";
import type { CourseSection } from "./types/schedule";
import { MOCK_COURSES } from "./data/mockCourses";
import { generateSchedules } from "./utils/scheduleEngine"

function App() {
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>([]);
  const [generatedSchedules, setGeneratedSchedules] = useState<CourseSection[][]>([]);
  const [activeScheduleIndex, setActiveScheduleIndex] = useState<number>(0);

  const handleGenerate = () => {
    alert("The button was clicked!");
  };

  return (
    <div>
      <h1>🗓️ SchedKo Pathfinder</h1>

      <p>{selectedCourseIds.join(", ") || "None"}</p>
      <p>{generatedSchedules.length}</p>
      <p>{activeScheduleIndex + 1}</p>

      <button onClick={() => setGeneratedSchedules(generateSchedules(MOCK_COURSES))}>Handle Generate</button>

    </div>
  )
}

export default App