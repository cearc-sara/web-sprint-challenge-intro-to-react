// Write your Character component here
import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Character = (props) => {
    const {characters} = props;
    
const StyledCharacter = styled.div`
.character{
background-color:${props => props.theme.gray};
border:2px solid ${props => props.theme.black};
color:${props => props.theme.secondaryColor};
margin:${props => props.theme.margins.big};
}
.status{
    color:${props => props.theme.primaryColor};
}
`



    return (
        
           <StyledCharacter>
               {characters.map(character => {
               return<div className='character'> 
                   <p key={character.id}>{character.name}</p>
                    <p className='status'>{character.status}</p>
               </div>
           })}
           </StyledCharacter>
        
    )
};

export default Character;