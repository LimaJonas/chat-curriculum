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
    localStorage.setItem('page', 'index');
    if (localStorage.getItem('language') == null) {
        changeLanguage(0);
    } else{
        changeLanguage(localStorage.getItem('language'));
    }
    menu();
}

// Menu
function menu(){
    document.getElementById("modalTitle").innerHTML = json.modalTitle;
    document.getElementById("modalBack").innerHTML = json.modalBack;
    document.getElementById("modalButton").innerHTML = json.modalButton;
    
    document.getElementById("title").innerHTML = json.title;

    var line1 = createDivs() + json.menu.line1 + closeDivs();
    var line2 = createDivs() + json.menu.line2 + closeDivs();
    var line3 = createDivs() + "<a onclick='instructions()'>"+ json.menu.line3 +"</a>" + closeDivs(); 

    document.getElementById("msg").innerHTML = line1 + line2 + line3;
    document.getElementById("userText").disabled = true; //Block textarea
}

//First instructions
function instructions(){
    var line1 = createDivs() + json.instructions.line1 + closeDivs();
    var line2 = createDivs() + json.instructions.line2 + closeDivs();
    var line3 = createDivs() + json.instructions.line3 + closeDivs();
    var line4 = createDivs() + "<a onclick='askName()'>"+ json.instructions.line4 +"</a>" + closeDivs(); 

    document.getElementById("msg").innerHTML = line1 + line2 + line3 + line4;
}

