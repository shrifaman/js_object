function time(){
        var t=new Date();
        var h=t.getHours();
        var m=t.getMinutes();
        var s=t.getSeconds();
        document.getElementById("hour").innerHTML=h;
        document.getElementById("minat").innerHTML=+m;
        document.getElementById("second").innerHTML=+s;			    	
    }
setInterval(time,1000)