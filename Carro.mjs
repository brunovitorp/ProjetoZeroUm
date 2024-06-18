// o import deixa a classe disponível para importação em outros arquivos
export class Carro {
    // usamos o construtor para inicializar as propriedades do carro
    constructor(marca, modelo, ano, cor) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
      this.velocidade = 0; // Propriedade para manter a velocidade atual do carro
    }
  
    // Método para acelerar o carro
    acelerar(incremento) {
      this.velocidade += incremento;
      console.log(`Acelerando... A nova velocidade é ${this.velocidade} km/h.`);
    }
  
    // Método para frear o carro
    frear(decremento) {
      this.velocidade -= decremento;
      if (this.velocidade < 0) this.velocidade = 0;
      console.log(`Freando... A nova velocidade é ${this.velocidade} km/h.`);
    }
  
    // Método para obter informações sobre o carro
    informacoes() {
      console.log(`Carro: ${this.marca} ${this.modelo} (${this.ano}), Cor: ${this.cor}, Velocidade atual: ${this.velocidade} km/h.`);
    }
  }
  