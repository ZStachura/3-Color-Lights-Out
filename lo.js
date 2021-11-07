window.onload=function () {
    var gameSize = 5;
    var ctc=1;
    var cellArray = [];
    var win=false;
	cellArray = document.getElementsByClassName("lightit");
    newgame = document.getElementById("restart")
    ch1=document.getElementById("change1")
    ch2=document.getElementById("change2")
    ch3=document.getElementById("change3")

    newgame.onclick = e => restart()  
    ch1.onclick =e => change1()
    ch2.onclick =e => change2()
    ch3.onclick =e => change3()
    ch1.classList.toggle('active');

    start()
    function start(){
        for(var i = 0, j = cellArray.length; i < j; i++){
        cellArray[i].removeEventListener("click", lightClick);
		cellArray[i].addEventListener("click", lightClick);
    }
    }
    function restart(e){
        window.location.reload()
    }

    function change1(e)
    {
        ctc=1;
        ch3.classList.value=''
        ch2.classList.value=''
        ch1.classList.toggle('active');
    }
    function change2(e)
    {
        ctc=2;
        ch1.classList.value=''
        ch3.classList.value=''
        ch2.classList.toggle('active');
    }
    function change3(e)
    {
        ctc=3;
        ch1.classList.value=''
        ch2.classList.value=''
        ch3.classList.toggle('active');
    }

    function lightClick() {

        if(this.classList == "lightit")
        {
            this.classList.value=''
            this.classList.toggle("light-on1")
        }
        else{
        if(this.classList == "light-on1")
        {
            this.classList.value=''
            this.classList.toggle("light-on2")
        }
        else{
        if(this.classList == "light-on2")
        {
            this.classList.value=''
            this.classList.toggle("lightit")
        }
    }
    }
    if(ctc==1){
        
        i=+this.id;
        switch( document.getElementById((i-10).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i-10).toString()).classList.value=''
                document.getElementById((i-10).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i-10).toString()).classList.value=''
                document.getElementById((i-10).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i-10).toString()).classList.value=''
                document.getElementById((i-10).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i-1).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i-1).toString()).classList.value=''
                document.getElementById((i-1).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i-1).toString()).classList.value=''
                document.getElementById((i-1).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i-1).toString()).classList.value=''
                document.getElementById((i-1).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i+1).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i+1).toString()).classList.value=''
                document.getElementById((i+1).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i+1).toString()).classList.value=''
                document.getElementById((i+1).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i+1).toString()).classList.value=''
                document.getElementById((i+1).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i+11).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i+11).toString()).classList.value=''
                document.getElementById((i+11).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i+11).toString()).classList.value=''
                document.getElementById((i+11).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i+11).toString()).classList.value=''
                document.getElementById((i+11).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i+9).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i+9).toString()).classList.value=''
                document.getElementById((i+9).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i+9).toString()).classList.value=''
                document.getElementById((i+9).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i+9).toString()).classList.value=''
                document.getElementById((i+9).toString()).classList.toggle("lightit")
                break;
        }
    }
    if(ctc==2){
        i=+this.id;
        switch( document.getElementById((i-10).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i-10).toString()).classList.value=''
                document.getElementById((i-10).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i-10).toString()).classList.value=''
                document.getElementById((i-10).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i-10).toString()).classList.value=''
                document.getElementById((i-10).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i-1).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i-1).toString()).classList.value=''
                document.getElementById((i-1).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i-1).toString()).classList.value=''
                document.getElementById((i-1).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i-1).toString()).classList.value=''
                document.getElementById((i-1).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i+10).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i+10).toString()).classList.value=''
                document.getElementById((i+10).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i+10).toString()).classList.value=''
                document.getElementById((i+10).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i+10).toString()).classList.value=''
                document.getElementById((i+10).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i+11).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i+11).toString()).classList.value=''
                document.getElementById((i+11).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i+11).toString()).classList.value=''
                document.getElementById((i+11).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i+11).toString()).classList.value=''
                document.getElementById((i+11).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i-9).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i-9).toString()).classList.value=''
                document.getElementById((i-9).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i-9).toString()).classList.value=''
                document.getElementById((i-9).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i-9).toString()).classList.value=''
                document.getElementById((i-9).toString()).classList.toggle("lightit")
                break;
        }
    } 
    if(ctc==3)
    {
        i=+this.id;
        switch( document.getElementById((i+1).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i+1).toString()).classList.value=''
                document.getElementById((i+1).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i+1).toString()).classList.value=''
                document.getElementById((i+1).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i+1).toString()).classList.value=''
                document.getElementById((i+1).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i-1).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i-1).toString()).classList.value=''
                document.getElementById((i-1).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i-1).toString()).classList.value=''
                document.getElementById((i-1).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i-1).toString()).classList.value=''
                document.getElementById((i-1).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i+11).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i+11).toString()).classList.value=''
                document.getElementById((i+11).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i+11).toString()).classList.value=''
                document.getElementById((i+11).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i+11).toString()).classList.value=''
                document.getElementById((i+11).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i-11).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i-11).toString()).classList.value=''
                document.getElementById((i-11).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i-11).toString()).classList.value=''
                document.getElementById((i-11).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i-11).toString()).classList.value=''
                document.getElementById((i-11).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i+9).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i+9).toString()).classList.value=''
                document.getElementById((i+9).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i+9).toString()).classList.value=''
                document.getElementById((i+9).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i+9).toString()).classList.value=''
                document.getElementById((i+9).toString()).classList.toggle("lightit")
                break;
        }
        switch( document.getElementById((i-9).toString()).classList.toString()) {
            case 'lightit':
                document.getElementById((i-9).toString()).classList.value=''
                document.getElementById((i-9).toString()).classList.toggle("light-on1")
                break;
            case 'light-on1':
                document.getElementById((i-9).toString()).classList.value=''
                document.getElementById((i-9).toString()).classList.toggle("light-on2")
                break;
            case 'light-on2':
                document.getElementById((i-9).toString()).classList.value=''
                document.getElementById((i-9).toString()).classList.toggle("lightit")
                break;
        }
    }

}  
}
