export const setPopulation = (number:number) => {
    let formatter = new Intl.NumberFormat('en', {
        maximumSignificantDigits: 3
    });

    return formatter.format(number);
}