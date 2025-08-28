

const allHeartBtns = document.getElementsByClassName("heart-btn");
for(let heartBtn of allHeartBtns) {
    heartBtn.addEventListener('click', function() {
        let heart = parseInt(document.getElementById("heart").innerText);
        heart++;
        document.getElementById("heart").innerText = heart;
    });
}
const allCopyBtns = document.getElementsByClassName("copy-button");
for(let copyBtn of allCopyBtns) {
    copyBtn.addEventListener('click', function() {
        let textToCopy = copyBtn.getAttribute("data-number");
         navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("Number Copied " + textToCopy);
                let copy = parseInt(document.getElementById("copy").innerText);
                copy++;
                document.getElementById("copy").innerText = copy;
            })
            .catch(() => {
                alert("Failed to copy number.");
            });
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
        let callInfo = {
            title: title,
            number: number,
            time: new Date().toLocaleTimeString()
        };

        let history = document.getElementById("history-container")
        let div = document.createElement("div");
        div.innerHTML=`
            <div class="flex justify-between items-center p-3 m-4 bg-gray-100 rounded-lg">
                <div>
                    <h1 class="text-[14px] font-bold">${callInfo.title}</h1>
                    <p class="text-[13px] font-semibold text-gray-600">${callInfo.number}</p>
                </div>
                <p class="text-[13px] font-semibold text-gray-600">${callInfo.time}</p>
            </div>
        `;

        history.appendChild(div);
    })

}
document.getElementById("clear-btn").addEventListener('click', function(){
    document.getElementById("history-container").innerHTML = ``;
})

document.getElementById("res-history").addEventListener('click', function(){
    const historyMain = document.getElementById("history-main");
    const servicesMain = document.getElementById("services-main");
    if(historyMain.style.display === 'none' || historyMain.style.display === '') {
        historyMain.style.display = 'block';
        servicesMain.style.display = 'none';
    } else {
        historyMain.style.display = 'none';
        servicesMain.style.display = 'block';
    }
});