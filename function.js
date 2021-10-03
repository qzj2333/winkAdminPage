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
    document.cookie = "";
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
    console.log(data);
    var currData;
    if (response) 
    {
        for(var i = 0; i < data.length; i++)
        {
            currData = data[i];
            displayOneBugPost(currData._id.$oid, currData.username, currData.title, currData.detail, currData.rate.$numberLong);
        }
    } 

    // var url = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/getBugs';
    // const request = new XMLHttpRequest();
    // request.onload = () =>
    // {
    //     var data = request.response;
    //     console.log(data);
    //     for(var i = 0; i < data.length; i++)
    //     {
    //         currData = data[i];
    //         console.log(currData);
    //         //displayOneBugPost(currData._id.$oid, currData.username, currData.title, currData.detail, currData.rate.$numberLong);
    //     }
    // }  
    // request.open('GET', url);
    // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // request.send();
}

/* bug page */
function addBug()
{
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
    // add to database
    var url = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/addBug';
    var data = 'username='+document.cookie+'&title='+title+"&detail="+detail;
    const request = new XMLHttpRequest();
    request.onload = () =>
    {
        var id = request.responseText;
        // update website
        displayOneBugPost(id, document.cookie, title, detail, 0)
    }  
    request.open('POST', url);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    console.log(data);
    request.send(data);
}

function displayOneBugPost(id, username, title, detail, rate)
{
    var d1 = document.createElement("div");
    d1.className = "d-flex justify-content-center py-2 bugPost";
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
    // var sp4 = document.createElement("span");
    // sp4.className = "glyphicon glyphicon-thumbs-up";
    var sp5 = document.createElement("span");
    sp5.className = "text4";
    var btn1 = document.createElement("button");
    btn1.type = "button";
    btn1.className = "btn btn-default btn-sm";
    //sp4.className = "glyphicon glyphicon-thumbs-up";
    //btn1.appendChild(sp4);
    sp5.innerHTML = "Expend";
    btn1.appendChild(sp5);
    // var btn2 = document.createElement("button");
    // btn2.type = "button";
    // btn2.innerHTML = "goDetail";    // detail page
    d1.appendChild(d2);
    d2.appendChild(sp1);
    d2.appendChild(d3);
    d3.appendChild(d4);
    d4.appendChild(img);
    d4.appendChild(sp2);
    d3.appendChild(d5);
    d5.appendChild(sp3);
    d5.appendChild(btn1);
    //d5.appendChild(btn2);
    document.body.appendChild(d1);
    // btn2.addEventListener("click", function()
    // {
    //     updateRate(id);
    // }, false);
    btn1.addEventListener("click", function() 
    { 
        goBugDetailPage(id);
        
    }, false);
}

function goBugDetailPage(id)
{
    window.location.href = "bugDetail.html?id="+id;
}

