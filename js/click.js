
document.getElementById('messi-id').addEventListener('click', function () {
    const messi = document.getElementById('messiId');
    const messiString = messi.innerText;

    const orderIist = document.getElementById('order-list');
    const li = document.createElement('li')
    li.innerText = messiString;
    orderIist.appendChild(li);



})




document.getElementById('dimaria-id').addEventListener('click', function () {
    const dimaria = document.getElementById('dimaria');
    const dimariaString = dimaria.innerText;

    const orderIist = document.getElementById('order-list');
    const li = document.createElement('li')
    li.innerText = dimariaString;
    orderIist.appendChild(li)

})
document.getElementById('mbappe-id').addEventListener('click', function () {
    const mbappe = document.getElementById('mbappe');
    const mbappeString = mbappe.innerText;

    const orderIist = document.getElementById('order-list');
    const li = document.createElement('li')
    li.innerText = mbappeString;
    orderIist.appendChild(li)

})
document.getElementById('neymar-id').addEventListener('click', function () {
    const neymar = document.getElementById('neymar');
    const neymarString = neymar.innerText;

    const orderIist = document.getElementById('order-list');
    const li = document.createElement('li')
    li.innerText = neymarString;
    orderIist.appendChild(li)

})
document.getElementById('gueye-id').addEventListener('click', function () {
    const gueye = document.getElementById('gueye');
    const gueyeString = gueye.innerText;

    const orderIist = document.getElementById('order-list');
    const li = document.createElement('li')
    li.innerText = gueyeString;
    orderIist.appendChild(li)

})

document.getElementById('mauro-id').addEventListener('click', function () {
    const mauro = document.getElementById('mauro');
    const mauroString = mauro.innerText;

    const orderIist = document.getElementById('order-list');
    const li = document.createElement('li')
    li.innerText = mauroString;
    orderIist.appendChild(li)

})

// let selectedPlayersQnty = document.getElementById('order-list').childElementCount;
// let playersQuantity = document.getElementById('order').children.length;
// console.log(selectedPlayersQnty, playersQuantity);

// const num = 0;
// const numValue = num + 1;
document.getElementById('calculate-btn').addEventListener('click', function () {
    let selectedPlayersQnty = document.getElementById('order-list').children.length;
    const input = document.getElementById('input-id');
    const inputString = input.value;
    const inputValue = parseFloat(inputString);
    const calculate = selectedPlayersQnty * inputValue
    const expenses = document.getElementById('expenses-amount');
    expenses.innerText = calculate


})
