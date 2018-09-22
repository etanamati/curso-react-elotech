import React, { Component } from 'react';
import Postar from './Postar';
import ListaPost from '../common/ListaPost';

class Home extends Component {

    constructor (props){
        super(props);
        this.state = {
            conteudo: ''
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
                <ListaPost />
            </div>
        )
    };
}


export default Home;
