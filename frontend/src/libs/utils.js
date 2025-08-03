// Function to convert the date to proper
// readable format on the homepage;

export function formatDate(date) {
    return date.toLocaleDateString("en-us", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}