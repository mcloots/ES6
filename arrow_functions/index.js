//eliminate boiler plate code from callback function

function add(...nums) {
    //First without arrow functions
    // let total = nums.reduce(function (x,y) {
    //     return x+y;
    // });

    //Arrow function
    //Fat arrow
    //Simplify function scope
    //Make using of this keyword much more straightforward
    let total = nums.reduce((x,y) => x+y);
    console.log(total);
}

add(4, 5, 7, 8, 12);

//https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/

let bunny = {
    name: 'Usagi1',
    showName: function() {
      console.log(this.name);
    }
  };
  
  bunny.showName(); // Usagi

  let bunny2 = {
    name: 'Usagi2',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function() {
      this.tasks.forEach(function(task) {
        console.log(this.name + " wants to " + task);
      });
    }
  };
  
  bunny2.showTasks();

  //Why does ‘this’ bind to the window object? 
  //Because ‘this’, always references the owner of the function it is in, 
  //for this case — since it is now out of scope — the window/global object.

  //1 Solution/fix in ES5
  //Create variable outside of the method's inner function
  //Within the showTasks function 'this' refers to the object's properties and values
  let bunny3 = {
    name: 'Usagi3',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function() {
      var _this = this;
      this.tasks.forEach(function(task) {
        console.log(_this.name + " wants to " + task); 
      });
    }
  };
  
  bunny3.showTasks();

   //2 Solution/fix in ES5
  //Use bind to attach the ‘this’ keyword that refers to the method to the method’s inner function.
  let bunny4 = {
    name: 'Usagi4',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function() {
      this.tasks.forEach(function(task) {
        console.log(this.name + " wants to " + task); 
      }.bind(this));
    }
  };

  bunny4.showTasks();


  //The ES6 arrow function fix it all
//   While in ES5 ‘this’ referred to the parent of the function, in ES6, arrow functions use lexical scoping — 
//   ‘this’ refers to it’s current surrounding scope and no further. 
//   Thus the inner function knew to bind to the inner function only, and not to the object’s method or the object itself.
  let bunny5 = {
    name: 'Usagi5',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function() {
      this.tasks.forEach((task) => {
        console.log(this.name + " wants to " + task); 
      });
    }
  };

  bunny5.showTasks();