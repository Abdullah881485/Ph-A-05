


const allHeartBtns = document.getElementsByClassName("heart-btn");
for(let heartBtn of allHeartBtns) {
    heartBtn.addEventListener('click', function() {
        let heart = parseInt(document.getElementById("heart").innerText);
        heart++;
        document.getElementById("heart").innerText = heart;
    });
}

let allCoins = parseInt(document.getElementById("coin").innerText);
const allCallBtns = document.getElementsByClassName("call-button");
for(let callBtn of allCallBtns) {

    callBtn.addEventListener('click', function(){
        let title = callBtn.getAttribute("data-title");
        let number = callBtn.getAttribute("data-number");
        if(allCoins >= 20){
            alert("📞Calling " + title + " " + number);
            allCoins -= 20;
            document.getElementById("coin").innerText = allCoins;
        }
        else{
            alert("You don't have enough coins.");
        }
    })
}