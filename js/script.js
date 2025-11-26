// Quando a página carregar, define a data de hoje
window.onload = function() {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    document.getElementById('dataInicial').value = `${ano}-${mes}-${dia}`;
};

// Quando o formulário for enviado
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recarregar a página
    calcular();
});

// Função principal de cálculo
function calcular() {
    // Pegar os valores do formulário
    const dataInicial = document.getElementById('dataInicial').value;
    const quantidadeDias = parseInt(document.getElementById('quantidadeDias').value);
    const tipoPrazo = document.querySelector('input[name="tipoPrazo"]:checked').value;

    // Verificar se os campos estão preenchidos
    if (!dataInicial || !quantidadeDias) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Criar objeto de data
    const dataInicio = new Date(dataInicial + 'T12:00:00');
    let dataFinal;

    // Calcular conforme o tipo escolhido
    if (tipoPrazo === 'corridos') {
        dataFinal = calcularDiasCorridos(dataInicio, quantidadeDias);
    } else {
        dataFinal = calcularDiasUteis(dataInicio, quantidadeDias);
    }

    // Mostrar o resultado
    mostrarResultado(dataInicio, quantidadeDias, tipoPrazo, dataFinal);
}

// Calcular dias corridos (soma todos os dias)
function calcularDiasCorridos(dataInicio, dias) {
    const dataResultado = new Date(dataInicio);
    dataResultado.setDate(dataResultado.getDate() + dias);
    return dataResultado;
}

// Calcular dias úteis (pula sábados e domingos)
function calcularDiasUteis(dataInicio, dias) {
    let dataAtual = new Date(dataInicio);
    let diasContados = 0;

    // Enquanto não contar todos os dias úteis
    while (diasContados < dias) {
        dataAtual.setDate(dataAtual.getDate() + 1);
        const diaSemana = dataAtual.getDay();
        
        // Se não for sábado (6) nem domingo (0), conta como dia útil
        if (diaSemana !== 0 && diaSemana !== 6) {
            diasContados++;
        }
    }

    return dataAtual;
}

// Formatar data para exibição
function formatarData(data) {
    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();
    const diaSemana = dias[data.getDay()];

    return `${dia} de ${mes} de ${ano} (${diaSemana})`;
}

// Mostrar o resultado na tela
function mostrarResultado(dataInicio, dias, tipo, dataFinal) {
    document.getElementById('showDataInicial').textContent = formatarData(dataInicio);
    document.getElementById('showPrazo').textContent = dias + (dias === 1 ? ' dia' : ' dias');
    document.getElementById('showTipo').textContent = tipo === 'corridos' ? 'Dias Corridos' : 'Dias Úteis';
    document.getElementById('showDataFinal').textContent = formatarData(dataFinal);

    // Mostrar a div de resultado
    document.getElementById('resultado').classList.add('mostrar');
}