window.onload=function () {
    var gameSize = 5;
    var ctc=1;
    var cellArray = [];
    var win=false;
	cellArray = document.getElementsByClassName("lightit");
    newgame = document.getElementById("restart")
    help=document.getElementById("hint")
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

    function NewBoard(){
        for(var i=1; i<6;i++){
            for(var j=1; j<6;j++)
            {
                document.getElementById((i*10)+j).className="lightit"
            }
        }
    }

//#region Change shape buttons
    function change1(e)
    {
        ctc=1;
        ch3.classList.value=''
        ch2.classList.value=''
        ch1.classList.toggle('active');
        NewBoard()
    }
    function change2(e)
    {
        ctc=2;
        ch1.classList.value=''
        ch3.classList.value=''
        ch2.classList.toggle('active');
        NewBoard()
    }
    function change3(e)
    {
        ctc=3;
        ch1.classList.value=''
        ch2.classList.value=''
        ch3.classList.toggle('active');
        NewBoard()
    }
//#endregion
    function lightClick() {
//#region Middle
        if(this.className == "lightit")
        {
            this.className="light-on1"
        }
        else{
        if(this.className == "light-on1")
        {
            this.className="light-on2"
        }
        else{
        if(this.className == "light-on2")
        {
            this.className="lightit"
        }
    }
    }
//#endregion
//#region First shape
    if(ctc==1){
        
        i=+this.id;
        if(i-10 > 10){
        switch( document.getElementById((i-10).toString()).className) {
            case 'lightit':
                document.getElementById((i-10).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i-10).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i-10).toString()).className="lightit"
                break;
        }}
        if((i-1)%10 > 0){
        switch( document.getElementById((i-1).toString()).className) {
            case 'lightit':
                document.getElementById((i-1).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i-1).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i-1).toString()).className="lightit"
                break;
        }}
        if((i+1)%10<6){
        switch( document.getElementById((i+1).toString()).className) {
            case 'lightit':
                document.getElementById((i+1).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i+1).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i+1).toString()).className="lightit"
                break;
        }}
        if((i+11)<56 && (i+11)%10<6){
        switch( document.getElementById((i+11).toString()).className) {
            case 'lightit':
                document.getElementById((i+11).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i+11).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i+11).toString()).className="lightit"
                break;
        }}
        if((i+9)<56 && (i+9)%10<6 && (i+9)%10>0){
        switch( document.getElementById((i+9).toString()).className) {
            case 'lightit':
                document.getElementById((i+9).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i+9).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i+9).toString()).className="lightit"
                break;
        }}
    }
    //#endregion
//#region Second shape
    if(ctc==2){
        i=+this.id;
        if(i-10 > 10){
        switch( document.getElementById((i-10).toString()).className) {
            case 'lightit':
                document.getElementById((i-10).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i-10).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i-10).toString()).className="lightit"
                break;
        }}
        if((i-1)%10 > 0){
        switch( document.getElementById((i-1).toString()).className) {
            case 'lightit':
                document.getElementById((i-1).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i-1).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i-1).toString()).className="lightit"
                break;
        }}
        if((i+10)<56){
        switch( document.getElementById((i+10).toString()).className) {
            case 'lightit':
                document.getElementById((i+10).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i+10).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i+10).toString()).className="lightit"
                break;
        }}
        if((i+11)<56 && (i+11)%10<6){
        switch( document.getElementById((i+11).toString()).className) {
            case 'lightit':
                document.getElementById((i+11).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i+11).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i+11).toString()).className="lightit"
                break;
        }}
        if((i-9)>10 && (i-9)%10<6 && (i-9)%10>0){
        switch( document.getElementById((i-9).toString()).className) {
            case 'lightit':
                document.getElementById((i-9).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i-9).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i-9).toString()).className="lightit"
                break;
        }}
    }
    //#endregion
//#region Third shape 
    if(ctc==3)
    {
        i=+this.id;
        if((i+1)%10 <6 ){
        switch( document.getElementById((i+1).toString()).className) {
            case 'lightit':
                document.getElementById((i+1).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i+1).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i+1).toString()).className="lightit"
                break;
        }}
        if((i-1)%10>0){
        switch( document.getElementById((i-1).toString()).className) {
            case 'lightit':
                document.getElementById((i-1).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i-1).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i-1).toString()).className="lightit"
                break;
        }}
        if((i+11)<56 && (i+11)%10<6){
        switch( document.getElementById((i+11).toString()).className) {
            case 'lightit':
                document.getElementById((i+11).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i+11).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i+11).toString()).className="lightit"
                break;
        }}
        if((i-11)>10 && (i-11)%10>0 && (i-11)%10<7){
        switch( document.getElementById((i-11).toString()).className) {
            case 'lightit':
                document.getElementById((i-11).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i-11).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i-11).toString()).className="lightit"
                break;
        }}
        if((i+9)<56 && (i+9)%10<6 && (i+9)%10>0){
        switch( document.getElementById((i+9).toString()).className) {
            case 'lightit':
                document.getElementById((i+9).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i+9).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i+9).toString()).className="lightit"
                break;
        }}
        if((i-9)>10 && (i-9)%10<6 && (i-9)%10>0){
        switch( document.getElementById((i-9).toString()).className) {
            case 'lightit':
                document.getElementById((i-9).toString()).className="light-on1"
                break;
            case 'light-on1':
                document.getElementById((i-9).toString()).className="light-on2"
                break;
            case 'light-on2':
                document.getElementById((i-9).toString()).className="lightit"
                break;
        }}
    }
    //#endregion

} 
var modal = document.getElementById("myModal");

help.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
