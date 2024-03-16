function formatPhoneNumber(arrNumber) {
    const joinNumbers = arrNumber.join("")
    const firstSlice = `(${joinNumbers.slice(0, 3)})`
    const secondSlice = ` ${joinNumbers.slice(3, 6)}-${joinNumbers.slice(6)}`

    return firstSlice + secondSlice

}

module.exports = formatPhoneNumber;
