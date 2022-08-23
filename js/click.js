
document.getElementById('messi-id').addEventListener('click', function () {
    const messi = document.getElementById('messiId');
    const messiString = messi.innerText;

    const orderIist = document.getElementById('order-list');
    if(orderIist.children.length >= 5){
    alert('You cannot take more than five players')
    return
    }
    const li = document.createElement('li')
    li.innerText = messiString;
    orderIist.appendChild(li);
})

document.getElementById('dimaria-id').addEventListener('click', function () {
    const dimaria = document.getElementById('dimaria');
    const dimariaString = dimaria.innerText;

    const orderIist = document.getElementById('order-list');
    if(orderIist.children.length >= 5){
        alert('You cannot take more than five players')
        return
        }
    const li = document.createElement('li')
    li.innerText = dimariaString;
    orderIist.appendChild(li)

})
document.getElementById('mbappe-id').addEventListener('click', function () {
    const mbappe = document.getElementById('mbappe');
    const mbappeString = mbappe.innerText;

    const orderIist = document.getElementById('order-list');
    if(orderIist.children.length >= 5){
        alert('You cannot take more than five players')
        return
        }
    const li = document.createElement('li')
    li.innerText = mbappeString;
    orderIist.appendChild(li)

})
document.getElementById('neymar-id').addEventListener('click', function () {
    const neymar = document.getElementById('neymar');
    const neymarString = neymar.innerText;

    const orderIist = document.getElementById('order-list');
    if(orderIist.children.length >= 5){
        alert('You cannot take more than five players')
        return
        }
    const li = document.createElement('li')
    li.innerText = neymarString;
    orderIist.appendChild(li)

})
document.getElementById('gueye-id').addEventListener('click', function () {
    const gueye = document.getElementById('gueye');
    const gueyeString = gueye.innerText;

    const orderIist = document.getElementById('order-list');
    if(orderIist.children.length >= 5){
        alert('You cannot take more than five players')
        return
        }
    const li = document.createElement('li');
    li.innerText = gueyeString;
    orderIist.appendChild(li)

})

document.getElementById('mauro-id').addEventListener('click', function () {
    const mauro = document.getElementById('mauro');
    const mauroString = mauro.innerText;

    const orderIist = document.getElementById('order-list');
    if(orderIist.children.length >= 5){
        alert('You cannot take more than five players')
        return
        }
    const li = document.createElement('li')
    li.innerText = mauroString;
    orderIist.appendChild(li)

})

////***ADD EVENT LISTENER IN CALULATE BUTTON***\\\\

document.getElementById('calculate-btn').addEventListener('click', function () {
    let selectedPlayersQnty = document.getElementById('order-list').children.length;

    const inputValue = getElementValueById('input-id');
   
    const calculate = selectedPlayersQnty * inputValue
    if (isNaN(calculate)) {   
        return;
    }
    setElementValueById('expenses-amount',calculate);
   
})
document.getElementById('calulate-total').addEventListener('click', function(){
    const expenses = getElementTextById('expenses-amount');
    const managerSalary = getElementValueById('manager-id');
    const coachSalary = getElementValueById('coach-id');
    
    const totalExpenses = expenses + managerSalary + coachSalary;
    if (isNaN(totalExpenses)) {   
        return;
    }
    setElementValueById('total-cost', totalExpenses);
})
