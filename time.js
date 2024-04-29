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

        this.listaTabela();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayPlayers.length; i++) {
            let tr = tbody.insertRow();

            let td_numeroPlayer = tr.insertCell();
            let td_namePlayer = tr.insertCell();
            let td_asst = tr.insertCell();
            let td_gols = tr.insertCell();
            let td_edit = tr.insertCell();

            td_numeroPlayer.innerText = this.arrayPlayers[i].numPlayer;
            td_namePlayer.innerText = this.arrayPlayers[i].nomePlayer;

            td_numeroPlayer.classList.add('center');
            td_namePlayer.classList.add('center');
            td_asst.classList.add('center');
            td_gols.classList.add('center');
            td_edit.classList.add('center');

            let iconEdit = document.createElement('i');
            iconEdit.innerHTML = '<i class="bi bi-pencil-square"></i>';

            let iconDel =document.createElement('i');
            iconDel.innerHTML = '<i class="bi bi-trash3-fill"></i>';
            

            td_edit.appendChild(iconEdit);
            td_edit.appendChild(iconDel);

        }
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
            msg += '- Informe o nome do jogador! \n';
        }

        if(player.numPlayer == '') {
            msg += '- Informe o numero do jogador! \n';
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