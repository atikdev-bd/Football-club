function disable(x) {
    x.disabled = true;
}

function getElementValueById(element) {
    const elementId = document.getElementById(element);
    const elementString = elementId.value;
    const elementValue = parseFloat(elementString);
    if (isNaN(elementValue)) {
        alert('Please give valid input')
        return
    }
    return elementValue;
}
function getElementTextById(textId) {
    const textElement = document.getElementById(textId);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString)
    return textElementValue;
}
function setElementValueById(element, newValue) {
    const setElement = document.getElementById(element);
    setElement.innerText = newValue
}