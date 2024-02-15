function validateForm() {
    var senha = document.forms["registrationForm"]["senha"].value;
    var confirmarSenha = document.forms["registrationForm"]["confirmar_senha"].value;

    if (senha !== confirmarSenha) {
        alert("A senha e a confirmação de senha não correspondem.");
        return false;
    }
    return true;
}

function mostrarOcultarSenha() {
    var senhaInput = document.getElementById("senha");
    var mostrarSenhaCheckbox = document.getElementById("mostrarSenha");
    var iconeMostrarSenha = document.getElementById("iconeMostrarSenha");

    // Alterna a visibilidade da senha
    senhaInput.type = mostrarSenhaCheckbox.checked ? "text" : "password";

    // Alterna o ícone com base na visibilidade da senha
    iconeMostrarSenha.innerHTML = senhaInput.type === "password" ? '<i class="ri-eye-line"></i>' : '<i class="ri-eye-off-line"></i>';
}

var cpfMask = IMask(cpfInput, maskOptionsCpf);

var numeroInput = document.getElementById('numero');
var maskOptionsNumero = {
    mask: '(00) 00000-0000' // Define a máscara como (00) 00000-0000
};
var numeroMask = IMask(numeroInput, maskOptionsNumero);

var dataInput = document.getElementById('data_nascimento');
var maskOptionsData = {
    mask: '00/00/0000'
};
var dataMask = IMask(dataInput, maskOptionsData);
//