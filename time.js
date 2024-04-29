class Time {

    constructor() {
       this.id = 1;
       this.arrayPlayers = [];
       
    }

    adicionar() {
        let player = this.lerDados();

        if(this.validaCampos(player)) {
            this.salvar(player);
        }

        console.log(this.arrayPlayers);
    }

    salvar(player) {
        this.arrayPlayers.push(player);
        this.id++;
    }

    lerDados() {
        let player = {}

        player.id = this.id;
        player.nomePlayer = document.getElementById('player').value;
        player.numPlayer = document.getElementById('numPlayer').value;

        return player;

    }

    validaCampos(player) {
        let msg = '';

        if(player.nomePlayer == '') {
            msg += '- Informe o nome do jogador \n';
        }

        if(player.numPlayer == '') {
            msg += '- Informe o numero do jogador \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true;
    }

    remover() {
        
    }
}

var time = new Time();