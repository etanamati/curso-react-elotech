import React, { Component } from 'react';
import Postar from '../postagem/Postar';
import ListaPost from '../postagem/ListaPost';

class Home extends Component {

    constructor (props){
        super(props);
        this.state = {
            conteudo: '',
            postagens: [
                {
                    uid: '1',
                    content: 'Primeira postagem',
                    author: '1',
                    timestamp: Date.now(),
                    authorName: 'Elton',
                    authorUserName: '@elton'
                },
                {
                    uid: '2',
                    content: 'Segunda postagem',
                    author: '1',
                    timestamp: Date.now(),
                    authorName: 'Elton',
                    authorUserName: '@elton'
                }
            ]
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    handlePostar = () => {
        console.log('Postar!', this.state.conteudo);
        this.setState({conteudo: ''});
    }

    render() {
        return (
            <div>
                <Postar conteudo={this.state.conteudo} 
                    handleChange={this.handleChange}
                    handlePostar={this.handlePostar}/>
                <br/>
                <ListaPost postagens={this.state.postagens}/>
            </div>
        )
    };
}


export default Home;
