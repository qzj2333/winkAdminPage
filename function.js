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

function uploadToGoogleSheet()
{
    // goto google apps script which uploads data from mongoDB to google sheet
    window.location.href = "https://script.google.com/macros/s/AKfycbySuncdxexGd9Q3-ouNwVgNFFyT6EgWS3vtV-_mQCQ6hY3N5Z7JJwH8vFIqw7coT7tU/exec";
}

function deleteMongoDBData()
{
    fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Data is deleted!');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });  
}

function getDailyActiveUsers()
{
    var chart = document.createElement("iframe");
    var canvas = document.getElementById("canvas");
    chart.style.background = "#FFFFFF";
    chart.style.border = "none";
    chart.style.borderRadius = "2px";
    chart.style.boxShadow = "0 2px 10px 0 rgba(70, 76, 79, .2)";
    chart.width = "640";
    chart.height = "480";
    chart.src = "https://charts.mongodb.com/charts-wink-konrk/embed/charts?id=2be3bdf5-f7c2-4a36-8c66-d500b404eeff&autoRefresh=300&theme=light";
    if(canvas.firstChild)
    {
        canvas.removeChild(canvas.firstChild);
    }
    canvas.appendChild(chart);
}

function getWeeklyActiveUsers()
{

}

function getMonthlyActiveUsers()
{

}

