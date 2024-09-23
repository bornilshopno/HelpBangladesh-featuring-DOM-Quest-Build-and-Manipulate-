document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = "./blog.html"
})
//when history button active
document.getElementById('btn-history')
    .addEventListener('click', function () {
        const currentDateTime = new Date()
        document.getElementById("datetime").innerHTML = currentDateTime;
        document.getElementById('history-detail').classList.remove('hidden');
        document.getElementById('donation-cards').classList.add('hidden');
    })
//when donation button active
document.getElementById('btn-show-donation-cards')
    .addEventListener('click', function () {
        document.getElementById('donation-cards').classList.remove('hidden');
        document.getElementById('history-detail').classList.add('hidden');
    })
//for modal portion
document.getElementById('btn-modal-closing').addEventListener('click',function(){
    document.getElementById('modal').classList.add('hidden');
});
//for card 1: noakhali section
document.getElementById('btn-noakhaliDonation').addEventListener('click', function() {
    cardWiseFunction('noakhaliAmount', 'noakhali-donation', 'noakhaliTitle');
});
//for card 2: feni section
document.getElementById('btn-feni-donation').addEventListener('click', function() {
    cardWiseFunction('feniAmount', 'feni-donation', 'feniTitle');
});
//for card 3: quota reform section
document.getElementById('btn-quotaDonation').addEventListener('click', function() {
    cardWiseFunction('totalAmountForQuotaReform', 'quota-reform-donation', 'qoutaReformTitle');
});