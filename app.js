let usuarios = [
    {username: "amy.lee", name: "amy", apellido: "lee", phone: "341415413312", email: "amy.lee@example.com", avatar: "avatares/avatar.webp"},
    {username: "angela.lewis", name: "angela", apellido: "lewis", phone: "341415413312", email: "angela.lewis@example.com", avatar: "avatares/avatar.webp"},
    {username: "appianRPA.sa", name: "appianRPA.sa", apellido: "service account", phone: "341415413312", email: "" , avatar: "avatares/avatar.webp"},
    {username: "charles.parker", name: "charles", apellido: "parker", phone: "341415413312", email: "charles.parker@example.com" , avatar: "avatares/avatar.webp"},
    {username: "chris.watkins", name: "chris", apellido: "watkins", phone: "341415413312", email: "chris.watkins@example.com" , avatar: "avatares/avatar.webp"},
    {username: "community.admin", name: "community", apellido: "admin", phone: "341415413312", email: "community.admin@fake.com" , avatar: "avatares/avatar.webp"},
    {username: "edward.phillips", name: "edward", apellido: "phillips", phone: "341415413312", email: "edward.phillips@example.com" , avatar: "avatares/avatar.webp"},
    {username: "joseph.clark", name: "josehp", apellido: "clark", phone: "341415413312", email: "joseph.clark@example.com" , avatar: "avatares/avatar.webp"},
    {username: "karen.anderson", name: "karen", apellido: "anderson", phone: "341415413312", email: "" , avatar: "avatares/avatar.webp"},
    {username: "martin.morgan", name: "martin", apellido: "morgan", phone: "341415413312", email: "martin.morgan@example.com" , avatar: "avatares/avatar.webp"},
    {username: "mary.lawson", name: "mary", apellido: "lawson", phone: "341415413312", email: "mary.lawson@example.com" , avatar: "avatares/avatar.webp"}
];

let usuariosGuardados = JSON.parse(localStorage.getItem("usuarioData"))|| usuarios;
console.table(usuariosGuardados);

function renderizarLista(lista){
    const contenedor = document.getElementById("users-container");

    if(lista.length === 0){
        contenedor.innerHTML = "<p style= 'padding: 10px; color: #777;'>No se encontraron usuarios</p>"
        return;
    }

    let htmlContenido = `
        <div class="fila-encabezado">
            <div class="columna-checkbox"><input type="checkbox"></div>
            <div class="columna">Username</div>
            <div class="columna">First Name</div>
            <div class="columna">Last Name</div>
            <div class="columna">Phone</div>
            <div class="columna">Email</div>
        </div>
    `;

    lista.forEach(user => {
        htmlContenido +=  `
        <div class="fila-usuario">
            <div class="columna-checkbox"><input type="checkbox"></div>
            <div class="columna username-estilo" style="display: flex; align-items: center; gap: 8px;">
                <img src="${user.avatar}" alt="avatar" class="user-avatar" style="width: 28px; height: 28px; border-radius: 50%; object-fit: cover;">
                <span>${user.username}</span>
            </div>
            <div class="columna">${user.name}</div>
            <div class="columna">${user.apellido}</div>
            <div class="columna">${user.phone}</div>
            <div class="columna">${user.email}</div>
        </div>
    `;
    });

    contenedor.innerHTML = htmlContenido;
}

const tituloUsers = document.getElementById("titulo-users");
tituloUsers.addEventListener("click", () => {
    renderizarLista(usuariosGuardados);
})

const inputBusqueda = document.getElementById("entradaTexto");

inputBusqueda.addEventListener("keyup", (event) =>{
    let textoIngresado = event.target.value.toLowerCase().trim();

    let resultadoFiltrados = usuariosGuardados.filter(user =>{
        return user.username.toLowerCase().includes(textoIngresado) ||
        user.name.toLowerCase().includes(textoIngresado) ||
        user.apellido.toLowerCase().includes(textoIngresado) ||
        user.email.toLowerCase().includes(textoIngresado) ||
        user.phone.toLowerCase().includes(textoIngresado);

    });
   renderizarLista(resultadoFiltrados);
});

 renderizarLista(usuariosGuardados);
