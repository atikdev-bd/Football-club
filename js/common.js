function getElementValueById(element) {
    const elementId = document.getElementById(element);
    const elementString = elementId.value;
    const elementValue = parseFloat(elementString);
  
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