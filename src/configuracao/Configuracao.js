import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Configuracao extends Component {

    constructor (props) {
        super(props);
        this.state = {
            uid: '',
            userName: '',
            displayName: '',
            photoURL: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSalvar = () => {
        console.log('Salvar');
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="displayName">Nome:</label>
                        <input type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="userName">Usuário:</label>
                        <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="photoURL">Url da foto:</label>
                        <input type="text" name="photoURL" value={this.state.photoURL} onChange={this.handleChange}/>
                    </div>
                </div>
                <div>
                    <Button bsStyle="success" onClick={this.handleSalvar}>Salvar</Button>
                </div>
            </div>
        );
    }
}

export default Configuracao;