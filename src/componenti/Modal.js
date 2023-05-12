import React from 'react'
import {
  Button,
  Modal,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import pokeID from '../utils/pokeID';

function ModalView(props) {
  const { selectedPokemon, handleCloseModal } = props;
  console.log(selectedPokemon)

  return (
    <Modal
      show={selectedPokemon !== null}
      onHide={handleCloseModal}
      size='lg'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedPokemon !== null && selectedPokemon.name.toUpperCase()}
        </Modal.Title>
      </Modal.Header>   
      <Modal.Body>
        <Row>
          <Col>
            <Image 
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
                pokeID(selectedPokemon !== null && selectedPokemon.id)
                }.png`}
            />
          </Col>
          <Col>
                <ul>
                  <li>Tipo: {selectedPokemon !== null && selectedPokemon.types.map(t => t.type.name).join(", ")} </li>
                  <li>Altezza: {selectedPokemon !== null && selectedPokemon.height}  cm</li>
                  <li>Peso: {selectedPokemon !== null && selectedPokemon.weight} Kg</li>
                </ul>
          </Col>
        </Row>
      </Modal.Body> 
      <Modal.Footer>
        Footer
      </Modal.Footer>
    </Modal>
  )
}

export default ModalView