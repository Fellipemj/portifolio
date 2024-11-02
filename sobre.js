document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("toggle-theme");
    const bioText = document.querySelector(".bio");
    const quemTitle = document.getElementById("quem");
    const menu = document.querySelector(".menu");

    // Verifica se o tema já está armazenado e aplica
    const temaAtual = localStorage.getItem("tema") || "dark"; // O padrão é "dark"
    document.body.classList.add(temaAtual + "-mode");

    // Atualiza o texto do botão
    themeToggleButton.textContent = temaAtual === "light" ? "Modo Escuro" : "Modo Claro";

    // Alternância entre modos de tema
    themeToggleButton.addEventListener("click", () => {
        const novoTema = document.body.classList.toggle("light-mode") ? "light" : "dark";
        document.body.classList.toggle("dark-mode");

        bioText.classList.toggle("light-mode");
        quemTitle.classList.toggle("light-mode");
        menu.classList.toggle("light-mode");

        // Atualiza o texto do botão
        themeToggleButton.textContent = novoTema === "light" ? "Modo Escuro" : "Modo Claro";

        // Salva o tema no localStorage
        localStorage.setItem("tema", novoTema);
    });

    // Exibir uma mensagem de boas-vindas
    function mostrarMensagemBoasVindas() {
        const mensagem = "Bem-vindo(a) à página de Sobre!";
        const novaLinha = document.createElement("p");
        novaLinha.textContent = mensagem;
        novaLinha.style.fontWeight = "bold";
        novaLinha.style.textAlign = "center";
        novaLinha.style.marginTop = "20px";
        novaLinha.style.color = "#FFD700";
        bioText.insertAdjacentElement("afterbegin", novaLinha);
    }

    // Chamar a função de boas-vindas ao carregar a página
    mostrarMensagemBoasVindas();
});
