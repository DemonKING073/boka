// //map integration
        let map;
        function initMap() {
            var location = {lat:-33.96716,lng:151.10666};
            var map = new google.maps.Map(document.getElementById("map"),{
                zoom:18,
                center: location
            });
            var marker = new google.maps.Marker({
                position: location,
                map: map,
            })
        }


//Login Authentication
var users = [
    {
        user:"admin",
        password:'admin123'
    },
    {
        user:"nirdesan",
        password:'kera'
    }
]
function login() {
    var user = document.getElementById('user').value;
    var logged = false;
    var password = document.getElementById('password').value;
    for(i=0; i<users.length;i++){
        if(user==users[i].user && password ==users[i].password){
            logged=true;
        }
    }
    if(logged){
        console.log('user loged')
        alert('Logged Successfully');
        window.location.href='./index.html'
    }else{
        alert('Login Failed!')
    }
}


function addCart(a){
    console.log(a)
}




