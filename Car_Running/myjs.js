var y;
var m=0;
function start()
{
 y=setInterval(run,100);
 
  function run()
  {
      
      console.log(m);
        if(m==1200)
        {
            clearInterval(y);           
            m=0;
        }
        
        else
        {
            m=m+10;
            document.getElementById("img").style.visibility="visible";
            var x=document.getElementById("img");
            x.style.marginLeft=m+'px';
        }
   }

}

function stop()
{
    clearInterval(y)
}



