"use strict";

const abertura = "Agente, precisamos da sua ajuda! Algumas situações estão provocando reações muito intensas. Sua missão é descobrir o que acontece quando a raiva aparece e aprender a lidar com ela. Você está preparado?";
const fimInvestigacao = "Investigação concluída! Você descobriu que algumas situações podem despertar emoções intensas. Mas será que a raiva é a única emoção envolvida?";
const encerramento = "Parabéns, agente! Você descobriu que sentir raiva faz parte da vida. O segredo não é nunca sentir raiva, mas aprender a reconhecer quando ela aparece, entender o que está acontecendo e escolher como agir. Lembre-se: você não controla tudo o que acontece, mas pode desenvolver maneiras diferentes de responder!";

const fases = [
  { nome: "Detetive da raiva", objetivo: "Identificar gatilhos", imagem: "detetive", icone: "search", cor: "#a58bff",
    fala: "Temos 12 casos para investigar. Abra os que quiser e registre como você poderia reagir em cada um." },
  { nome: "Laboratório das emoções", objetivo: "Reconhecer os sinais do corpo", imagem: "laboratorio", icone: "scan", cor: "#5dd8ff",
    fala: "Seu corpo pode dar pistas quando a raiva chega. Quais sinais você reconhece em você?" },
  { nome: "O iceberg da raiva", objetivo: "Explorar o que pode estar por trás da raiva", imagem: "iceberg", icone: "mountain", cor: "#83bfff",
    fala: "Explore a superfície e mergulhe para investigar. Às vezes existem outras emoções junto da raiva. Em outras vezes, a raiva é o que mais aparece." },
  { nome: "Central de decisões", objetivo: "Explorar reações e consequências", imagem: "decisoes", icone: "branch", cor: "#bf9aff",
    fala: "Escolha uma reação para simular o que pode acontecer. Experimente outros caminhos e, se quiser, invente um quarto." },
  { nome: "Kit de sobrevivência", objetivo: "Escolher estratégias para lidar com a raiva", imagem: "kit", icone: "kit", cor: "#ffad70",
    fala: "Você pode levar três ferramentas. Quais delas você gostaria de experimentar quando sentir raiva?" }
];

const casos = [
  ["Quando um dos meus pais diz não.", "Você pede algo que queria muito e um dos seus pais diz que não.", "message", ["Eu queria muito isso!", "Nem quiseram me escutar.", "Talvez eu possa perguntar por quê."], ["Insistir.", "Sair de perto.", "Perguntar por que a resposta foi não."]],
  ["Quando preciso parar de brincar porque o tempo acabou.", "A brincadeira está divertida, mas alguém avisa que o tempo combinado acabou.", "clock", ["Ainda estava me divertindo!", "O tempo passou depressa demais.", "Podemos continuar depois."], ["Continuar brincando.", "Reclamar.", "Combinar quando brincar de novo."]],
  ["Quando preciso desligar o videogame.", "Você está jogando videogame e seu pai ou sua mãe pede para desligar porque o tempo combinado acabou.", "gamepad", ["Só mais cinco minutos!", "Isso não é justo!", "Ninguém me deixa fazer o que quero!"], ["Gritar ou reclamar.", "Discutir.", "Desligar e sair irritado.", "Conversar e tentar negociar."]],
  ["Quando perco uma partida.", "Você estava perto de ganhar uma partida, mas acabou perdendo.", "flag", ["Eu devia ter ganhado!", "Não quero jogar de novo.", "Posso tentar de novo mais tarde."], ["Pedir revanche na hora.", "Largar o jogo.", "Fazer uma pausa."]],
  ["Quando alguém mexe nas minhas coisas sem pedir.", "Você vê alguém pegando uma coisa sua sem ter pedido permissão.", "box", ["Isso é meu!", "Será que vai estragar?", "Quero que me peçam antes."], ["Pegar o objeto de volta.", "Reclamar alto.", "Pedir que a pessoa devolva."]],
  ["Quando não fazem o que eu quero.", "Você propõe uma brincadeira e o grupo escolhe uma ideia diferente.", "people", ["Minha ideia era melhor.", "Não ligaram para o que eu queria.", "Talvez possamos fazer as duas coisas."], ["Insistir na minha ideia.", "Sair da brincadeira.", "Propor que a gente reveze."]],
  ["Quando sou interrompido.", "Você está contando algo importante quando alguém começa a falar por cima de você.", "message", ["Eu ainda não terminei!", "Parece que não estão me ouvindo.", "Quero retomar o que eu estava dizendo."], ["Falar mais alto.", "Parar de contar.", "Pedir para terminar de falar."]],
  ["Quando recebo uma bronca.", "Um adulto chama sua atenção por algo que aconteceu e fala com firmeza.", "alert", ["Não fiz por querer!", "Todo mundo está olhando.", "Quero contar meu lado."], ["Responder na hora.", "Ficar quieto.", "Pedir um momento para explicar."]],
  ["Quando preciso esperar minha vez.", "Você quer participar logo, mas ainda tem algumas pessoas na frente.", "hourglass", ["Está demorando demais!", "Quando vai chegar a minha vez?", "Posso fazer outra coisa enquanto espero."], ["Pedir para passar na frente.", "Sair da fila.", "Procurar algo para fazer enquanto espero."]],
  ["Quando algo não sai como planejei.", "Você montou algo com cuidado, mas uma peça cai e o resultado fica diferente do que imaginava.", "layers", ["Eu estraguei tudo!", "Eu queria que ficasse de outro jeito.", "Talvez dê para tentar de novo."], ["Desmontar tudo.", "Largar a atividade.", "Tentar outro jeito ou pedir ajuda."]],
  ["Quando alguém faz uma provocação.", "Um colega faz uma brincadeira sobre você que você acha desagradável.", "bolt", ["Por que falou isso de mim?", "Quero responder na mesma hora.", "Quero que essa brincadeira pare."], ["Revidar.", "Ficar em silêncio.", "Dizer que não gostei."]],
  ["Quando preciso fazer algo que não quero.", "Pedem que você arrume suas coisas bem na hora em que preferia descansar.", "checklist", ["Eu não queria fazer isso agora.", "Sempre sobra para mim.", "Talvez eu possa combinar um horário."], ["Recusar.", "Fazer reclamando.", "Pedir para combinar quando fazer."]]
];

