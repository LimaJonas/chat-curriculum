//Pre-functions
function createDivs(){
    return "<div class='d-flex justify-content-start mb-4'><div class='msg_cotainer'>"
}
function closeDivs(){
    return "</div></div>"
}

document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
      document.getElementById("send").click();
    }
});

//On start page
function startPage(){
    // Default Options
    changeLanguage(0);
}
   
// Menu
function menu(){
    document.getElementById("title").innerHTML = json.title;

    var line1 = createDivs() + "Bem vindo ao criador de curriculos por chat" + closeDivs();
    var line2 = createDivs() + "Vamos começar?" + closeDivs();
    var line3 = createDivs() + "<a onclick='instructions()'>Clique para <b>Sim</b></a>" + closeDivs(); 

    document.getElementById("msg").innerHTML = line1 + line2 + line3;
    document.getElementById("userText").disabled = true; //Block textarea
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
    document.getElementById("send").onclick = function() { saveEmail() };
}
function saveEmail(){
    var emailUser = document.getElementById("userText").value;
    sessionStorage.setItem("emailUser", emailUser);
    document.getElementById("userText").value = ""; //clean textarea

    askDrive();
}

//Drive
function askDrive(){
    document.getElementById("userText").disabled = true; //Block textarea

    var line1 = createDivs() + "Possui carteira de habilitação?" + closeDivs();
    var line2 = createDivs() + "<a onclick='writeDrive()'><b>Sim.</b></a>" + closeDivs();
    var line3 = createDivs() + "<a onclick='askObjective()'><b>Não. Pular para 'objetivo'</b></a>" + closeDivs();
    
    document.getElementById("msg").innerHTML = line1 + line2 + line3;
}
function writeDrive(){
    document.getElementById("userText").disabled = false; //unblock textarea
    
    var line1 = createDivs() + "Ok, digite a categoria da habilitação. Por exemplo 'AB'" + closeDivs();
    
    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveDrive() };
}
function saveDrive(){
    var driveUser = document.getElementById("userText").value;
    sessionStorage.setItem("driveUser", driveUser);
    document.getElementById("userText").value = ""; //clean textarea

    askObjective();   
}

//Objective
function askObjective(){
    document.getElementById("userText").disabled = false; //unblock textarea
    var line1 = createDivs() + "Muito bem! concluimos a parte inicial com suas informações." + closeDivs();
    var line2 = createDivs() + "Agora digite algo para colocarmos na sessão de '<b>objetivo</b>' do curriculo." + closeDivs();

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("send").onclick = function() { saveObjective() };
}
function saveObjective(){
    var objectiveUser = document.getElementById("userText").value;
    sessionStorage.setItem("objectiveUser", objectiveUser);
    document.getElementById("userText").value = ""; //clean textarea

    askWork1();   
}

