const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    let flag=JSON.parse(this.response);
    for(i=0;i<flag.length;i++){
        console.log(flag[i].flags.png)
    }
}