import type { Course } from "../types/schedule";

export const MOCK_COURSES: Course[] = [
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

