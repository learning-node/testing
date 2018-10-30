function cap(str) {
    if (typeof str !== 'string') {
        return str;
    }
    return str.toUpperCase();
}

module.exports = cap;
