function setup() {
  createCanvas(windowWidth, windowHeight);
  background(41, 41, 41);
}

function draw(){

translate(width / 2, height / 2);
    
// En rectangle  // let v = createVector(random(-1000, 1000), random(-1000, 1000));
    
    
    // En cercle - 1er objet
    
    v = p5.Vector.random2D();   

    v.mult(random(50, 300));
    
    strokeWeight(1);
    stroke('#DDB9D2');
    line(0, 0, v.x, v.y);
    
    
    
   // 2eme objet
    
    translate(200, 200);
    
    v = p5.Vector.random2D();   

    v.mult(random(50, 500));
    
    strokeWeight(1);
    stroke('#A232FF');
    line(0, 0, v.x, v.y);
    
   
    // 3eme objet
    
    translate(500, 300);
    
    v = p5.Vector.random2D();   

    v.mult(random(100, 1000));
    
    strokeWeight(1);
    stroke('#32FFC1');
    line(0, 0, v.x, v.y);
    
    
     // 4eme objet
    
    translate(-200, -100);
    
    v = p5.Vector.random2D();   

    v.mult(random(200, 100));
    
    strokeWeight(1);
    stroke('#B7EF2D');
    line(0, 0, v.x, v.y);
    
    
    // 5eme objet
    
    translate(-1200, -750);
    
    v = p5.Vector.random2D();   

    v.mult(random(200, 100));
    
    strokeWeight(1);
    stroke('#B7EF2D');
    line(0, 0, v.x, v.y);
    
    
    // 6eme objet
    
    translate(-100, -300);
    
    v = p5.Vector.random2D();   

    v.mult(random(100, 1000));
    
    strokeWeight(1);
    stroke('#32FFC1');
    line(0, 0, v.x, v.y);
    
    
    // 7eme objet
    
    translate(200, 500);
    
    v = p5.Vector.random2D();   

    v.mult(random(50, 500));
    
    strokeWeight(1);
    stroke('#A232FF');
    line(0, 0, v.x, v.y);
    
    
    // 8eme objet
    
    translate(280, 700);
    
    v = p5.Vector.random2D();   

    v.mult(random(100, 750));
    
    strokeWeight(1);
    stroke('#FFE788');
    line(0, 0, v.x, v.y);
    
    
    // 9eme objet
    
    translate(450, -990);
    
    v = p5.Vector.random2D();   

    v.mult(random(10, 600));
    
    strokeWeight(1);
    stroke('#FFE788');
    line(0, 0, v.x, v.y);
    
}



