/**
 * Retreive the classes from the stylesheet given
 * 
 * @param {*} styleSheet Stylesheet the style is coming from
 * @param {*} classNames An array with name of classes
 * @returns {Array} An array with classes from the stylesheet
 */
export const getClass = (styleSheet, classNames) => {
    const newArr = [... classNames].map(e => {
        return styleSheet[e]
    });
    return newArr
}