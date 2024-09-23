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


function cardWiseFunction(sectionTotalAmountId, donationInputId, sectionTitleId) {
    const noakhaliAccount = getValueByTextID(sectionTotalAmountId);
    const noakhaliDonation = getValueByInputID(donationInputId);
    const mainBalance = getValueByTextID('main-balance');

    if (noakhaliDonation > 0 && !isNaN(noakhaliDonation)) {
        if (noakhaliDonation < mainBalance) {
            let updatednoakhaliAmount = noakhaliAccount + noakhaliDonation;
            document.getElementById(sectionTotalAmountId).innerText = updatednoakhaliAmount;  // Update section total

            let newMainBalance = mainBalance - noakhaliDonation;
            document.getElementById('main-balance').innerText = newMainBalance;  // Update main balance
   

            document.getElementById('modal').classList.remove('hidden');  // Show modal
          
            const currentDateTime = new Date();
            const noakhali = document.getElementById(sectionTitleId).innerText;  // Get section title
            const p = document.createElement('p');
            p.innerText = `Amount ${noakhaliDonation} donated to the campaign "${noakhali}" at ${currentDateTime}`;
            document.getElementById('history-detail').appendChild(p);  // Add to history

            document.getElementById('no-donation').textContent = '';  // Clear "no donation" message
        } else {
            alert('You do not have sufficient balance to donate this amount!');
        }
    } else {
        alert('Please enter a valid amount to donate.');
    }
}
