const rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
const pedro = {
  nome: "Pedro",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

players = [rafa, pedro];

function calculatePoints(player) {
  let points = player.vitorias * 3 + player.empates;
  player.pontos = points;
  return player.pontos;
}

function viewerPersons(players) {
  let elements = 0;
  for (let i = 0; i < players.length; i++) {
    elements += `<tr><td>${players[i].nome}</td>`;
    elements += `<td>${players[i].vitorias}</td>`;
    elements += `<td>${players[i].empates}</td>`;
    elements += `<td>${players[i].derrotas}</td>`;
    elements += `<td>${players[i].pontos}</td>`;
    elements +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elements +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elements +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";
  }
  let tbody = document.querySelector("#tabelaJogadores");
  tbody.innerHTML = elements;
}
viewerPersons(players);

function adicionarVitoria(i) {
  let player = players[i];
  player.vitorias++;
  player.pontos = calculatePoints(player);
  viewerPersons(players);
}
function adicionarEmpate(i) {
  let player = players[i];
  player.empates++;
  player.pontos = calculatePoints(player);
  viewerPersons(players);
}
function adicionarDerrota(i) {
  let player = players[i];
  player.derrotas++;
  viewerPersons(players);
}

function addPlayer() {
  const nome = prompt("qual seu nome");
  const novoElemento = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  players.push(novoElemento);
  viewerPersons(players);
}
