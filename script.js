
function getPosts(userId) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+userId);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            // console.log( request.response);
            let posts = request.response;

            document.getElementById('posts').innerHTML = "";

            for (post of posts) {
                let content = `
                <div id="post">
                    <h3>${post.title}</h3>
                    <h4>
                        ${post.body}
                    </h4>
                 </div>
                
                `
                document.getElementById('posts').innerHTML += content;
            }
        } else {
            alert("error");
        }
    }
}



function getUsers() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            // console.log( request.response);
            let users = request.response;

            document.getElementById('users').innerHTML = "";

            for (user of users) {
                let content = `
                <div id="user" onclick="userClicked(${user.id} , this)">
                   <h3>${user.name}</h3>
                   <h3>${user.email}</h3>
                </div>
                
                `
                document.getElementById('users').innerHTML += content;
            }
        } else {
            alert("error");
        }
    }
}

getUsers();
getPosts(1) ;

function userClicked(id , ele) {
    getPosts(id);

    let selectedElements = document.getElementsByClassName("selected");
    for(element of selectedElements){
        element.classList.remove("selected") ;
    }
    ele.classList.add("selected") ;
}