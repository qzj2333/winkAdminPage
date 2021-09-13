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

async function displayCurrentUserCount()
{
    // Storing response
    const response = await fetch("https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/getUserCount");
    
    // Storing data in form of JSON
    var data = await response.json();
    if (response) 
    {
        document.getElementById("currUserCount").innerHTML = "Current Users: " + data.$numberLong;
    } 
}

async function displayCurrentUsedStorage()
{
    console.log("displayCurrentUsedStorage");
    const request = new XMLHttpRequest();
    request.onreadystatechange = () =>
    {
        console.log(request);
      try
      {
        response = JSON.parse(request.responseText);
        if(response.ok)   // sign in successfully
        {
            console.log(request.responseText);
        }
        else
        {
            console.log(request);
        }
      }
      catch(e)
      {
        console.log(e);
      }
    }  
    //const requestData = `username=&password=`;
    request.open('GET', 'connectMongoDB.php');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
 
    //request.send(requestData);
    request.send();
}

function displayLastTimeGetData()
{

}

function goToCSV()
{
    window.open(
        "https://docs.google.com/spreadsheets/d/19P1bQaDe8gEU-Wfk_nPPOsMi-rBnn0_k37ORqTMUmo4/edit?usp=sharing"，
        '_blank'
    );
    //window.location.href = "https://docs.google.com/spreadsheets/d/19P1bQaDe8gEU-Wfk_nPPOsMi-rBnn0_k37ORqTMUmo4/edit?usp=sharing";
    //setcookie("CookieName", "CookieValue", 2147483647);
}

function displayActiveUserChart()
{
    var chart = document.getElementById("activeUser");
    chart.src = "https://charts.mongodb.com/charts-wink-konrk/embed/charts?id=2be3bdf5-f7c2-4a36-8c66-d500b404eeff&theme=light";
}

function displaySessionFrequencyChart()
{
    var chart = document.getElementById("sessionFrequency");
    chart.src = "https://charts.mongodb.com/charts-wink-konrk/embed/charts?id=ea7d200c-a2ed-49e5-981b-5c48e004fb7a&theme=light";
    
}

function displaySessionDurationChart()
{
    var chart = document.getElementById("sessionDuration");
    chart.src = "https://charts.mongodb.com/charts-wink-konrk/embed/charts?id=faa11296-0032-4d9d-b4f6-bdcc581ff72f&theme=light";
}

function getMonthlyActiveUsers()
{

}


