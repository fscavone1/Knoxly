let c=0
let idNotify = "notify-"+c
chrome.runtime.onMessage.addListener(function(req, sender, sendRes){
    if(req.type === 'notifications'){
        chrome.notifications.create(idNotify, req.opt, function(){})

        chrome.notifications.onButtonClicked.addListener(function(id,btn){
            const isNotify = id == "notify-"+c
            
            if(isNotify && btn == 0){
                alert("feedback positivo"+c)
            }else{
                if(isNotify && btn ==1){
                    alert("feedback negativo"+c)
                }
            }   
            c++  
            idNotify = "notify-"+c
        })
       
    }
})

