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

