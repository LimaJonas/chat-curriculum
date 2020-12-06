//Pre-functions
function createDivs(){
    return "<div class='d-flex justify-content-start mb-4'><div class='msg_cotainer'>"
}
function closeDivs(){
    return "</div></div>"
}

//On start page
function startPage(){
    var line1 = createDivs() + "Bem vindo ao criador de curriculos por chat" + closeDivs();
    var line2 = createDivs() + "Vamos começar?" + closeDivs();
    var line3 = createDivs() + "<a onclick='instructions()'>Clique para <b>Sim</b></a>" + closeDivs(); 

    document.getElementById("msg").innerHTML = line1 + line2 + line3;
    document.getElementById("userText").disabled = true; //Block text area
}
//First instructions
function instructions(){
    var line1 = createDivs() + "<b>Leia com atenção!</b> Farei perguntas referentes ao seu curriculo e guardarei suas respostas para que possamos ao final imprimir ou salvar um PDF" + closeDivs();
    var line2 = createDivs() + "Não guardarei suas informações comigo, então evite recarregar a pagina, ou todo progresso será perdido!" + closeDivs();
    var line3 = createDivs() + "Lembre-se de verificar se as informações estão corretas antes de enviar, pois não há como editar as informações já enviadas" + closeDivs();
    var line4 = createDivs() + "<a onclick='askName()'><b>Entendido!</b></a>" + closeDivs(); 

    document.getElementById("msg").innerHTML = line1 + line2 + line3 + line4;
}

//Name
function askName(){
    var line1 = createDivs() + "Por favor, digite sue nome completo e aperte o botão para enviar" + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("userText").disabled = false; //unblock textarea

    document.getElementById("send").onclick = function() { saveName() };
}
function saveName(){
    var nameUser = document.getElementById("userText").value;
    sessionStorage.setItem("nameUser", nameUser);
    document.getElementById("userText").value = ""; //clean textarea

    askAge();
}

//Age
function askAge(){
    var line1 = createDivs() + "Ok, agora digite sua idade, coloque apenas os numeros" + closeDivs();   
    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveAge() };
}
function saveAge(){
    var ageUser = document.getElementById("userText").value;
    sessionStorage.setItem("ageUser", ageUser);
    document.getElementById("userText").value = ""; //clean textarea

    askAddress();
}

//Address
function askAddress(){
    var line1 = createDivs() + "Certo, agora digite seu endereço completo, por exemplo 'Rua, Numero, Bairro, cidade, CEP, UF'" + closeDivs();   
    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveAddress() };
}
function saveAddress(){
    var addressUser = document.getElementById("userText").value;
    sessionStorage.setItem("addressUser", addressUser);
    document.getElementById("userText").value = ""; //clean textarea

    askCivil();
}

//Civil
function askCivil(){
    var line1 = createDivs() + "Muito bem, agora por favor, escreva qual sua situção civil, por exemplo 'Solteiro' ou 'Casado'" + closeDivs();   
    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveCivil() };
}
function saveCivil(){
    var civilUser = document.getElementById("userText").value;
    sessionStorage.setItem("civilUser", civilUser);
    document.getElementById("userText").value = ""; //clean textarea

    askPhone();
}

//Phone
function askPhone(){
    var line1 = createDivs() + "Digite seu telefone para contato (XX) XXXX-XXXX" + closeDivs();   
    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { savePhone() };
}
function savePhone(){
    var phoneUser = document.getElementById("userText").value;
    sessionStorage.setItem("phoneUser", phoneUser);
    document.getElementById("userText").value = ""; //clean textarea

    askEmail();
}

//Email
function askEmail(){
    var line1 = createDivs() + "Digite seu email para contato" + closeDivs();   
    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveEmail    () };
}
function saveEmail(){
    var emailUser = document.getElementById("userText").value;
    sessionStorage.setItem("emailUser", emailUser);
    document.getElementById("userText").value = ""; //clean textarea

    window.location.href="print.html";
}