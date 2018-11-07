function consolePrint(){
  console.log("Hello, World");
}

function alertPrint(){
  alert("Hello, World!");
}

function pprint(){
  var p = document.getElementById("hello");
  p.innerHTML = "Hello, World!";
}

function nameHello(){
  var name = prompt("Please Type Your Name Here")
  var p = document.getElementById("stranger");
  p.innerHTML = "Hello, " + name;
}
