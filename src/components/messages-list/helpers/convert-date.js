export const convertToNiceDate = time => {
    const date = new Date(time);
    const diff = (((new Date()).getTime() - date.getTime()) / 1000);
    const daydiff = Math.floor(diff / 86400);

    let result;

    if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
        result = null;
        return result;
    }

    return daydiff === 0 && 'Today' ||
        daydiff === 1 && 'Yesterday';

};

export const formatDate = date => {

    if (!(date instanceof Date)) {
        return null;
    }

    const monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
};
