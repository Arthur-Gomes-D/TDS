const caminho = require('path')

require('dotenv').config({
    path: caminho.join(__dirname, '.env'), quiet:true
})

const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 3,
    connectTimeout: 5000
})

function falhar(texto) {
    const erro = new Error(texto);
    erro.code = 'VALIDACAO'
    throw erro
}
function validarId(id) {
    if (!Number.isInteger(id) || id <= 0) {
        falhar('Identificar inválido.')
    }
}

function validarAluno(dados) {
    const nome = typeof dados?.nome === 'string' ? dados.nome.trim() : '';
    const email = typeof dados?.email === 'string' ? dados.email.trim() : '';
    if (!nome || nome.length > 100) falhar('Nome inválido.');
    if (email.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        falhar('E-mail inválido')
    }
    return {nome, email}
}

async function listar() {
    const [linhas] = await pool.execute(
        'SELECT id, nome, email FROM alunos ORDER BY id DESC'
    )
    return linhas
}

async function criar(dados) {
    const {nome, email} = validarAluno(dados)
    const [resultado] = await pool.execute(
        'INSERT INTO alunos (nome, email) VALUES (?, ?)', [nome, email]
    );
    return { id:resultado.insertId }
}

module.exports = {listar, criar};