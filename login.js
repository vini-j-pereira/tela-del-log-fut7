function logar(){

    var login = document.getElementById('login').value;
    var pass = document.getElementById('pass').value;
    
    if(login == 'vinicius' && pass == '123456'){
        location.href = "index.html";

    }else{
        alert('ERRO!')
    }
}