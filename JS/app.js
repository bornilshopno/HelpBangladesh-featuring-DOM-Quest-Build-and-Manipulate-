document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = "./blog.html"
})
document.getElementById('btn-history')
    .addEventListener('click', function () {
        // Get current date and time
        var now = new Date();
        var datetime = now.toLocaleString();

        // Insert date and time into HTML
        document.getElementById("datetime").innerHTML = datetime;

        document.getElementById('history-detail').classList.remove('hidden');
        document.getElementById('donation-cards').classList.add('hidden');
    })

document.getElementById('btn-show-donation-cards')
    .addEventListener('click', function () {
        document.getElementById('donation-cards').classList.remove('hidden');
        document.getElementById('history-detail').classList.add('hidden');
    })



document.getElementById('btn-noakhaliDonation').addEventListener('click', function () {
    const noakhaliAccount= getValueByTextID('noakhaliAmount')
    const noakhaliDonation=getValueByInputID('noakhali-donation')
    const mainBalance=getValueByTextID('main-balance')
    if (noakhaliDonation<mainBalance){
        let updatednoakhaliAmount = noakhaliAccount+ noakhaliDonation;
        document.getElementById('noakhaliAmount').innerText = updatednoakhaliAmount;
        let newMainBalance =  mainBalance- noakhaliDonation;
        document.getElementById('main-balance').innerText = newMainBalance;
        
        const currentDateTime = new Date()
        const noakhali=document.getElementById('noakhaliTitle').innerText
        const p=document.createElement('p')
        p.innerText=`Amount ${noakhaliDonation} donated to the campaign "${noakhali}" at ${currentDateTime}`
        document.getElementById('history-detail').appendChild(p);
        document.getElementById('no-donation').textContent='';    
    }
        else{
            alert('you do not have sufficinet balance to donate this amount!')
        }
})