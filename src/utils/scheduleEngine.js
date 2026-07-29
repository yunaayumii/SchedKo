// Helper 1: Do two specific periods overlap on the same day?
function doPeriodsOverlap(periodA, periodB) {
    // 1. If they aren't on the same day, they can NEVER overlap
    if (periodA.day !== periodB.day) return false;

    // true if time ranges overlap:
    return ((periodA.endTime > periodB.startTime) && (periodA.startTime < periodB.endTime))
}

function doSectionsOverlap(sectionA, sectionB) {
    // return True if the sections have overlapping schedules
    for (let i = 0; i < sectionA.schedule.length; i++) {
        for (let j = 0; j < sectionB.schedule.length; j++) {
            if (doPeriodsOverlap(sectionA.schedule[i], sectionB.schedule[j])) {
                return true;
            }
        }
    }
    return false;
}

function isSectionValidForSchedule(candidateSection, currentCombination) {
    // return True if candidateSection does not have conflict with currentCombination
    for (let i = 0; i < currentCombination.length; i++) {
        if (doSectionsOverlap(currentCombination[i], candidateSection)) {
            return false;
        }
    }
    return true;
}

export function generateSchedules(selectedCourses, currentCombination = [], validSchedules = []) {
    // 1. BASE CASE: All courses have 1 selected section
    if (currentCombination.length === selectedCourses.length) {
        validSchedules.push([...currentCombination]);
        return validSchedules;
    }

    // 2. GET CURRENT COURSE TO PROCESS
    const currentCourse = selectedCourses[currentCombination.length];

    // 3. RECURSIVE STEP
    for (const candidateSection of currentCourse.sections) {
        // a) Check if candidateSection is valid for currentCombination using isSectionValidForSchedule()
        if (isSectionValidForSchedule(candidateSection, currentCombination)) {
            // b) If valid: push candidateSection into currentCombination
            currentCombination.push(candidateSection);
            // c) Call generateSchedules(selectedCourses, currentCombination, validSchedules)
            generateSchedules(selectedCourses, currentCombination, validSchedules)
            // pop 
            currentCombination.pop()
        }
    }
    return validSchedules;
}

// ==========================================
// 🧪 TEST SUITE (Add this at the bottom!)
// ==========================================
const MOCK_COURSES = [
    {
        code: "CS101",
        sections: [
            { id: "CS101-SEC1", schedule: [{ day: "M", startTime: 9.0, endTime: 11.0 }] },
            { id: "CS101-SEC2", schedule: [{ day: "T", startTime: 10.0, endTime: 12.0 }] }
        ]
    },
    {
        code: "MATH201",
        sections: [
            { id: "MATH201-SEC1", schedule: [{ day: "M", startTime: 10.0, endTime: 11.5 }] }, // Conflicts with CS101-SEC1!
            { id: "MATH201-SEC2", schedule: [{ day: "M", startTime: 13.0, endTime: 14.5 }] }  // Valid!
        ]
    }
];

const results = generateSchedules(MOCK_COURSES);
console.log("Total Valid Schedules Found:", results.length);
console.log("Results:", JSON.stringify(results, null, 2));