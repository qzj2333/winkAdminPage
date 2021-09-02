let adminUsername = "admin";
let adminPassword = "admin";

function showSignInBox()
{
    document.getElementById('usernameSignIn').value = "";
    document.getElementById('passwordSignIn').value = "";

    document.querySelector('.signInModal').style.display = 'flex';
}

function closeSignInForm()
{
    document.querySelector('.signInModal').style.display = 'none';
}

function signIn()
{
    let username = document.getElementById('usernameSignIn').value
    let password = document.getElementById('passwordSignIn').value
    if(username == adminUsername && password == adminPassword)
    {
        window.location.href = "data.html";
    }
}

function logout()
{
    window.location.href = "index.html";
}

function displayCurrentDateTime()
{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date);
    document.getElementById("currentDate").value = date;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("currentTime").value = time;
}

function goToCSV()
{
    window.location.href = "https://docs.google.com/spreadsheets/d/19P1bQaDe8gEU-Wfk_nPPOsMi-rBnn0_k37ORqTMUmo4/edit?usp=sharing";
}

function getDailyActiveUsers()
{
    var chart = document.getElementById("chart");
    //var canvas = document.getElementById("canvas");
    //chart.style.background = "#FFFFFF";
    //chart.style.border = "none";
    //chart.style.borderRadius = "2px";
    //chart.style.boxShadow = "0 2px 10px 0 rgba(70, 76, 79, .2)";
    //chart.width = "640";
    //chart.height = "480";
    chart.src = "https://charts.mongodb.com/charts-wink-konrk/embed/charts?id=2be3bdf5-f7c2-4a36-8c66-d500b404eeff&autoRefresh=300&theme=light";
    // if(canvas.firstChild)
    // {
    //     canvas.removeChild(canvas.firstChild);
    // }
    // canvas.appendChild(chart);
}

function getWeeklyActiveUsers()
{

}

function getMonthlyActiveUsers()
{

}


