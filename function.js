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
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "  " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("currentDate").innerHTML = date;
}

function displayCurrentUserCount()
{
    // Storing response
    const response = await fetch("https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/getUserCount");
    
    // Storing data in form of JSON
    var data = await response.json();
    if (response) 
    {
        console.log(result);
        console.log(result.numberLong);
        document.getElementById("currUserCount").innerHTML = "Current Users: " + response.numberLong;
    } 
}

function displayCurrentUsedStorage()
{
    
}

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        return data;
    }
    //show(data);
}

function goToCSV()
{
    window.location.href = "https://docs.google.com/spreadsheets/d/19P1bQaDe8gEU-Wfk_nPPOsMi-rBnn0_k37ORqTMUmo4/edit?usp=sharing";
}

function getDailyActiveUsers()
{
    var chart = document.getElementById("chart");
    chart.src = "https://charts.mongodb.com/charts-wink-konrk/embed/charts?id=2be3bdf5-f7c2-4a36-8c66-d500b404eeff&autoRefresh=300&theme=light";
}

function getWeeklyActiveUsers()
{

}

function getMonthlyActiveUsers()
{

}


