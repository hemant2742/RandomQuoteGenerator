export const isEmpty = (value) =>
value === undefined ||
value === null ||
(typeof value === 'object' && Object.keys(value).length === 0) ||
(typeof value === 'string' && value.trim().length === 0) ||
(typeof value === 'object' && value.toString().length === 0);

export const trimObject = (obj) => {
 for (const propName in obj) {
    if (isEmpty(obj[propName])) {
       delete obj[propName];
    }
 }

 return obj;
}

export function paramsObjectToQueryString(payload) {
 const trimmedPayload = trimObject(payload);
 const paramPayloadToArr = Object.keys(trimmedPayload);
 if (!trimmedPayload || paramPayloadToArr.length < 1) return '';
 const queryString = paramPayloadToArr.reduce((acc, element, index, array) => {
    acc = `${array[0] === element ? '?' : ''}${acc}${element}=${trimmedPayload[element]}${
       array[array.length - 1] !== element ? '&' : ''
    }`;

    return acc;
 }, '');

 return queryString;
}
