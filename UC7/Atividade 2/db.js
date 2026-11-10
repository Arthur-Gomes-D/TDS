const path = require('path');
const { createHash } = require('crypto');
const mysql = require('mysql/promise');

require('dotenv').config({
    path: path.join(__dirname, '.env'),
    quiet: true
})

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'escola_app',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'escola_electron_simples',
    charset: 'utf8mb4',
    connectionLimit: 3,
    connectTimeout: 5000
})

function erroValidacao(mensagem) {
    const erro = new Error(mensagem);
    erro.code = 'VALIDACAO';
    throw erro
}

function texto(valor) {
    return typeof valor === 'string' ? valor.trim() : '';
}

function numero(valor) {
    return typeof valor === 'number' ? valor:Number(texto(valor));
}

function validarId(id, mensagem = 'Identificador inválido') {
    if (!Number.isInteger(id) || id < 1 || id > 4294967295) {
        erroValidacao(mensagem);
    }
    return id;
}

