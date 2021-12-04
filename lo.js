window.onload=function () {
    var ctc=1;
    var cellArray = [];
    var helpArray = [];
    var hintArray =[];
    var badmoveArray=[];
    var win=false;
	cellArray = document.getElementsByClassName("lightit");
    newgame = document.getElementById("restart")
    help = document.getElementById("hint")
    ch1=document.getElementById("change1")
    ch2=document.getElementById("change2")
    ch3=document.getElementById("change3")
    fakewin=document.getElementById("showwin")

    newgame.onclick = e => restart()
    help.onclick = e => Help()  
    ch1.onclick =e => change1()
    ch2.onclick =e => change2()
    ch3.onclick =e => change3()
    fakewin.onclick =e =>showwin()
    ch1.classList.toggle('active');

    start()
    function start(){
        for(var i = 0, j = cellArray.length; i < j; i++){
        cellArray[i].removeEventListener("click", lightClick);
		cellArray[i].addEventListener("click", lightClick);
    }
        RandomLights()
    }
    function restart(e){
        NewBoard()
    }

    function NewBoard(){
        helpArray=[];
        hintArray=[];
        badmoveArray=[];
        for(var i=1; i<6;i++){
            for(var j=1; j<6;j++)
            {
                document.getElementById((i*10)+j).className="lightit"
            }
        }
        RandomLights()
    }

    function RandomLights()
    {
        var moves = randomInteger(5,15)
        console.log("Number of moves:" ,moves)
        for(var n=0; n<moves;n++)
        {
            var x=randomInteger(1,5)
            var y=randomInteger(1,5)
            var i_d=y*10+x
            console.log("id of the move: ",i_d) 
            helpArray.unshift(i_d)
            helpArray.unshift(i_d)
            GenerateClicks(i_d)        
        }
        console.log("Help Array :",helpArray)


    function GenerateClicks(i){
    //#region generate clicks
    console.log("Click",i)
    if(document.getElementById(i).className == "lightit")
        {
            document.getElementById(i).className="light-on1"
        }
        else{
        if(document.getElementById(i).className == "light-on1")
        {
            document.getElementById(i).className="light-on2"
        }
        else{
        if(document.getElementById(i).className == "light-on2")
        {
            document.getElementById(i).className="lightit"
        }
    }}
    //#region First shape
    if(ctc==1){
        
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
    //#endregion
    }}

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    function Help()
    {   
        if(badmoveArray.length>0){
            var p =badmoveArray[0]
            document.getElementById(p).classList.add("hoverbutton")
            console.log("Bad move Array Hint:",badmoveArray)
        }
        else{
        if(helpArray.length<1){
            helpArray=hintArray;
            hintArray=[];
        }
        console.log("Array:" ,helpArray)
        var p=helpArray[0]
        helpArray.shift()
        hintArray.push(p)
        console.log("help: ", p, "HelpArray:", helpArray, "HintArray: ", hintArray)
        RemoveHelp()
        document.getElementById(p).classList.add("hoverbutton")}
   }
   function RemoveHelp(){
    for(var i=1; i<6;i++){
        for(var j=1; j<6;j++)
        {
            document.getElementById((i*10)+j).classList.remove("hoverbutton")
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
        RemoveHelp()
        if(badmoveArray[0]==this.id.toString())
        {
            badmoveArray.shift()
        }
        else{
        if(helpArray[0]!=this.id.toString() && hintArray[hintArray.length-1]!=this.id.toString())
        {
            badmoveArray.unshift(this.id)
            badmoveArray.unshift(this.id)
        }}
        console.log("After click: Help:",helpArray,"bad move:",badmoveArray)
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
    checkwin()
} 

function checkwin(){
    win=true;
    for(var i=1; i<6;i++){
        for(var j=1; j<6;j++)
        {
            if(document.getElementById((i*10)+j).className!="lightit")
            {
                win=false
            }
        }
    }
    if(win==true)
    {
       showwin()
    }
}
function showwin(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          start()
        }
    }   
}
}
