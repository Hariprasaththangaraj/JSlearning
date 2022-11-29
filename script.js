var a = 200;



function msg(){
   var data = document.writeln("Hellow JavaScript!!!")
  //  alert("Hellow")
    document.writeln(a);
}

function b(){
    document.writeln(a + "Hell");
    window.value = 900 // We can access this variable as global variable for that we can use window.value
}


function c(){
    document.write(window.value);
}


msg();
b();
c();