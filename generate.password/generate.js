document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").value;
    const lowercase = document.getElementById("lowercase").value;
    const numbers = document.getElementById("numbers").value;
    const symbols = document.getElementById("symbols").value;

    const allChars = uppercase + lowercase + numbers + symbols;
    let password = "";

    if (allChars.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    displayPassword(password);
}

function displayPassword(password) {
    document.getElementById("password").innerText = password;
}