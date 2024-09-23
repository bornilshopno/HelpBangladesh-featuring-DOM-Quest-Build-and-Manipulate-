function getValueByTextID(id){
    const value = document.getElementById(id).innerText;
    const amount = parseFloat(value);
    return amount;
}

function getValueByInputID(id){
    const value = document.getElementById(id).value;
    const amount = parseFloat(value);
    return amount;
}
