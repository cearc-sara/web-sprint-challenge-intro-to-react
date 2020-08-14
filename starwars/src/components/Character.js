// Write your Character component here
import React, {useState} from 'react';
import axios from 'axios'
import styled from 'styled-components'
// import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Character = (props) => {
    const { characters } = props;
//     const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

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
                    {/* <Button  onClick={toggle} >Toggle</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse> */}
                </div>
            })}
        </StyledCharacter>

    )
};

export default Character;