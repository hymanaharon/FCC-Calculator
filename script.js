$(document).ready(function(){
  $(document).keyup()
var arr = []; //empty array to store click inputs
var string = "";

function update(){              //update function to show results in display
  string= arr.join("");
   $("#display").html(string);
};

  $("th").click(function() {
    if(this.id==="reset"){
        arr=[];
        $("#display").html("0.");
        console.log(arr);
      }
    else if(this.id==="undo-last"){
          arr.pop();
          console.log(arr);
          update();
        }

  });
  $("td").click(function() {        // click functions
  if(this.id==="0"){
      arr.push(0);
      console.log(arr);
    }
  else if(this.id==="1"){
    arr.push(1);
    console.log(arr);
  }
  else if(this.id==="2"){
    arr.push(2);
    console.log(arr);
  }
  else if(this.id==="3"){
    arr.push(3);
    console.log(arr);
  }
  else if(this.id==="4"){
    arr.push(4);
    console.log(arr);
  }
  else if(this.id==="5"){
    arr.push(5);
    console.log(arr);
  }
  else if(this.id==="6"){
    arr.push(6);
    console.log(arr);
  }
  else if(this.id==="7"){
    arr.push(7);
    console.log(arr);
  }
  else if(this.id==="8"){
    arr.push(8);
    console.log(arr);
  }
  else if(this.id==="9"){
    arr.push(9);
    console.log(arr);
  }
  /*else if(this.id==="plus"){
    arr.push("+");
    console.log(arr);
  }
  else if(this.id==="minus"){
    arr.push("-");
    console.log(arr);
  }
  else if(this.id==="multiply"){
    arr.push("*");
    console.log(arr);
  }
  else if(this.id==="divide"){
    arr.push("/");
    console.log(arr);
  }*/
  else if(this.id==="decimal-point"){
    arr.push(".");
    console.log(arr);
  }
    update();
});

$("td").click(function() {
  var subTotal = Math.round(eval(string) * 100) / 100;
  if(this.id==="total"){
       $("#display").html(subTotal);
arr=[subTotal];

  }
  else if(this.id==="multiply"){
    arr.push("*");
      $("#display").html(subTotal);
  }else if(this.id==="divide"){
    arr.push("/");
      $("#display").html(subTotal);
  }else if(this.id==="minus"){
    arr.push("-");
      $("#display").html(subTotal);
  }else if(this.id==="plus"){
    arr.push("+");
      $("#display").html(subTotal);
  }
});





























});
