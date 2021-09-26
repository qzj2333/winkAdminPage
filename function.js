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
        document.cookie = username;
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

async function loadBugs()
{
    const response = await fetch("https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/getBugs");
    
    // Storing data in form of JSON
    var data = await response.json();
    var currData;
    if (response) 
    {
        for(var i = 0; i < data.length; i++)
        {
            currData = data[i];
            console.log("loadBug: "+currData._id);
            displayOneBugPost(currData.username, currData.title, currData.detail, currData.rate);
        }
    } 
}

/* bug page */
function addBug()
{
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
    // add to database
    var url = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/addBugs';
    var data = 'username=admin&title='+title+"&detail="+detail+"&rate=0";
    const request = new XMLHttpRequest();
    request.onload = () =>
    {
        var id = request.responseText;

        console.log("addBug:"+id+"---"+id.toString());
        // update website
        displayOneBugPost(id, document.cookie, title, detail, 0)
    }  
    request.open('POST', url);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(data);
}

function displayOneBugPost(id, username, title, detail, rate)
{
    var d1 = document.createElement("div");
    d1.className = "d-flex justify-content-center py-2";
    var d2 = document.createElement("div");
    d2.className = "second py-2 px-2";
    var sp1 = document.createElement("span");
    sp1.className = "text1";
    sp1.innerHTML = title;
    var d3 = document.createElement("div");
    d3.className = "d-flex justify-content-between py-1 pt-2";
    var d4 = document.createElement("div");
    var img = document.createElement("img");
    img.width = 18;
    var sp2 = document.createElement("span");
    sp2.className = "text2";
    sp2.innerHTML = username;
    var d5 = document.createElement("div");
    var sp3 = document.createElement("span");
    sp3.className = "text3";
    sp3.innerHTML = rate;
    var sp4 = document.createElement("span");
    sp4.className = "glyphicon glyphicon-thumbs-up";
    // sp4.class = "thumbup";
    // var li = document.createElement("i");
    // li.className = "fa fa-thumbs-o-up";
    // var sp5 = document.createElement("span");
    // sp5.className = "text4";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-default btn-sm";
    sp4.className = "glyphicon glyphicon-thumbs-up";
    btn.appendChild(sp4);
    //btn.innerHTML = "Like";
    d1.appendChild(d2);
    d2.appendChild(sp1);
    d2.appendChild(d3);
    d3.appendChild(d4);
    d4.appendChild(img);
    d4.appendChild(sp2);
    d3.appendChild(d5);
    d5.appendChild(sp3);
    d5.appendChild(btn);
    //d5.appendChild(sp4);
    // d5.append(li);
    // d5.append(sp5);
    document.body.appendChild(d1);
    d1.addEventListener("click", displayBugDetail(id, username, title, detail));
    btn.addEventListener("click", updateRate(id,rate+1));
}

function displayBugDetail(username, title, detail)
{
    console.log(username);
    console.log(title);
    console.log(detail);
}

function updateRate(id, newRate)
{
    console.log("update vote");
    // add to database
    var url = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/addBugs';
    var data = 'id='+id+"&rate="+newRate;
    const request = new XMLHttpRequest();
    request.onload = () =>
    {
        var id = request.responseText;

        console.log("updateRate:"+id+"---"+id.toString());
        // reload website
        
    }  
    request.open('PUT', url);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(data);
}