import { Carro } from './Carro.mjs';

// Criando uma instância
const meuCarro = new Carro('Toyota', 'Corolla', 2020, 'Prata');

meuCarro.informacoes(); 
meuCarro.acelerar(50); 
meuCarro.frear(20);     
meuCarro.informacoes(); 
