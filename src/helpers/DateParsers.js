//Takes in date formatted "2019-12-19T13:47:20.466Z" and outputs as format "2 weeks ago"
function formatDateToTimeAgoFormat(date) {
    const lastUpdated = new Date(date);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - lastUpdated.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years} year${years !== 1 ? 's' : ''} ago`;
    } else if (months > 0) {
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else if (weeks > 0) {
        return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
}

// Takes in date formatted "2019-12-19T13:47:20.466Z" and outputs as format "14 June 2023"
function formatDateToShortDateFormat(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate;
}

export { formatDateToShortDateFormat, formatDateToTimeAgoFormat };