//Work 1
function askWork1(){
    var line1 = createDivs() + "Agora falaremos sobre suas <b>experiencias profissionais</b>." + closeDivs();
    var line2 = createDivs() + "Que tal começar da mais recente para a mais antiga?" + closeDivs();
    var line3 = createDivs() + "Digite o <b>nome da empresa</b> mais <b>recente</b> que trabalhou." + closeDivs();
    var line4 = createDivs() + "Caso não queira preencher esta parte, clique <a onclick='education()'><b>aqui</b> para pular para Formação Acadêmica" + closeDivs(); //Jump for Education

    document.getElementById("msg").innerHTML = line1 + line2 + line3 + line4;
    document.getElementById("send").onclick = function() { saveWork1Name() };
}
function saveWork1Name(){
    var Work1Name = document.getElementById("userText").value;
    sessionStorage.setItem("Work1Name", Work1Name);
    document.getElementById("userText").value = ""; //clean textarea

    askWork1Date();   
}
//--
function askWork1Date(){
    var line1 = createDivs() + "Ok, empresa <b>"+ sessionStorage.getItem("Work1Name") +"</b>." + closeDivs();
    var line2 = createDivs() + "Digite agora quando foi que você trabalhou lá. Desse jeito 'Jan/2020 - Jun/2020'." + closeDivs();

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("send").onclick = function() { saveWork1Date() };
}
function saveWork1Date(){
    var Work1Date = document.getElementById("userText").value;
    sessionStorage.setItem("Work1Date", Work1Date);
    document.getElementById("userText").value = ""; //clean textarea

    askWork1City();   
}
//--
function askWork1City(){
    var line1 = createDivs() + "Certo, digite agora a cidade aonde você trabalhou." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveWork1City() };
}
function saveWork1City(){
    var Work1City = document.getElementById("userText").value;
    sessionStorage.setItem("Work1City", Work1City);
    document.getElementById("userText").value = ""; //clean textarea

    askWork1Position();   
}
//---
function askWork1Position(){
    var line1 = createDivs() + "Muito bem. Agora digite qual era seu cargo na empresa." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveWork1Position() };
}
function saveWork1Position(){
    var Work1Position = document.getElementById("userText").value;
    sessionStorage.setItem("Work1Position", Work1Position);
    document.getElementById("userText").value = ""; //clean textarea

    askWork1Description();
}
//--
function askWork1Description(){
    var line1 = createDivs() + "Por ultimo, descreva um pouco a sobre sua vaga." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveWork1Description() };
}
function saveWork1Description(){
    var Work1Description = document.getElementById("userText").value;
    sessionStorage.setItem("Work1Description", Work1Description);
    document.getElementById("userText").value = ""; //clean textarea

    moreJob1();   
}
//----
function moreJob1(){
    document.getElementById("userText").disabled = true; //Block textarea
    var line1 = createDivs() + "Feito! Deseja adicionar mais uma experiência profissional?" + closeDivs();
    var line2 = createDivs() + "<a onclick='askWork2()'><b>Sim</b></a>" + closeDivs();
    var line3 = createDivs() + "<a onclick='education()'><b>Não, pular para Formação Acadêmica</b></a>" + closeDivs(); //Jump education

    document.getElementById("msg").innerHTML = line1 + line2 + line3;
    document.getElementById("send").onclick = function() { saveWork1Description() };   
}
//---
//Work 2
function askWork2(){
    document.getElementById("userText").disabled = false; //unblock textarea
    var line1 = createDivs() + "Ok, segunda experiência profissional</b>." + closeDivs();
    var line2 = createDivs() + "Digite o <b>nome da empresa</b> que trabalhou." + closeDivs();

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("send").onclick = function() { saveWork2Name() };
}
function saveWork2Name(){
    var Work2Name = document.getElementById("userText").value;
    sessionStorage.setItem("Work2Name", Work2Name);
    document.getElementById("userText").value = ""; //clean textarea

    askWork2Date();   
}
//--
function askWork2Date(){
    var line1 = createDivs() + "Ok, empresa <b>"+ sessionStorage.getItem("Work2Name") +"</b>." + closeDivs();
    var line2 = createDivs() + "Digite agora quando foi que você trabalhou lá. Desse jeito 'Jan/2020 - Jun/2020'." + closeDivs();

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("send").onclick = function() { saveWork2Date() };
}
function saveWork2Date(){
    var Work2Date = document.getElementById("userText").value;
    sessionStorage.setItem("Work2Date", Work2Date);
    document.getElementById("userText").value = ""; //clean textarea

    askWork2City();   
}
//--
function askWork2City(){
    var line1 = createDivs() + "Certo, digite agora a cidade aonde você trabalhou." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveWork2City() };
}
function saveWork2City(){
    var Work2City = document.getElementById("userText").value;
    sessionStorage.setItem("Work2City", Work2City);
    document.getElementById("userText").value = ""; //clean textarea

    askWork2Position();   
}
//---
function askWork2Position(){
    var line1 = createDivs() + "Muito bem. Agora digite qual era seu cargo na empresa." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveWork2Position() };
}
function saveWork2Position(){
    var Work2Position = document.getElementById("userText").value;
    sessionStorage.setItem("Work2Position", Work2Position);
    document.getElementById("userText").value = ""; //clean textarea

    askWork2Description();
}
//--
function askWork2Description(){
    var line1 = createDivs() + "Por ultimo, descreva um pouco a sobre sua vaga." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveWork2Description() };
}
function saveWork2Description(){
    var Work2Description = document.getElementById("userText").value;
    sessionStorage.setItem("Work2Description", Work2Description);
    document.getElementById("userText").value = ""; //clean textarea

    moreJob2();   
}
//----
function moreJob2(){
    document.getElementById("userText").disabled = true; //Block textarea
    var line1 = createDivs() + "Feito! Você adicionou duas experiências profissionais. Deseja adicionar mais uma?" + closeDivs();
    var line2 = createDivs() + "<a onclick='askWork3()'><b>Sim</b></a>" + closeDivs();
    var line3 = createDivs() + "<a onclick='education()'><b>Não, pular para Formação Acadêmica</b></a>" + closeDivs(); //Jump education

    document.getElementById("msg").innerHTML = line1 + line2 + line3;
    document.getElementById("send").onclick = function() { saveWork1Description() };   
}
//--
//Work 3
function askWork3(){
    document.getElementById("userText").disabled = false; //unblock textarea
    var line1 = createDivs() + "Ok, terceira experiência profissional</b>." + closeDivs();
    var line2 = createDivs() + "Digite o <b>nome da empresa</b> que trabalhou." + closeDivs();

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("send").onclick = function() { saveWork3Name() };
}
function saveWork3Name(){
    var Work3Name = document.getElementById("userText").value;
    sessionStorage.setItem("Work3Name", Work3Name);
    document.getElementById("userText").value = ""; //clean textarea

    askWork3Date();   
}
//--
function askWork3Date(){
    var line1 = createDivs() + "Ok, empresa <b>"+ sessionStorage.getItem("Work3Name") +"</b>." + closeDivs();
    var line2 = createDivs() + "Digite agora quando foi que você trabalhou lá. Desse jeito 'Jan/2020 - Jun/2020'." + closeDivs();

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("send").onclick = function() { saveWork3Date() };
}
function saveWork3Date(){
    var Work3Date = document.getElementById("userText").value;
    sessionStorage.setItem("Work3Date", Work3Date);
    document.getElementById("userText").value = ""; //clean textarea

    askWork3City();   
}
//--
function askWork3City(){
    var line1 = createDivs() + "Certo, digite agora a cidade aonde você trabalhou." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveWork3City() };
}
function saveWork3City(){
    var Work3City = document.getElementById("userText").value;
    sessionStorage.setItem("Work3City", Work3City);
    document.getElementById("userText").value = ""; //clean textarea

    askWork3Position();   
}
//---
function askWork3Position(){
    var line1 = createDivs() + "Muito bem. Agora digite qual era seu cargo na empresa." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveWork3Position() };
}
function saveWork3Position(){
    var Work3Position = document.getElementById("userText").value;
    sessionStorage.setItem("Work3Position", Work3Position);
    document.getElementById("userText").value = ""; //clean textarea

    askWork3Description();
}
//--
function askWork3Description(){
    var line1 = createDivs() + "Por ultimo, descreva um pouco a sobre sua vaga." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveWork3Description() };
}
function saveWork3Description(){
    var Work3Description = document.getElementById("userText").value;
    sessionStorage.setItem("Work3Description", Work3Description);
    document.getElementById("userText").value = ""; //clean textarea

    education();   
}
//----
//Education
function education(){
    document.getElementById("userText").disabled = false; //unblock textarea
    var line1 = createDivs() + "Feito! Você adicionou as experiências profissionais. Vamos agora falar sobre sua <b>Formação Acadêmica</b>." + closeDivs();
    var line2 = createDivs() + "Digite o <b>nome da instituição</b> mais recente que estudou." + closeDivs();

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("send").onclick = function() { saveEducation1() };   
}
function saveEducation1(){
    var Education1Institute = document.getElementById("userText").value;
    sessionStorage.setItem("Education1Institute", Education1Institute);
    document.getElementById("userText").value = ""; //clean textarea

    askEducation1Course();
}
//--
function askEducation1Course(){
    var line1 = createDivs() + "Certo, agora digite o <b>nome do curso</b> que você fazia nessa instituição." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveEducation1Course() };  
}
function saveEducation1Course(){
    var Education1Course = document.getElementById("userText").value;
    sessionStorage.setItem("Education1Course", Education1Course);
    document.getElementById("userText").value = ""; //clean textarea

    askEducation1Date();       
}
//--
function askEducation1Date(){
    var line1 = createDivs() + "Quase acabando, digite por favor o período em que estudou ou vai estudar lá." + closeDivs();
    var line2 = createDivs() + "Por exemplo, 'Jan/2020 - Dez/2022." + closeDivs();

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("send").onclick = function() { saveEducation1Date() };  
}
function saveEducation1Date(){
    var Education1Date = document.getElementById("userText").value;
    sessionStorage.setItem("Education1Date", Education1Date);
    document.getElementById("userText").value = ""; //clean textarea

    askEducation1City();       
}
//--
function askEducation1City(){
    var line1 = createDivs() + "Por ultimo, digite agora a cidade onde cursou. Caso seja online apenas escreva 'Online'." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveEducation1City() };  
}
function saveEducation1City(){
    var Education1City = document.getElementById("userText").value;
    sessionStorage.setItem("Education1City", Education1City);
    document.getElementById("userText").value = ""; //clean textarea

    education2();     
}
//Education 2
function education2(){
    document.getElementById("userText").disabled = true; //Block textarea
    var line1 = createDivs() + "Certo! Você quer adicionar mais uma formação acadêmica?" + closeDivs();
    var line2 = createDivs() + "<a onclick='askEducation2Institute()'><b>Sim</b></a>" + closeDivs();
    var line3 = createDivs() + "<a onclick='finish()'><b>Não, terminar e imprimir</b></a>" + closeDivs(); //Jump
    
    document.getElementById("msg").innerHTML = line1 + line2 + line3;
}
//--
function askEducation2Institute(){
    document.getElementById("userText").disabled = false; //unblock textarea
    var line1 = createDivs() + "Okay! Digite o nome da instituição que estudou." + closeDivs();
    
    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveEducation2Institute() };   
}
function saveEducation2Institute(){
    var Education2Institute = document.getElementById("userText").value;
    sessionStorage.setItem("Education2Institute", Education2Institute);
    document.getElementById("userText").value = ""; //clean textarea

    askEducation2Course();
}
//--
function askEducation2Course(){
    var line1 = createDivs() + "Certo, agora digite o <b>nome do curso</b> que você fazia nessa instituição." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveEducation2Course() };  
}
function saveEducation2Course(){
    var Education2Course = document.getElementById("userText").value;
    sessionStorage.setItem("Education2Course", Education2Course);
    document.getElementById("userText").value = ""; //clean textarea

    askEducation2Date();       
}
//--
function askEducation2Date(){
    var line1 = createDivs() + "Quase acabando, digite por favor o período em que estudou ou vai estudar lá." + closeDivs();
    var line2 = createDivs() + "Por exemplo, 'Jan/2020 - Dez/2022." + closeDivs();

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("send").onclick = function() { saveEducation2Date() };  
}
function saveEducation2Date(){
    var Education2Date = document.getElementById("userText").value;
    sessionStorage.setItem("Education2Date", Education2Date);
    document.getElementById("userText").value = ""; //clean textarea

    askEducation2City();       
}
//--
function askEducation2City(){
    var line1 = createDivs() + "Por ultimo, digite agora a cidade onde cursou. Caso seja online apenas escreva 'Online'." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveEducation2City() };  
}
function saveEducation2City(){
    var Education2City = document.getElementById("userText").value;
    sessionStorage.setItem("Education2City", Education2City);
    document.getElementById("userText").value = ""; //clean textarea

    education3();     
}
//Education3
function education3(){
    document.getElementById("userText").disabled = true; //Block textarea
    var line1 = createDivs() + "Ok! Você adicionou duas formações acadêmicas. Deseja adicionar mais uma?" + closeDivs();
    var line2 = createDivs() + "<a onclick='askEducation3Institute()'><b>Sim</b></a>" + closeDivs();
    var line3 = createDivs() + "<a onclick='finish()'><b>Não, terminar e imprimir</b></a>" + closeDivs(); //Jump
    
    document.getElementById("msg").innerHTML = line1 + line2 + line3;
}
//--
function askEducation3Institute(){
    document.getElementById("userText").disabled = false; //unblock textarea
    var line1 = createDivs() + "Okay! Digite o nome da instituição que estudou." + closeDivs();
    
    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveEducation3Institute() };   
}
function saveEducation3Institute(){
    var Education3Institute = document.getElementById("userText").value;
    sessionStorage.setItem("Education3Institute", Education3Institute);
    document.getElementById("userText").value = ""; //clean textarea

    askEducation3Course();
}
//--
function askEducation3Course(){
    var line1 = createDivs() + "Certo, agora digite o <b>nome do curso</b> que você fazia nessa instituição." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveEducation3Course() };  
}
function saveEducation3Course(){
    var Education3Course = document.getElementById("userText").value;
    sessionStorage.setItem("Education3Course", Education3Course);
    document.getElementById("userText").value = ""; //clean textarea

    askEducation3Date();       
}
//--
function askEducation3Date(){
    var line1 = createDivs() + "Quase acabando, digite por favor o período em que estudou ou vai estudar lá." + closeDivs();
    var line2 = createDivs() + "Por exemplo, 'Jan/2020 - Dez/2022." + closeDivs();

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("send").onclick = function() { saveEducation3Date() };  
}
function saveEducation3Date(){
    var Education3Date = document.getElementById("userText").value;
    sessionStorage.setItem("Education3Date", Education3Date);
    document.getElementById("userText").value = ""; //clean textarea

    askEducation3City();       
}
//--
function askEducation3City(){
    var line1 = createDivs() + "Por ultimo, digite agora a cidade onde cursou. Caso seja online apenas escreva 'Online'." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveEducation3City() };  
}
function saveEducation3City(){
    var Education3City = document.getElementById("userText").value;
    sessionStorage.setItem("Education3City", Education3City);
    document.getElementById("userText").value = ""; //clean textarea

    finish();     
}
//--
function finish(){
    var line1 = createDivs() + "Okay! reunimos as informações, agora clique <a onclick='print()'><b>aqui</b> para ir para a pagina do curriculo e imprimi-lo.'." + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("send").onclick = function() { saveEducation3City() };  
}
function print(){
    window.location.href="print.html";
}