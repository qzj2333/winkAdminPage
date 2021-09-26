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

/* data display */
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
    window.open("https://docs.google.com/spreadsheets/d/19P1bQaDe8gEU-Wfk_nPPOsMi-rBnn0_k37ORqTMUmo4/edit?usp=sharing", '_blank');
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

function loadBugs()
{
    // // Storing response
    // const response = await fetch("https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/getUserCount");
    
    // // Storing data in form of JSON
    // var data = await response.json();
    // if (response) 
    // {
    //     document.getElementById("currUserCount").innerHTML = "Current Users: " + data.$numberLong;
    // } 
}

/* bug page */
async function addBug()
{
    console.log(document.getElementById("title").value);
    console.log(document.getElementById("detail").value);

    // add to database
    var url = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/addBugs';
    // var data = {username: "admin",
    //             title: document.getElementById("title").value,
    //             detail: document.getElementById("detail").value};
    var data = 'username=admin&title='+document.getElementById("title").value+"detail="+document.getElementById("detail").value;
    // await fetch(url, {
    // method: 'POST',
    // body: JSON.stringify(data),
    // headers: new Headers({
    //     'Content-Type': 'application/json'
    // })
    const request = new XMLHttpRequest();
    request.onreadystatechange = () =>
    {
        console.log(request);
    }  
    //const requestData = `username=&password=`;
    request.open('POST', url);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
 
    request.send(data);

    /*fetch(url, {
  method: 'POST',
  body: formData
})
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => 
        {
            console.log('Success:', response);
            // update website
            var d1 = document.createElement("div");
            d1.className = "d-flex justify-content-center py-2";
            var d2 = document.createElement("div");
            d2.className = "second py-2 px-2";
            var sp1 = document.createElement("span");
            sp1.className = "text1";
            sp1.innerHTML = document.getElementById("detail").value;
            var d3 = document.createElement("div");
            d3.className = "d-flex justify-content-between py-1 pt-2";
            var d4 = document.createElement("div");
            var img = document.createElement("img");
            img.width = 18;
            var sp2 = document.createElement("span");
            sp2.className = "text2";
            var sp3 = document.createElement("span");
            sp3.className = "text3";
            sp3.innerHTML = "Upvote?";
            var d5 = document.createElement("div");
            var sp4 = document.createElement("span");
            sp4.class = "thumbup";
            var li = document.createElement("i");
            li.className = "fa fa-thumbs-o-up";
            var sp5 = document.createElement("span");
            sp5.className = "text4";
            d1.appendChild(d2);
            d2.appendChild(sp1);
            d2.appendChild(d3);
            d3.appendChild(d4);
            d4.appendChild(img);
            d4.appendChild(sp2);
            d3.appendChild(d5);
            d5.appendChild(sp3);
            d5.appendChild(sp4);
            d5.append(li);
            d5.append(sp5);
        });*/

    
}

