import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import FieldGroup from '../field/FieldGroup';

const Postar = ({conteudo, handlePostar, handleChange}) => {
    return (
        <Form>
            <Col sm={4}>
                <FieldGroup id="formControlsConteudo" label="Conteúdo:" type="textarea" name="conteudo" value={conteudo} onChange={handleChange}/>
            </Col>
            <Col sm={12}>
                <Button variant="success" onClick={handlePostar}>Postar</Button>
            </Col>
        </Form>
    );
}

export default Postar;