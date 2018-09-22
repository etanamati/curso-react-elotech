import React from 'react';

const Postar = ({conteudo, handlePostar, handleChange}) => {
    return (
        <div>
            <textarea type="text" name="conteudo" rows="5" cols="100" value={conteudo} onChange={handleChange}/>
            <button onClick={handlePostar}>Postar</button>
        </div>
    );
}

export default Postar;