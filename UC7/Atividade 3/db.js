const path = require('path');
const { createHash } = require('crypto');
const mysql = require('mysql2/promise');

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

async function autenticar(dados) {
    const usuario = texto(dados?.usuario);
    const senha = dados?.senha;
    if (!usuario || usuario.length > 100 || typeof senha !== 'string' || !senha || senha.length > 128) {
        erroValidacao('Informe usuário e senha válidos');
    }
    
    const hash = createHash('md5').update(senha, 'utf8').digest('hex');
    const [usuarios] = await pool.execute(
        'SELECT id, usuario  FROM usuarios WHERE usuario = ? AND senha = ? LIMIT 1', [usuario, hash]
    );
    if (usuarios.length === 0) {
        erroValidacao('Usuário ou senha inválidos');
    }

    return usuarios[0]
}

module.exports = {
    autenticar,
    fechar: () => pool.end()
};