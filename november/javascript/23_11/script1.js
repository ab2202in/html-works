function fib(n){
    n= document.getElementById("num").value;
    let a=0, b=1,c;
    document.write(a);
    document.write(",");
    document.write(b);
    document.write(",");
    for (i=2;i<n;i++){
        c=a+b;
    document.write(c);
    document.write(",");
    a=b;
    b=c;

    }
}

