export const toYYYYMMDD = (longDate)=>{
    const date = new Date(parseInt(longDate, 10));
    return `${date.getFullYear()}${'/'}${date.getMonth()+1}${'/'}${date.getDate()}`
}