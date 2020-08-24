var d=1;
var e=0;
 for(var i=1; i<=6; i++ )
{
    var f='';
    if(i==1 || i==6)
    {
    for(var j=1; j<=13; j++)
    { 
     f=f+d;   
    }
    console.log(f);
}
else{
    var p='';
    for(var c=1; c<=13; c++ )
    {
     if(c==1 || c==13)
     {
      p=p+d;
     }
     else{
         p=p+e;
     }
    }console.log(p);
}
}
