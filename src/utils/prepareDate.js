const prepareDate = value => {
    const newDate = new Date(value);
    console.log(newDate);
    return {
        day: newDate.getDate(),
        month: newDate.getMonth() + 1
    }
}

export default prepareDate;