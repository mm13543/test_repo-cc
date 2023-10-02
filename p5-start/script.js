//WEEK3
let myArray = ["Hello", "this", "is", "Mahavarshini", "Madhan"]

class shape{
  constructor(_x, _y, _w, _h, _speedX, _speedY){
    this.x = _x
    this.y = _y
    this.w = _w
    this.h = _h
    this.speedX = _speedX
    this.speedY = _speedY
  }

  update(){
    this.x += this.speedX
    this.y += this.speedY
  }

  display() { //method
    fill(0,0,255)
    rect(this.x, this.y, this.w, this.h)
  }
}

let myRect = new shape(200,100,50,50,3,1)

//object
// let myRect = {
//   x: 200, //key:value
//   y: 100,
//   w: 50,
//   h: 50,
//   speedX: 3,
//   speedY: 1
// }

function setup(){
  createCanvas(600,600)
  console.log("Hi!")
  console.log(sum(30,20))
  console.log(pythagorean(3,5))
  console.log(myArray)
  console.log(myArray[3])
  console.log(myArray.length)
}

function draw(){
  background(200)
  paintItRed(ellipse, 300, 300, 100, 100)
  paintItRed(rect, 10, 10, 200, 100)

  // myRect.x += myRect.speedX
  // myRect.y += myRect.speedY
  // fill(0,0,255)
  // rect(myRect.x, myRect.y, myRect.w, myRect.h)

  myRect.display()
  myRect.update()
}

function paintItRed(shape, x, y, w, h){
  fill(255,0,0)
  shape(x, y, w, h)
}

function sum(a,b){
  return (a+b)
}

function pythagorean(a,b){
  let cSqr = pow(a,2) + pow(b,2)
  let c = sqrt(cSqr)
  return c
}



//WEEK2
// let x = 300
// let y = 200
// let speedX = 5

// function setup() {
//   createCanvas(600, 600)
//   frameRate(60)
// }

// function draw() {
//   background(100)

//   if(x>600){
//     speedX = -5
//   }
//   if(x<0){
//     speedX = 5
//   }
//   x += speedX
//   ellipse(mouseX, mouseY, 200, 200)

//   for(let i=0; i<100; i++){
//     fill(i*2,200,255-i*2)
//     ellipse(x,y=i*5,50,50)
    
//   }
  
// }

//   function keyPressed(){
//     console.log(keyCode)
//     if(keyCode===38){
//       y -= 10
//     }
//     if(keyCode===40){
//       y +=10
//     }
//   }