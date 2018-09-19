var genaratemessage = function(from , text){
    return {
        from:from,
        text:text,
        time:new Date().getTime()
    }
}

module.exports = genaratemessage;