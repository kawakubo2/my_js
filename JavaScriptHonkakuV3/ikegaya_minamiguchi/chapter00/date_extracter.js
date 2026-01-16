months = ["2025-01-01", "2025-02-3", "2025-3-04", "2025-4-5"];

// function extractYearMonth(date) {
//     return date.substring(0, date.lastIndexOf("-"));
// }

function extractYearMonth(date) {
    const pattern = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    return date.replace(pattern, '$1-$2');
}

for (const m of months) {
    console.log(extractYearMonth(m));
}

