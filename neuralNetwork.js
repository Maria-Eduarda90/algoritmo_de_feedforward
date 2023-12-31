function sigmoid(x){
    return 1 / (1 + Math.exp(-x));
}

class NeuralNetwork {
    constructor(i_nodes, h_nodes, o_nodes){
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new Matrix(h_nodes, 1);
        this.bias_ih.randomize();
        this.bias_ho = new Matrix(o_nodes, 1);
        this.bias_ho.randomize();

        this.weights_ih = new Matrix(this.h_nodes, this.i_nodes);
        this.weights_ih.randomize();

        this.weights_ho = new Matrix(this.o_nodes, this.h_nodes);
        this.weights_ho.randomize();
    }

    feedforward(arr){
        let input = Matrix.arrayToMatrix(arr);
        let hidden = Matrix.multiply(this.weights_ih, input);
        hidden = Matrix.add(hidden, this.bias_ih);
        hidden.map(sigmoid);

        let output = Matrix.multiply(this.weights_ho, hidden);
        output = Matrix.add(output, this.bias_ho);
        output.map(sigmoid);

        output.print();
    }
}