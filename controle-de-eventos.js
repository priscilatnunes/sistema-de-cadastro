
let Event_Name = "Palestra javaScript";
let data_Atual = "18/09/2021";
let data_Evento = "19/09/2021";

let idade = 38;
let palestrantes = 1;
let participantes = 99;
let total = palestrantes + participantes;

console.log(`
Evento: ${Event_Name}
Data atual: ${data_Atual}
Data do evento: ${data_Evento}
idade do organizador: ${idade + " anos"}
Participantes: ${palestrantes} palestrantes e ${participantes} convidados (Total: ${total})
`);

if (data_Evento < data_Atual) {
    console.log("Não cadastrado");
    console.log("A data do evento não pode ser menor que a data atual.");
} else
if (idade < 18) {
    console.log("Não cadastrado");
    console.log("Participantes e Palestrante maiores de 18 anos.");
} else
if (total > 100) {  
    console.log("Não cadastrado");
    console.log("Quantidade de participantes e palestrante nao pode excede limite de 100.");
} else {
    console.log("Cadastra Efetuado com sucesso!");
    console.log("Chegar com 15 minutos de antecedencia.");
}