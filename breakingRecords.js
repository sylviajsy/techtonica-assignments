function breakingRecords(scores) {
    // Write your code here
    // e.g. output [1,1]
    // track min and max, minCount, maxCount
    // loop through array, evaluate if current element < min or > max
    // based on which, increment associated count
    let min = scores[0];
    let max = scores[0];
    let minCount = 0;
    let maxCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        } else if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }
    }
    return [maxCount, minCount]
}