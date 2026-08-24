"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DispositivoEletronico {
    marca;
    _nivelBateria;
    constructor(marca, carga) {
        this.marca = marca;
        if (carga >= 0 && carga <= 100) {
            this._nivelBateria = carga;
        }
        else {
            throw new Error("Valor invalido de carga");
        }
    }
}
class Smartphone extends DispositivoEletronico {
    constructor(marca, carga) {
        super(marca, carga);
    }
    usaraAplicatico(consumo) {
        if (this._nivelBateria <= 0 || (this._nivelBateria - consumo) <= 0) {
            throw new Error("carga negativa");
        }
        else {
            this._nivelBateria -= consumo;
            console.log(`carga %${this._nivelBateria}`);
        }
    }
}
const celular = new Smartphone("Nokia", 100);
celular.usaraAplicatico(1);
celular.usaraAplicatico(1);
celular.usaraAplicatico(1);
celular.usaraAplicatico(1);
celular.usaraAplicatico(1);
celular.usaraAplicatico(5);
celular.usaraAplicatico(5);
celular.usaraAplicatico(5);
celular.usaraAplicatico(5);
celular.usaraAplicatico(5);
celular.usaraAplicatico(10);
celular.usaraAplicatico(10);
celular.usaraAplicatico(10);
celular.usaraAplicatico(10);
celular.usaraAplicatico(10);
celular.usaraAplicatico(49);
