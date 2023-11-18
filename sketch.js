function setup() {
  createCanvas(500, 500);
  background(0);

  var matrix = new Matrix(1, 2);
  var matrix2 = new Matrix(2, 1);
  console.log(matrix.data, matrix2.data);
  console.log(Matrix.multiply(matrix, matrix2).data);
  Matrix.add(matrix, matrix2);
  
}

function draw() {

}
