const toGTM = (hours, gtmOffsetHours) => {
    const sum = Number(hours) + gtmOffsetHours;
    if (sum >= 24) return sum % 24;
    return sum;
}

export const formatDate = (inputTimeStamp) => {
    const parts = inputTimeStamp.split(/[- : T .]/);
    return `${toGTM(parts[3], 3)}:${parts[4]}:${parts[5]} ${parts[2]}-${parts[1]}-${parts[0]}`
}