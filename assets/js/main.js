/*
ESSE CODIGO É A MINHA RESOLUÇÃO DA ATIVIDADE DO CURSO
A RESOLUÇÃO QUE O PROFESSOR UTILIZOU ESTA NO REPOSITORIO DO CURSO NA SEÇÃO#2 / AULA07 
*/

function imcForm(){

    // VARIAVEIS PARA SELECIONAR AS SEÇÕES DENTRO DO HTML
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultadoImc');

    //FUNÇÃO PARA CALCULAR O IMC
    function calculimc(peso, altura){
        return peso / (altura * altura);
    }

    //FUNÇÃO QUE RECEBE OS VALORES EE EXECUTA A LOGICA DO PROGRAMA
    function recebeImc(evento){
        evento.preventDefault();


        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        const pesoValue = Number(peso.value).toFixed(2);
        const alturaValue = Number(altura.value).toFixed(2);
        const imc = calculimc(pesoValue, alturaValue).toFixed(2);
        let resultadoBg = document.querySelector('#ImcResultado');
        let resultadoImc;
        
        // ESTA PARTE SERVE PARA VERIFICAR SE OS DOIS VALORES (PESO E ALTURA) ESTÃO ATENDENDO OS REQUISITOS, SE NENHUM DOS DOIS ESTIVER ELE RETORNA A MENSAGEM DE ERRO
        if ((isNaN(alturaValue) && isNaN(pesoValue)) || (alturaValue < 0.55 || alturaValue > 3) && (pesoValue < 20 || pesoValue > 400)){
            resultado.innerHTML = `<p> Altura e Peso invalidos </p>`;
            resultadoBg.style.backgroundColor = '#FF0000';
            resultadoBg.style.color = '#FFFFFF';

            return;
        }

        // ESTA PARTE SERVE PARA VERIFICAR SE O VALOR (PESO) ESTA ATENDENDO OS REQUISITOS, SE NÃO ESTIVER ELE RETORNA A MENSAGEM DE ERRO
        if (isNaN(pesoValue) || pesoValue < 20 || pesoValue > 400){
            resultado.innerHTML = `<p> Peso inválido </p>`;
            resultadoBg.style.backgroundColor = '#FF0000';
            resultadoBg.style.color = '#FFFFFF';
            
            return;
        }

        // ESTA PARTE SERVE PARA VERIFICAR SE O VALOR (ALTURA) ESTA ATENDENDO OS REQUISITOS, SE NÃO ESTIVER ELE RETORNA A MENSAGEM DE ERRO
        if (isNaN(alturaValue) || alturaValue < 0.55 || alturaValue > 3){
            resultado.innerHTML = `<p> Altura inválida </p>`;
            resultadoBg.style.backgroundColor = '#FF0000';
            resultadoBg.style.color = '#FFFFFF';
            
            return;
        }
        

        //CASO OS DOIS VALORES ESTEJAM CORRETOS ELE IRA CALCULAR E VERIFICAR A SITUAÇÃO DA PESSOA
        if (imc < 18.5){
            resultadoImc = 'Abaixo do Peso';
            resultadoBg.style.backgroundColor = '#FFFF00';
        } else if (imc >= 18.5 && imc <= 24.9){
            resultadoImc = 'Peso Normal';
            resultadoBg.style.backgroundColor = '#00FF00';
        } else if (imc >= 25 && imc <= 29.9){
            resultadoImc = 'Sobrepeso';
            resultadoBg.style.backgroundColor = '#FFFF00';
        } else if (imc >= 30 && imc <= 34.9){
            resultadoImc = 'Obesidade grau 1';
            resultadoBg.style.backgroundColor = '#FFA500';
        } else if (imc >= 35 && imc <= 39.9){
            resultadoImc = 'Obesidade grau 2';
            resultadoBg.style.backgroundColor = '#FF8C00';
        } else if (imc > 40){
            resultadoImc = 'Obesidade grau 3';
            resultadoBg.style.backgroundColor = '#FF4500';
        }

        resultado.innerHTML = `
            <p> Seu IMC é ${imc} e você está: ${resultadoImc} </p>
        `;
    }

    form.addEventListener('submit', recebeImc);
}

imcForm();
