// Declaramos el array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  
// Validar que el nombre no esté repetido (ignorando mayúsculas/minúsculas)
  const nombreExiste = amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());
  if (nombreExiste) {
    alert("Este nombre ya fue ingresado.");
    input.value = "";
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Actualizar la lista visual
  actualizarLista();
}

// Función para mostrar la lista de amigos en pantalla
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nombre, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${nombre}`;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
  // Validar que haya al menos un nombre en la lista
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const nombreSorteado = amigos[indiceAleatorio];
  
  // Limpiar todo
  amigos = [];
  document.getElementById("amigo").value = "";
  document.getElementById("listaAmigos").innerHTML = "";

  // Mostrar el resultado en pantalla
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: ${nombreSorteado}</li>`;
}
