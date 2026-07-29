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

/**
 * Checks if a candidate section can fit into an existing schedule without conflicts.
 * @param {Object} candidateSection - The section object we want to test
 * @param {Array<Object>} currentCombination - Array of section objects already picked
 * @returns {boolean} True if candidateSection does NOT conflict with ANY section in currentCombination
 */
function isSectionValidForSchedule(candidateSection, currentCombination) {
    // return True if candidateSection does not have conflict with currentCombination
    for (let i = 0; i < currentCombination.length; i++) {
        if (doSectionsOverlap(currentCombination[i], candidateSection)) {
            return false;
        }
    }
    return true;
}

