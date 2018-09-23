
import React, {Component} from 'react';
import ListaPost from '../postagem/ListaPost';

class Perfil extends Component {
    render() {
        return (
            <div>
                <div>Foto</div>
                <div>Nome</div>
                <div>Usuário</div>
                <br />
                <ListaPost postagens={[]}/>
            </div>
        );
    }
}

export default Perfil;