import { useState } from "react";
import type { CourseSection } from "./types/schedule";
import { MOCK_COURSES } from "./data/mockCourses";
import { generateSchedules } from "./utils/scheduleEngine"

function App() {
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>([]);
  const [generatedSchedules, setGeneratedSchedules] = useState<CourseSection[][]>([]);
  const [activeScheduleIndex, setActiveScheduleIndex] = useState<number>(0);

  const currentSchedule = generatedSchedules[activeScheduleIndex];

  return (
    <div>
      <h1>🗓️ SchedKo Pathfinder</h1>

      <p>{selectedCourseIds.join(", ") || "None"}</p>
      <p>{generatedSchedules.length}</p>
      <p>{activeScheduleIndex + 1}</p>

      <button onClick={() => setGeneratedSchedules(generateSchedules(MOCK_COURSES))}>Handle Generate</button>

      <div>
        {/* previous button */}
        <button
          disabled={activeScheduleIndex === 0}
          onClick={() => {
            if (activeScheduleIndex > 0) {
              setActiveScheduleIndex(activeScheduleIndex - 1)
            }
          }}>Previous</button>

        {/*  */}
        <span>Schedule {activeScheduleIndex + 1} of {generatedSchedules.length} </span>

        {/* Next Button */}
        <button onClick={() => {
          if (activeScheduleIndex < (generatedSchedules.length - 1)) {
            setActiveScheduleIndex(activeScheduleIndex + 1)
          }
        }}>Next</button>

        {/* rendering */}
      </div>
      {generatedSchedules.length > 0 && (
        <div>
          <h2> Schedule {activeScheduleIndex + 1} Details</h2>
          {currentSchedule.map((section) => (
            <div key={section.id}>
              <h3>{section.id}</h3>
              <ul>
                {section.schedule.map((sched, index) => (
                  <li key={index}>
                    {sched.day}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App