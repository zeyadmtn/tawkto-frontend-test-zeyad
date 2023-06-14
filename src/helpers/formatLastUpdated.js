function formatLastUpdated(date) {
    const lastUpdated = new Date(date);
    const daysAgo = Math.floor((Date.now() - lastUpdated) / (1000 * 60 * 60 * 24));
    return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
}

export default formatLastUpdated;
