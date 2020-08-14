// Write your Character component here
import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Character = (props) => {
    const {characters} = props;
    




    return (
        <div>
           <p>{characters.map(character => {
               return console.log(character)
           })}</p>
        </div>
    )
};

export default Character;