const sinais = [
  ["Coração acelerado", "heart"], ["Mãos fechadas", "hand"], ["Rosto quente", "flame"],
  ["Respiração rápida", "wind"], ["Vontade de gritar", "message"], ["Corpo tenso", "bolt"],
  ["Vontade de sair do lugar", "exit"], ["Dificuldade para pensar com clareza", "brain"]
];
const niveis = [
  [1, 3, "Nível tranquilo", "Consigo conversar e pensar com calma.", "#74dfd7"],
  [4, 6, "Nível de alerta", "Começo a ficar irritado e meu corpo dá sinais.", "#b6a3ff"],
  [7, 8, "Nível elevado", "Fica mais difícil controlar minhas reações.", "#ffb371"],
  [9, 10, "Nível máximo", "Preciso priorizar minha segurança e me afastar da situação, com apoio se necessário.", "#ff92a0"]
];
const situacoesTermometro = ["Preciso esperar minha vez.", "Tenho que desligar o videogame.", "Alguém mexe nas minhas coisas sem pedir."];

const superficie = ["Gritar", "Bater portas", "Responder mal", "Chorar", "Discutir", "Ficar em silêncio"];
const profundidade = ["Tristeza", "Vergonha", "Medo", "Frustração", "Sensação de injustiça", "Rejeição", "Ciúmes", "Decepção", "Sensação de não ser ouvido"];
const casosIceberg = [
  { nome: "Uma resposta difícil", cena: "Você pediu algo aos seus pais, recebeu um não e ficou muito irritado.",
    pistas: ["Será que existe frustração?", "Será que existe decepção?", "Será que você sentiu que não foi ouvido?", "Será que era algo muito importante para você?"] },
  { nome: "A brincadeira", cena: "Um colega faz uma piada sobre você na frente do grupo. Você fica com raiva.",
    pistas: ["Você pode ter se sentido envergonhado?", "Talvez tenha se sentido rejeitado?", "O que nessa brincadeira te incomodou?"] },
  { nome: "O plano mudou", cena: "Um passeio que você estava esperando é cancelado de última hora e você se irrita.",
    pistas: ["O que você esperava desse passeio?", "Será que havia tristeza, decepção ou alguma outra emoção?"] }
];

