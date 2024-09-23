btn-noakhaliDonation noakhaliAmount noakhali-donation



//from app.js

document.getElementById('btn-noakhaliDonation').addEventListener('click', function () {
    const noakhaliAccount= getValueByTextID('noakhaliAmount')
    const noakhaliDonation=getValueByInputID('noakhali-donation')
    const mainBalance=getValueByTextID('main-balance')
    if(noakhaliDonation>0 && !isNaN(noakhaliDonation)){
        if (noakhaliDonation<mainBalance){
            let updatednoakhaliAmount = noakhaliAccount+ noakhaliDonation;
            document.getElementById('noakhaliAmount').innerText = updatednoakhaliAmount;
            let newMainBalance =  mainBalance- noakhaliDonation;
            document.getElementById('main-balance').innerText = newMainBalance;
            document.getElementById('modal').classList.remove('hidden')
            const currentDateTime = new Date()
            const noakhali=document.getElementById('noakhaliTitle').innerText
            const p=document.createElement('p')
            p.innerText=`Amount ${noakhaliDonation} donated to the campaign "${noakhali}" at ${currentDateTime}`
            document.getElementById('history-detail').appendChild(p);
            document.getElementById('no-donation').textContent='';    
          
        }
            else{
                alert('You do not have sufficinet balance to donate this amount!')
            }
    }

    else {alert ('Pls put a valid amount to donate')}
   
})


//chatgpt


// Add event listener and pass the correct element IDs




// self document

function cardWiseFunction(sectionTotalAmount, donation,sectionTitle)
    {
        const noakhaliAccount= getValueByTextID('sectionTotalAmount')
        const noakhaliDonation=getValueByInputID('donation')
        const mainBalance=getValueByTextID('main-balance')
        if(noakhaliDonation>0 && !isNaN(noakhaliDonation)){
            if (noakhaliDonation<mainBalance){
                let updatednoakhaliAmount = noakhaliAccount+ noakhaliDonation;
                document.getElementById('sectionTotalAmount').innerText = updatednoakhaliAmount;///return
                let newMainBalance =  mainBalance- noakhaliDonation;
                document.getElementById('main-balance').innerText = newMainBalance;///return
                document.getElementById('modal').classList.remove('hidden')///return
                const currentDateTime = new Date()
                const noakhali=document.getElementById('sectionTitle').innerText
                const p=document.createElement('p')
                p.innerText=`Amount ${noakhaliDonation} donated to the campaign "${noakhali}" at ${currentDateTime}`
                document.getElementById('history-detail').appendChild(p);///return
                document.getElementById('no-donation').textContent='';    ///return
              
            }
                else{
                    alert('You do not have sufficinet balance to donate this amount!')
                }
        }
    
        else {alert ('Pls put a valid amount to donate')}
       
    }


    document.getElementById('btn-noakhaliDonation').addEventListener('click', function(){

        cardWiseFunction('noakhaliAmount','noakhali-donation','noakhaliTitle');


    })


//self done ended
