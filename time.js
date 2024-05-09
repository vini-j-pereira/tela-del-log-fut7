class Time {

    constructor() {
       this.id = 1;
       this.arrayPlayers = [];
       this.editId = null;
       
    }

    adicionar() {
        let player = this.lerDados();

        if(this.validaCampos(player)) {
            if(this.editId == null) {
                this.salvar(player);
            } else {
                this.atualizar(this.editId, player);
            }
            
        }

        this.listaTabela();
        this.remover();


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
            iconEdit.classList.add('micon')
            iconEdit.innerHTML = '<i class="bi bi-pencil-square"></i>';
            iconEdit.setAttribute("onclick", "time.preparaEditar("+ JSON.stringify(this.arrayPlayers[i]) +")");

            let iconDel =document.createElement('i');
            iconDel.innerHTML = '<i class="bi bi-trash3-fill"></i>';
            iconDel.setAttribute("onclick", "time.deletar("+ this.arrayPlayers[i].id +")");     

            td_edit.appendChild(iconEdit);
            td_edit.appendChild(iconDel);
        }

    }

    salvar(player) {
        this.arrayPlayers.push(player);
        this.id++;
    }

    atualizar(id, player) {
        for(let i = 0; i < this.arrayPlayers.length; i++) {
            if(this.arrayPlayers[i].id == id) {
                this.arrayPlayers[i].nomePlayer = player.nomePlayer;
                this.arrayPlayers[i].numPlayer = player.numPlayer;
            }
        }
    }

    preparaEditar(dados) {
        this.editId = dados.id;

        document.getElementById('player').value = dados.nomePlayer;
        document.getElementById('numPlayer').value = dados.numPlayer;

        document.getElementById('btnPlayer').value = 'Atualizar';
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
        document.getElementById('player').value = '';
        document.getElementById('numPlayer').value = '';

        document.getElementById('btnPlayer').value = 'Adicionar';
        this.editId = null;

    }

    deletar(id) {
        if(confirm('Deseja deletar este jogador?')) {
            let tbody = document.getElementById('tbody');

            for(let i = 0; i < this.arrayPlayers.length; i++ ) {
                if(this.arrayPlayers[i].id == id) {
                    this.arrayPlayers.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }

    }
}

var time = new Time();