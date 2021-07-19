const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    // previne reload da pagina qdo pressionado submit
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let data = {
        nome,
        email
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('cadastro', convertData);

    let content = document.getElementById("content");
    const arrayName = nome.split(" ");

    content.innerHTML = `
        <p>Muito obrigado ${arrayName[0]}, seu email foi registrado com sucesso.</p>
        <p>Você será redirecionado para nossa loja virtual em <span id="tempo">10</span> segundos.</p>
    `;

    let tempo = document.getElementById("tempo");
    let count = Number(tempo.textContent);
    timeout();

       function timeout() {
        setTimeout(() => {
            count--;
            tempo.innerHTML = count;
            if (count>0){
                timeout();
            } else {
                window.location.href = "https://xenodochial-panini-447f19.netlify.app/"
            }
        }, 1000);
    }

})
