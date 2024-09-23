document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href="./blog.html"
})
document.getElementById('btn-history')
.addEventListener('click', function(){
      // Get current date and time
  var now = new Date();
  var datetime = now.toLocaleString();

  // Insert date and time into HTML
  document.getElementById("datetime").innerHTML = datetime;

    document.getElementById('history-detail').classList.remove('hidden');
    document.getElementById('donation-cards').classList.add('hidden');
})

document.getElementById('btn-show-donation-cards')
.addEventListener('click', function(){
    document.getElementById('donation-cards').classList.remove('hidden');
    document.getElementById('history-detail').classList.add('hidden');
})
