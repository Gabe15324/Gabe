javascript
// Criação do objeto de navegação
var nav = {
    logo: 'Logo',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    login: 'Login'
};

// Função para criar o HTML da barra de navegação
function createNavBar(nav) {
    var navBar = '<div class="navbar" id="myNavbar">';
    navBar += '<a href="#" class="active">' + nav.logo + '</a>';
    navBar += '<a href="#">' + nav.home + '</a>';
    navBar += '<a href="#">' + nav.about + '</a>';
    navBar += '<a href="#">' + nav.contact + '</a>';
    navBar += '<a href="#" onclick="document.getElementById(\'id01\').style.display=\'block\')">' + nav.login + '</a>';
    navBar += '</div>';

    var loginModal = '<div id="id01" class="modal">';
    loginModal += '<form class="modal-content animate" action="/html/index.html">';
    loginModal += '<div class="imgcontainer">';
    loginModal += '<span onclick="document.getElementById(\'id01\').style.display=\'none\')" class="close" title="Close Modal">&times;</span>';
    loginModal += '<img src="img_avatar2.png" alt="Avatar" class="avatar">';
    loginModal += '</div>';
    loginModal += '<div class="container">';
    loginModal += '<label for="uname"><b>Username</b></label>';
    loginModal += '<input type="text" placeholder="Enter Username" name="uname" required>';
    loginModal += '<label for="psw"><b>Password</b></label>';
    loginModal += '<input type="password" placeholder="Enter Password" name="psw" required>';
    loginModal += '<button type="submit">Login</button>';
    loginModal += '<label><input type="checkbox" checked="checked" name="remember"> Remember me</label>';
    loginModal += '</div>';
}