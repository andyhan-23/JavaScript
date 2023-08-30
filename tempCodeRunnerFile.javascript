function example() {
    var x = 10;
    let y = 20;
  
    if (true) {
      var x = 30;
      let y = 40;
      console.log(x) 
      console.log(y) 
    }
  
    console.log(x); 
    console.log(y); 
  }
  example();