//Name
function askName(){
    var line1 = createDivs() + json.name + closeDivs();

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
    var line1 = createDivs() + json.age + closeDivs();   
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
    var line1 = createDivs() + json.address + closeDivs();   
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
    var line1 = createDivs() + json.civil + closeDivs();   
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
    var line1 = createDivs() + json.phone + closeDivs();   
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
    var line1 = createDivs() + json.email + closeDivs();   
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

    var line1 = createDivs() + json.drive.line1 + closeDivs();
    var line2 = createDivs() + "<a onclick='writeDrive()'>"+ json.drive.line2 +"</a>" + closeDivs();
    var line3 = createDivs() + "<a onclick='askObjective()'>"+ json.drive.line3 +"</a>" + closeDivs();
    
    document.getElementById("msg").innerHTML = line1 + line2 + line3;
}
function writeDrive(){
    document.getElementById("userText").disabled = false; //unblock textarea
    
    var line1 = createDivs() + json.drive.caseYes + closeDivs();
    
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
    var line1 = createDivs() + json.objective.line1 + closeDivs();
    var line2 = createDivs() + json.objective.line2 + closeDivs();

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
    var line1 = createDivs() + json.work1.line1 + closeDivs();
    var line2 = createDivs() + json.work1.line2 + closeDivs();
    var line3 = createDivs() + json.work1.line3 + closeDivs();
    var line4 = createDivs() + "<a onclick='education()'>"+ json.work1.line4 +"</a>" + closeDivs(); //Jump for Education

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
    var line1 = createDivs() + json.work1.work1Date.line1 +"<b>"+ sessionStorage.getItem("Work1Name") +"</b>." + closeDivs();
    var line2 = createDivs() + json.work1.work1Date.line2 + closeDivs();

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
    var line1 = createDivs() + json.work1.work1City.line1 + closeDivs();

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
    var line1 = createDivs() + json.work1.work1Position.line1 + closeDivs();

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
    var line1 = createDivs() + json.work1.work1Description.line1 + closeDivs();

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
    var line1 = createDivs() + json.moreJob1.line1 + closeDivs();
    var line2 = createDivs() + "<a onclick='askWork2()'>"+ json.moreJob1.line2 +"</a>" + closeDivs();
    var line3 = createDivs() + "<a onclick='education()'>"+ json.moreJob1.line3 +"</a>" + closeDivs(); //Jump education

    document.getElementById("msg").innerHTML = line1 + line2 + line3;
    document.getElementById("send").onclick = function() { saveWork1Description() };   
}
//---
//Work 2
function askWork2(){
    document.getElementById("userText").disabled = false; //unblock textarea
    var line1 = createDivs() + json.work2.line1 + closeDivs();
    var line2 = createDivs() + json.work2.line2 + closeDivs();

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
    var line1 = createDivs() + json.work2.work2Date.line1 +"<b>"+ sessionStorage.getItem("Work2Name") +"</b>." + closeDivs();
    var line2 = createDivs() + json.work2.work2Date.line2 + closeDivs();

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
    var line1 = createDivs() + json.work2.work2City.line1 + closeDivs();

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
    var line1 = createDivs() + json.work2.work2Position.line1 + closeDivs();

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
    var line1 = createDivs() + json.work2.work2Description.line1 + closeDivs();

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
    var line1 = createDivs() + json.moreJob2.line1 + closeDivs();
    var line2 = createDivs() + "<a onclick='askWork3()'>"+ json.moreJob2.line2 +"</a>" + closeDivs();
    var line3 = createDivs() + "<a onclick='education()'>"+ json.moreJob2.line3 +"</a>" + closeDivs(); //Jump education

    document.getElementById("msg").innerHTML = line1 + line2 + line3;
    document.getElementById("send").onclick = function() { saveWork1Description() };   
}
//--
//Work 3
function askWork3(){
    document.getElementById("userText").disabled = false; //unblock textarea
    var line1 = createDivs() + json.work3.line1 + closeDivs();
    var line2 = createDivs() + json.work3.line2 + closeDivs();

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
    var line1 = createDivs() + json.work3.work3Date.line1 +"<b>"+ sessionStorage.getItem("Work3Name") +"</b>." + closeDivs();
    var line2 = createDivs() + json.work3.work3Date.line2 + closeDivs();

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
    var line1 = createDivs() + json.work3.work3City.line1 + closeDivs();

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
    var line1 = createDivs() + json.work3.work3Position.line1 + closeDivs();

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
    var line1 = createDivs() + json.work3.work3Description.line1 + closeDivs();

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
    var line1 = createDivs() + json.education1.line1 + closeDivs();
    var line2 = createDivs() + json.education1.line2 + closeDivs();

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
    var line1 = createDivs() + json.education1.education1Course.line1 + closeDivs();

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
    var line1 = createDivs() + json.education1.education1Date.line1 + closeDivs();
    var line2 = createDivs() + json.education1.education1Date.line2 + closeDivs();

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
    var line1 = createDivs() + json.education1.education1City.line1 + closeDivs();

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
    var line1 = createDivs() + json.education2.line1 + closeDivs();
    var line2 = createDivs() + "<a onclick='askEducation2Institute()'>"+ json.education2.line2 +"</a>" + closeDivs();
    var line3 = createDivs() + "<a onclick='finish()'>"+ json.education2.line3 +"</a>" + closeDivs(); //Jump
    
    document.getElementById("msg").innerHTML = line1 + line2 + line3;
}
//--
function askEducation2Institute(){
    document.getElementById("userText").disabled = false; //unblock textarea
    var line1 = createDivs() + json.education2.education2Institute.line1 + closeDivs();
    
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
    var line1 = createDivs() + json.education2.education2Course.line1 + closeDivs();

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
    var line1 = createDivs() + json.education2.education2Date.line1 + closeDivs();
    var line2 = createDivs() + json.education2.education2Date.line2 + closeDivs();

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
    var line1 = createDivs() + json.education2.education2City.line1 + closeDivs();

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
    var line1 = createDivs() + json.education3.line1 + closeDivs();
    var line2 = createDivs() + "<a onclick='askEducation3Institute()'>"+ json.education3.line2 +"</a>" + closeDivs();
    var line3 = createDivs() + "<a onclick='finish()'>"+ json.education3.line3 +"</a>" + closeDivs(); //Jump
    
    document.getElementById("msg").innerHTML = line1 + line2 + line3;
}
//--
function askEducation3Institute(){
    document.getElementById("userText").disabled = false; //unblock textarea
    var line1 = createDivs() + json.education3.education3Institute.line1 + closeDivs();
    
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
    var line1 = createDivs() + json.education3.education3Course.line1 + closeDivs();

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
    var line1 = createDivs() + json.education3.education3Date.line1 + closeDivs();
    var line2 = createDivs() + json.education3.education3Date.line2 + closeDivs();

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
    var line1 = createDivs() + json.education3.education3City.line1 + closeDivs();

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
    var line1 = createDivs() + "<a onclick='print()'>"+ json.finish +"</a>" + closeDivs();

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("userText").disabled = true; //Block textarea

}
function print(){
    window.location.href="print.html";
}