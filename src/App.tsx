import { useState } from "react";
import type { CourseSection } from "./types/schedule";

function App() {
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>([]);
  const [generatedSchedules, setGeneratedSchedules] = useState<CourseSection[][]>([]);
  const [activeScheduleIndex, setActiveScheduleIndex] = useState<number>(0);

  return (
    <div>
      <h1>🗓️ SchedKo Pathfinder</h1>

      <p>{selectedCourseIds.join(", ") || "None"}</p>
      <p>{generatedSchedules.length}</p>
      <p>{activeScheduleIndex + 1}</p>
    </div>
  )
}

export default App