// Write your Character component here
import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Character = (props) => {
    const { characters } = props;

const StyledCharacter = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
.character{
    display:flex;
    justify-content:space-around;
    width:35%;
    background-color:${props => props.theme.gray};
    border:2px solid ${props => props.theme.black};
    border-radius:${props => props.theme.borderRadius};
    color:${props => props.theme.secondaryColor};
    margin:${props => props.theme.margins.big};
    padding:${props => props.theme.paddingSmall};

    &:hover{
        background-color:${props => props.theme.secondaryColor};
        color:${props => props.theme.tertiaryColor};
    }
}
.name{
    font-size:${props => props.theme.fontSize};
    font-weight:${props => props.theme.fontWeight};
}
.status{
    color:${props => props.theme.primaryColor};
}
`



    return (

        <StyledCharacter>
            {characters.map(character => {
                return <div className='character'>
                    <p key={character.id} className='name'>{character.name}</p>
                    <p className='status'>{character.status}</p>
                </div>
            })}
        </StyledCharacter>

    )
};

export default Character;