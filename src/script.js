document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let emailInput = document.getElementById("email").value;
    let errorMessage = document.getElementById("error-message");

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput)) {
        errorMessage.textContent = "Por favor, insira um e-mail válido no formato exemplo@teste.com";
    } else {
        errorMessage.textContent = "";
        alert("E-mail cadastrado com sucesso!");  
    }
})