var campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade')
];

// Precisamos de tbody, pois ele receberá a tr que vamos construi

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

  // cancelando a submissão do formulário
  event.preventDefault();

  var tr = document.createElement('tr');

  campos.forEach(function(campo){

    // Cria uma td sem informações
    var td = document.createElement('td');

    // Atribui o valor do campo à td
    td.textContent = campo.value;

    // Adiciona a td em tr
    tr.appendChild(td);
  });

  // nova td que armazenará o volume da negociação
  var tdVolume = document.createElement('td');

  // As posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
  tdVolume.textContent = campos[1].value * campos[2].value;

  // adicionando a td que faltava à tr
  tr.appendChild(tdVolume);

  // adicionando tr
  tbody.appendChild(tr);

  // BOAS MANEIRAS

  // limpa o campo da DATA
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;

  // foca no campo da DATA
  campos[0].focus();
});
