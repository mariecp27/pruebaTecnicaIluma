window.addEventListener('load', function(){
    let timer = setInterval(countTimer, 1000);

    let totalhours = parseInt(document.querySelector('#timer').value.slice(0,2));
    let totalminutes = parseInt(document.querySelector('#timer').value.slice(3,5));
    let totalSeconds = parseInt(document.querySelector('#timer').value.slice(-2));

    function countTimer() {
        ++totalSeconds;
        
        let hour = totalhours + Math.floor(totalSeconds / 3600);
        let minute = totalminutes + Math.floor((totalSeconds - hour * 3600) / 60);
        let seconds = totalSeconds - (hour * 3600 + minute * 60) + (totalhours * 3600 + totalminutes * 60) ;
        
        if(hour < 10){
            hour = "0" + hour;
        }
        
        if(minute < 10){
            minute = "0" + minute;
        }

        if(seconds < 10){
            seconds = "0" + seconds;
        }

        document.querySelector('#timer').value = hour + ":" + minute + ":" + seconds;
    }
})