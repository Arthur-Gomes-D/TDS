const formLogin = document.getElementById('formLogin');
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const entrar = document.getElementById('entrar');
const mensagemLogin = document.getElementById('mensagemLogin');
let enviando = false;
formLogin.addEventListener('submit', async evento => {
    evento.preventDefault();
    if (enviando) return;
    enviando = true;
    entrar.disabled = true;
    mensagemLogin.textContent = 'Verificando acesso...';
    try {
        const resposta = await window.auth.login({
            usuario: usuario.value.trim(),
            senha: senha.value
        });
        if (!resposta.ok) {
            mensagemLogin.textContent = resposta.erro;
            senha.value = '';
            senha.focus();
            return;
        }
        senha.value = '';
        window.auth.abrirCadastro();
    } catch {
        senha.value = '';
        mensagemLogin.textContent = 'Não foi possível entrar. Tente novamente.';
    } finally {
        enviando = false;
        entrar.disabled = false;
    }
});