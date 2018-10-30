function repeat(str) {
    if (typeof str !== 'string') {
        return str;
    }
    return str + str;
}

module.exports = repeat;
