function loadComponents(){
    
    localStorage.setItem("page", "print");
    var lang = localStorage.getItem("language");
    changeLanguage(lang);

    document.getElementById("work").innerHTML = json.print.work;
    document.getElementById("work").innerHTML = json.print.education;

    var nameUser = sessionStorage.getItem("nameUser"); //Nome
    var ageUser = sessionStorage.getItem("ageUser"); //Idade
    var addressUser = sessionStorage.getItem("addressUser"); //Endereço
    var civilUser = sessionStorage.getItem("civilUser"); //Estado Civil
    var phoneUser = sessionStorage.getItem("phoneUser"); //Telefone
    var emailUser = sessionStorage.getItem("emailUser"); //Email
    var driveUser = sessionStorage.getItem("driveUser"); //CNH
    var objectiveUser = sessionStorage.getItem("objectiveUser"); //Objetivo
    //Work 1
    var Work1Name = sessionStorage.getItem("Work1Name"); //Nome da empresa
    var Work1Date = sessionStorage.getItem("Work1Date"); //Periodo trabalhado
    var Work1City = sessionStorage.getItem("Work1City"); //Cidade
    var Work1Position = sessionStorage.getItem("Work1Position"); //Cargo
    var Work1Description = sessionStorage.getItem("Work1Description"); //Descrição
    //Work 2
    var Work2Name = sessionStorage.getItem("Work2Name"); //Nome da empresa
    var Work2Date = sessionStorage.getItem("Work2Date"); //Periodo trabalhado
    var Work2City = sessionStorage.getItem("Work2City"); //Cidade
    var Work2Position = sessionStorage.getItem("Work2Position"); //Cargo
    var Work2Description = sessionStorage.getItem("Work2Description"); //Descrição
    //Work 3
    var Work3Name = sessionStorage.getItem("Work3Name"); //Nome empresa
    var Work3Date = sessionStorage.getItem("Work3Date"); //Periodo trabalhado
    var Work3City = sessionStorage.getItem("Work3City"); //Cidade
    var Work3Position = sessionStorage.getItem("Work3Position"); //Cargo
    var Work3Description = sessionStorage.getItem("Work3Description"); //Descrição
    //Education 1
    var Education1Institute = sessionStorage.getItem("Education1Institute"); //Nome da instituição
    var Education1Course = sessionStorage.getItem("Education1Course"); //Curso
    var Education1Date = sessionStorage.getItem("Education1Date"); //Periodo
    var Education1City = sessionStorage.getItem("Education1City"); //Cidade
    //Education 2
    var Education2Institute = sessionStorage.getItem("Education2Institute"); //Email
    var Education2Course = sessionStorage.getItem("Education2Course"); //Curso
    var Education2Date = sessionStorage.getItem("Education2Date"); //Periodo
    var Education2City = sessionStorage.getItem("Education2City"); //Cidade
    //Education 3
    var Education3Institute = sessionStorage.getItem("Education3Institute"); //Email
    var Education3Course = sessionStorage.getItem("Education3Course"); //Curso
    var Education3Date = sessionStorage.getItem("Education3Date"); //Periodo
    var Education3City = sessionStorage.getItem("Education3City"); //Cidade


// ====================================================
var header = "<div class='col-12'>                                                  "+
"           <p class='text-secondary'>                                              "+
"               <h2 class='main-text shadow-text'>"+ nameUser +"</h2>               "+
"               "+ civilUser +", "+ ageUser +" anos.<br>                            "+
"               "+ addressUser +"<br>                                               "+
"               Celular: "+ phoneUser +" / Email: "+ emailUser +"</a><br>        "+
"               <a id='driveLicense'></a>                                            "+
"               </p>                                                                "+
"       </div>                                                                      ";
// ---
if(driveUser != null){
var drive = "CNH: "+ driveUser +"<br>";
}
// -----
var objective = "<div class='col-12'>                                                        "+
"           <h3>"+ json.print.objective +"</h3>                                                       "+
"           <p class='text-secondary'>"+ objectiveUser +"                           "+
"           </p>                                                                    "+
"       </div>                                                                      ";
// ===================================================
// WORK
// ==================================================
if(Work1Name != null){
var work1 = "<div class='col-sm-6'>                                                      "+
"           <p class='text-secondary'>                                              "+
"           <ul class='text-secondary'>                                             "+
"               <li>"+ Work1Date +"</li>                                            "+
"               <li class='list-unstyled'>"+ Work1City +"</li>                      "+
"           </ul>                                                                   "+
"           </p>                                                                    "+
"       </div>                                                                      "+
"       <div class='col-sm-6'>                                                      "+
"           <p class='text-secondary pt-3'>                                         "+
"           "+ Work1Position +"<br>                                                 "+
"           <i>"+ Work1Name +"</i><br><br>                                          "+
"           "+ Work1Description +"                                                  "+
"           </p>                                                                    "+
"       </div>                                                                      ";
}
// ==============
if(Work2Name != null){
var work2 = "<div class='col-sm-6'>                                                      "+
"           <p class='text-secondary'>                                              "+
"           <ul class='text-secondary'>                                             "+
"               <li>"+ Work2Date +"</li>                                            "+
"               <li class='list-unstyled'>"+ Work2City +"</li>                      "+
"           </ul>                                                                   "+
"           </p>                                                                    "+
"       </div>                                                                      "+
"       <div class='col-sm-6'>                                                      "+
"           <p class='text-secondary pt-3'>                                         "+
"           "+ Work2Position +"<br>                                                 "+
"           <i>"+ Work2Name +"</i><br><br>                                          "+
"           "+ Work2Description +"                                                  "+
"           </p>                                                                    "+
"       </div>         ";
}
// ==================
if(Work3Name != null){
var work3 = "<div class='col-sm-6'>                                                      "+
"           <p class='text-secondary'>                                              "+
"           <ul class='text-secondary'>                                             "+
"               <li>"+ Work3Date +"</li>                                            "+
"               <li class='list-unstyled'>"+ Work3City +"</li>                      "+
"           </ul>                                                                   "+
"           </p>                                                                    "+
"       </div>                                                                      "+
"       <div class='col-sm-6'>                                                      "+
"           <p class='text-secondary pt-3'>                                         "+
"           "+ Work3Position +"<br>                                                 "+
"           <i>"+ Work3Name +"</i><br><br>                                          "+
"           "+ Work3Description +"                                                  "+
"           </p>                                                                    "+
"       </div>         ";
}
// =====================================================
// Education
// =====================================================
if(Education1Institute != null){
var education1 = "<div class='col-sm-6'>                                                     "+
"        <p class='text-secondary'>                                                 "+
"        <ul class='text-secondary'>                                                "+
"           <li>"+ Education1Date +"</li>                                           "+
"           <li class='list-unstyled'>"+ Education1City +"</li>                     "+
"        </ul>                                                                      "+
"        </p>                                                                       "+
"       </div>                                                                      "+
"       <div class='col-sm-6'>                                                      "+
"           <p class='text-secondary pt-3'>                                         "+
"               "+ Education1Course +"<br>                                          "+
"               <i>"+ Education1Institute +"</i><br>                                "+ 
"           </p>                                                                     "+
"       </div>         ";
}
// =========
if(Education2Institute != null){
var education2 = "<div class='col-sm-6'>                                                     "+
"        <p class='text-secondary'>                                                 "+
"        <ul class='text-secondary'>                                                "+
"           <li>"+ Education2Date +"</li>                                           "+
"           <li class='list-unstyled'>"+ Education2City +"</li>                     "+
"        </ul>                                                                      "+
"        </p>                                                                       "+
"       </div>                                                                      "+
"       <div class='col-sm-6'>                                                      "+
"           <p class='text-secondary pt-3'>                                         "+
"               "+ Education2Course +"<br>                                          "+
"               <i>"+ Education2Institute +"</i><br>                                "+ 
"           </p>                                                                     "+
"       </div>         ";
}
// =========
if(Education3Institute != null){
var education3 = "<div class='col-sm-6'>                                                     "+
"        <p class='text-secondary'>                                                 "+
"        <ul class='text-secondary'>                                                "+
"           <li>"+ Education3Date +"</li>                                           "+
"           <li class='list-unstyled'>"+ Education3City +"</li>                     "+
"        </ul>                                                                      "+
"        </p>                                                                       "+
"       </div>                                                                      "+
"       <div class='col-sm-6'>                                                      "+
"           <p class='text-secondary pt-3'>                                         "+
"               "+ Education3Course +"<br>                                          "+
"               <i>"+ Education3Institute +"</i><br>                                "+ 
"           </p>                                                                     "+
"       </div>         ";
}
// ======================================

document.getElementById('head').innerHTML = header;
if(driveUser != null){
document.getElementById('driveLicense').innerHTML = drive;
}
document.getElementById('obje').innerHTML = objective;
// Work Check
if(work3 != null){
    document.getElementById('prof').innerHTML = work1 + work2 + work3;
} else if(work2 != null){
    document.getElementById('prof').innerHTML = work1 + work2;
} else if(work1 != null){
    document.getElementById('prof').innerHTML = work1;
}
// Education Check
if(education3 != null){
    document.getElementById('educ').innerHTML = education1 + education2 + education3;
} else if(education2 != null){
    document.getElementById('educ').innerHTML = education1 + education2;
} else if(education1 != null){
    document.getElementById('educ').innerHTML = education1;
}



window.print();

}