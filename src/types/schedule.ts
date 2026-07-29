export interface TimePeriod {
    day: string,
    startTime: number,
    endTime: number,
}
export interface CourseSection {
    id: string
    sectionName?: string
    schedule: TimePeriod[]
}
export interface Course {
    code: string
    title?: string
    sections: CourseSection[]
}