function displayBugDetail()
{
    //window.location.href = "bugDetail.html?id="+id;
    const urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    document.getElementById('bugID').value = id;
    var data = 'id='+id;
    console.log(data);
    // load bug
    var url1 = "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/getBugByID";
    const request1 = new XMLHttpRequest();
    request1.onload = () =>
    {
        console.log("load bug by id " + request1.responseText);
        var currBugInfo = JSON.parse(request1.responseText);
        // display current bug
        var parentDiv = document.getElementById("post-detail");
        // display user info
        var divUserInfo = document.createElement("div");
        divUserInfo.className = "user-info";
        var h5 = document.createElement("h5");
        h5.innerHTML = currBugInfo["username"];
        // display time
        var bugReportTime = document.createElement("p");
        bugReportTime.className = "text-muted";
        bugReportTime.innerHTML = "Published at " + new Date(currBugInfo["time"]["$date"]["$numberLong"]);
        divUserInfo.appendChild(h5);
        divUserInfo.appendChild(bugReportTime);
        // add rating button
        var divRate = document.createElement("div");
        divRate.className = "reaction";
        var thumbUp = document.createElement("a");
        thumbUp.className = "btn text-green";
        var thumbUpImg = document.createElement("i");
        thumbUpImg.className = "fa fa-thumbs-up";
        //var rateNum = document.createElement("span");
        //rateNum.innerHTML = currBugInfo["rate"]["$numberLong"];
        thumbUp.appendChild(thumbUpImg);
        thumbUp.innerHTML += currBugInfo["rate"]["$numberLong"];
        //thumbUp.appendChild(rateNum);
        //thumbUp.innerHTML = currBugInfo["rate"]["$numberLong"];
        thumbUp.addEventListener("click", function()
        {
            updateRate(id);
        }, false);
        divRate.appendChild(thumbUp);
        // add line divider
        var lineDivider = document.createElement("div");
        lineDivider.className = "line-divider";
        // add content
        var content = document.createElement("div");
        content.className = "post-text";
        var contentP = document.createElement("p");
        contentP.innerHTML = currBugInfo["detail"];
        content.appendChild(contentP);

        parentDiv.appendChild(divUserInfo);
        parentDiv.appendChild(divRate);
        parentDiv.appendChild(lineDivider);
        parentDiv.appendChild(content);
        parentDiv.appendChild(lineDivider);

        //load bug responses
        var url2 = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/getBugResponsesByID';
        const request2 = new XMLHttpRequest();
        request2.onload = () =>
        {
            var responses = request2.responseText;
            console.log("load bug detail by id: " + responses);
            // update website
            //displayOneBugPost(id, document.cookie, title, detail, 0)
            responses = JSON.parse(responses);
            for(var i = 0; i < responses.length; i++)
            {
                displayABugResponse(responses[i]["username"], responses[i]["content"]);
            }
            // add new response form
            var formDiv = document.createElement("div");
            formDiv.className = "post-comment";
            var inputBox = document.createElement("input");
            inputBox.id = "comment";
            inputBox.type = "text";
            inputBox.className = "form-control";
            inputBox.placeholder = "Post a comment";
            var submitBtn = document.createElement("btn");
            submitBtn.className = "btn btn-default btn-sm";
            submitBtn.value = "Submit";
            submitBtn.addEventListener("click", function()
            {
                console.log("button click!");
                addResponse();
            }, false);
            formDiv.appendChild(inputBox);
            formDiv.appendChild(submitBtn);
            parentDiv.appendChild(formDiv);
        }  
        request2.open('POST', url2);
        request2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request2.send(data);
    }  
    request1.open('POST', url1);
    request1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request1.send(data);
}

function updateRate(id)
{
    // add to database
    var url = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/updateRate';
    const request = new XMLHttpRequest();
    var data = "id="+id;
    request.onload = () =>
    {
        // reload website
        location.reload();
    }  
    request.open('POST', url);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(data);
}

function addResponse()
{
    var id = document.getElementById("bugID").value;
    var content = document.getElementById("comment").value;
    // add to database
    var url = 'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/winkdb-googlesheet-htaow/service/adminWebsite/incoming_webhook/addBugResponse';
    var data = 'id='+id+'&username='+document.cookie+"&content="+content;
    console.log("add comment: " + data);
    const request = new XMLHttpRequest();
    request.onload = () =>
    {
        // update website
        location.reload();
    }  
    request.open('POST', url);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(data);
}

function displayABugResponse(username, content)
{
    // display username
    var responseDiv = document.createElement("div");
    responseDiv.className = "post-text";
    var responseP = document.createElement("p");
    var profileA = document.createElement("a");
    profileA.className = "profile-link";
    profileA.innerHTML = username;
    responseP.appendChild(profileA);
    // display content
    responseP.innerHTML += content;
    responseDiv.appendChild(responseP);

    var parentDiv = document.getElementById("post-detail");
    var lineDivider = document.createElement("div");
    lineDivider.className = "line-divider";
    parentDiv.appendChild(lineDivider);
    parentDiv.appendChild(responseDiv);
}