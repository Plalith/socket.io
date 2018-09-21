var genaratemessage = function(from , text){
    return {
        from:from,
        text:text,
        time:`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
    }
}

module.exports = genaratemessage;