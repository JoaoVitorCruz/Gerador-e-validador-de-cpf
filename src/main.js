import { ValidaCpf } from './modules/ValidaCpf'
import './assets/css/style.css';

const cpfGerado = document.querySelector('.gerar input')
const btnGeraCpf = document.querySelector('.gerar .btn')
const validarCpf = document.querySelector('.validar input')
const btnValidarCpf = document.querySelector('.validar .btn') 
const resultadoValidacao = document.querySelector('.validar .resultado')

cpfGerado.value = ValidaCpf.geraCpf()

btnGeraCpf.addEventListener('click', () => {
    cpfGerado.value = ValidaCpf.geraCpf()
})

btnValidarCpf.addEventListener('click', ()=>{
    const cpf = new ValidaCpf(validarCpf.value)
    const isValid = cpf.valida()
    let resultado 
    
    console.log(cpf)

    if (cpf.cpfLimpo.length === 9 && cpf.digitos.length == 2) {
    
        if(isValid){
            resultado = '<h2 class="success">Valido!</h2>'
        }else {
            resultado = '<h2 class="fail">Invalido!</h2>'
        }
    } else {
        resultado = "<h2 class='warning'>Confira o CPF inserido</h2>"   
    }
    
    resultadoValidacao.innerHTML = resultado
})