const decisoes = [
  { nome: "O videogame", icone: "gamepad", cena: "Você está jogando e seu responsável manda desligar. Você fica muito irritado.",
    opcoes: [
      ["Gritar e dizer que não vai desligar.", "Seu responsável pode se sentir desrespeitado. A discussão pode aumentar e ficar mais difícil conversar sobre o tempo de jogo."],
      ["Desligar, mas ficar tão irritado que desconta em outra pessoa.", "O videogame é desligado, mas alguém que não estava envolvido pode ficar magoado. Sua frustração pode continuar."],
      ["Respirar, comunicar que ficou frustrado e conversar sobre a possibilidade de terminar a partida, respeitando o combinado.", "Pode ficar mais fácil explicar o que você sente. Seu responsável pode manter o horário combinado ou conversar sobre um ajuste. O que você faria se a resposta ainda fosse não?"]
    ] },
  { nome: "A provocação", icone: "bolt", cena: "Um colega faz uma brincadeira desagradável com você.",
    opcoes: [
      ["Revidar com uma provocação ainda pior.", "Seu colega pode responder com outra provocação ou se afastar. Outras pessoas podem acabar envolvidas e o conflito pode crescer."],
      ["Guardar a irritação e fingir que não aconteceu.", "Você pode ganhar tempo para entender o que sentiu. Se ninguém souber que a brincadeira incomodou, ela pode se repetir."],
      ["Dizer que não gostou da brincadeira e procurar ajuda se necessário.", "O colega pode entender seu limite ou pode continuar. Se precisar, alguém de confiança pode ajudar você a lidar com a situação."]
    ] },
  { nome: "A derrota", icone: "flag", cena: "Você perde uma partida e sente muita raiva.",
    opcoes: [
      ["Jogar o controle longe.", "O controle pode quebrar ou atingir alguém. As pessoas por perto podem se assustar e o problema pode ficar maior que a derrota."],
      ["Parar de brincar e não querer mais conversar.", "Parar pode dar espaço para a irritação baixar. Os outros talvez não entendam o que aconteceu, até você estar pronto para conversar."],
      ["Reconhecer a frustração, fazer uma pausa e decidir se quer tentar novamente.", "A pausa pode ajudar você a pensar no que quer fazer em seguida. Você pode voltar a jogar, fazer outra coisa ou conversar sobre a partida."]
    ] }
];
const perguntasDecisao = [
  "O que pode acontecer depois dessa reação?",
  "Como a outra pessoa pode se sentir?",
  "Essa reação resolve o problema ou aumenta a dificuldade?",
  "Existe outra maneira de agir?"
];

const ferramentas = [
  { nome: "Respiração", icone: "wind", descricao: "Respirar lentamente para diminuir a ativação.", cor: "#67daf7" },
  { nome: "Pausa estratégica", icone: "pause", descricao: "Afastar-se por alguns minutos com segurança.", cor: "#ad9aff" },
  { nome: "Mudar o pensamento", icone: "brain", descricao: "Questionar interpretações que aumentam a raiva.", cor: "#ffad70" },
  { nome: "Comunicação", icone: "message", descricao: "Expressar o que incomodou sem agressividade.", cor: "#6ed9bb" },
  { nome: "Distração saudável", icone: "headphones", descricao: "Escolher uma atividade que ajude a se reorganizar.", cor: "#f0a3e5" },
  { nome: "Pedir ajuda", icone: "people", descricao: "Procurar alguém de confiança.", cor: "#8eb9ff" }
];
const perguntasKit = [
  "Qual dessas ferramentas você acredita que funcionaria melhor para você?",
  "Em qual situação você poderia utilizá-la?",
  "O que poderia dificultar sua utilização?"
];

const roteiro = [
  { nome: "Apresentação e introdução", tempo: 3, perguntas: ["O que você imagina que vamos investigar hoje?", "Como você percebe que uma situação começa a te incomodar?"] },
  { nome: "Detetive da raiva", tempo: 12, perguntas: ["Em quais situações você sente mais raiva? O que elas têm em comum?", "O que você gostaria que a outra pessoa entendesse nesse momento?", "Qual caso você quer investigar primeiro?"] },
  { nome: "Laboratório das emoções", tempo: 7, perguntas: ["Qual sinal costuma aparecer primeiro?", "Alguém percebe seus sinais antes de você?", "O que poderia ajudar no nível de alerta?"] },
  { nome: "O iceberg da raiva", tempo: 10, perguntas: ["O que os outros conseguem ver do lado de fora?", "O que você só consegue perceber por dentro?", "Se a sua raiva pudesse falar, o que ela estaria tentando dizer?"] },
  { nome: "Central de decisões", tempo: 10, perguntas: perguntasDecisao },
  { nome: "Kit de sobrevivência", tempo: 6, perguntas: [...perguntasKit, "Como você gostaria de praticar uma dessas ferramentas?"] },
  { nome: "Encerramento", tempo: 2, perguntas: ["O que você leva da missão para o seu dia a dia?", "Quem poderia ajudar você a colocar o plano em prática?"] }
];
