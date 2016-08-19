 function myFunction() {
        var y = document.getElementById("txt1").value;
        var z = document.getElementById("txt2").value;
        var demo = document.getElementById("demo");
        if (+y > +z){
        	demo.innerHTML = y + "  is bigger";
        }
        else{
        	demo.innerHTML = z+ " is bigger";
        }
        
        // var x = +y + +z;
        // document.getElementById("demo").innerHTML = x;
}