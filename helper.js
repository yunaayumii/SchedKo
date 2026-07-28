// Helper 1: Do two specific periods overlap on the same day?
function doPeriodsOverlap(periodA, periodB) {
    // 1. If they aren't on the same day, they can NEVER overlap
    if (periodA.day !== periodB.day) return false;

    // 2. Return true if time ranges overlap:
    // Hint: Two intervals [startA, endA] and [startB, endB] overlap if 
    // startA < endB AND startB < endA
    return ((periodA.endTime > periodB.startTime) && (periodA.startTime < periodB.endTime))
}

function doSectionsOverlap(sectionA, sectionB) {
    for (let i = 0; i < sectionA.schedule.length; i++) {
        for (let j = 0; j < sectionB.schedule.length; j++) {
            if (doPeriodsOverlap(sectionA[i], sectionB[j])) {
                return True
            }

        }
    }
    return False