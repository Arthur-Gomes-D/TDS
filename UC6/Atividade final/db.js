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
    const telefone = dados.telefone
    if (!nome || nome.length > 100) falhar('Nome inválido.');
    if (email.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        falhar('E-mail inválido')
    }
    if (telefone.length > 15 || !/^\([0-9]{2}\)\s9[0-9]{4}\-[0-9]{4}$/.test(telefone)) {
        falhar('Telefone inválido')
    }
    return {nome, email, telefone}
}

async function listar() {
    const [linhas] = await pool.execute(
        'SELECT id, nome, email, telefone FROM alunos ORDER BY id DESC'
    )
    return linhas
    
}

async function criar(dados) {
    const {nome, email, telefone} = validarAluno(dados)
    const [resultado] = await pool.execute(
        'INSERT INTO alunos (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]
    );
    return { id:resultado.insertId }
}

async function atualizar(dados) {
    validarId(dados?.id);
    const { nome, email, telefone} = validarAluno(dados)
    const [r] = await pool.execute(
        'UPDATE alunos SET nome = ?, email = ?, telefone = ? WHERE id = ?', [nome, email, telefone, dados.id]
    )
    if (!r.affectedRows) {
        falhar('Aluno não encontrado');
    }
}
async function excluir(id) {
    validarId(id);
    const [r] = await pool.execute(
        'DELETE FROM alunos WHERE id = ?', [id]
    );
    if (!r.affectedRows) {
        falhar('Aluno não encontrado. ')
    }
    return { id };
}

function fechar() {
    return pool.end()
}

module.exports = {listar, criar, atualizar, excluir, fechar};