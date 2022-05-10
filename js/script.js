var campoTexto = document.getElementById('textfield')
var areaResultado = document.getElementById('result-area')

var btnCriptografar = document.getElementById('btn-cripto')
var btnDescriptografar = document.getElementById('btn-descripto')

btnCriptografar.addEventListener('click', function () {
  executar('criptografar')
})

btnDescriptografar.addEventListener('click', function () {
  executar('descriptografar')
})
