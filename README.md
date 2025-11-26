# ⚖️ Calculadora de Prazos Processuais

> Ferramenta web para cálculo de prazos jurídicos desenvolvida durante meus estudos iniciais em programação.

![Status](https://img.shields.io/badge/Status-Concluído-success)
![Licença](https://img.shields.io/badge/Licença-MIT-blue)

## Sobre o Projeto

A **Calculadora de Prazos Processuais** é meu primeiro projeto web funcional. A ideia surgiu da minha experiência na área jurídica, onde o cálculo de prazos é uma tarefa diária e essencial.

Decidi criar esta ferramenta para aplicar os conhecimentos que venho adquirindo em HTML, CSS e JavaScript, ao mesmo tempo em que resolvo um problema real do dia a dia jurídico.

Este projeto representa o início da minha jornada de transição do Direito para a Tecnologia.

## Funcionalidades

- Cálculo de prazos em dias corridos
- Cálculo de prazos em dias úteis (exclui finais de semana)
- Interface simples e responsiva
- Validação básica de formulários
- Resultado formatado com data por extenso

## Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e responsividade
- **JavaScript** - Lógica de cálculo e interatividade

## Estrutura do Projeto
```
calculadora-prazos-processuais/
│
├── index.html          # Arquivo principal (HTML + CSS + JS)
└── README.md           # Documentação
```

## Como Usar Localmente
```bash
# Clone o repositório
git clone https://github.com/JoaoPauloCode/calculadora-prazos-processuais.git

# Entre na pasta do projeto
cd calculadora-prazos-processuais

# Abra o arquivo index.html no seu navegador
```

Ou simplesmente faça o download e abra o arquivo `index.html` em qualquer navegador.

## Como Funciona

1. Selecione a data inicial do prazo
2. Digite a quantidade de dias
3. Escolha entre dias corridos ou úteis
4. Clique em "Calcular Prazo"
5. Veja o resultado com a data final

## O Que Aprendi

Este projeto foi fundamental para consolidar conceitos básicos de programação web:

### JavaScript
- Manipulação do DOM (capturar valores de inputs, alterar conteúdo)
- Trabalhar com datas usando o objeto `Date`
- Criar funções e passar parâmetros
- Estruturas condicionais (`if/else`)
- Loops (`while`)
- Event listeners (capturar evento de submit)

### HTML
- Estrutura semântica de formulários
- Diferentes tipos de input (date, number, radio)
- Organização de elementos

### CSS
- Estilização básica e uso de classes
- Flexbox para centralização
- Responsividade com media queries
- Pseudo-classes (`:hover`, `:focus`)

## Próximas Melhorias

Funcionalidades que pretendo implementar conforme evoluo nos estudos:

- [ ] Adicionar feriados nacionais
- [ ] Salvar histórico de cálculos
- [ ] Melhorar o visual
- [ ] Adicionar modo escuro
- [ ] Criar versão mobile app

## Desafios Enfrentados

Durante o desenvolvimento, enfrentei alguns desafios interessantes:

- **Cálculo de dias úteis:** Precisei pensar em como pular finais de semana no loop
- **Formatação de datas:** Aprendi a usar arrays para converter números em nomes de meses e dias
- **Validação:** Garantir que o usuário preencha todos os campos antes de calcular

## Limitações Conhecidas

- Não considera feriados nacionais, estaduais ou municipais
- Apenas em português (pt-BR)
- Ferramenta educacional - não substitui cálculos oficiais

## Autor

**João Paulo Rodrigues Mourão Barcelos**

Estudante de Desenvolvimento Web | Em transição de carreira (Direito → Tecnologia)

Este é meu primeiro projeto público e estou animado para continuar aprendendo e evoluindo como desenvolvedor!

---

📧 **Email:** jopabarcelos@gmail.com  
💼 **LinkedIn:** [linkedin.com/in/joparomoba](https://www.linkedin.com/in/jpbarcelos)  
🐱 **GitHub:** [@JoaoPauloCode](https://github.com/JoaoPauloCode)

## Licença

Este projeto está sob a licença MIT - sinta-se livre para usar e modificar.

---

<p align="center">
  💙 Desenvolvido com dedicação durante minha jornada de aprendizado
</p>

<p align="center">
  ⭐ Se você também está aprendendo programação, espero que este projeto te inspire!
</p>