import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import pokeID from '../utils/pokeID';

function Grid(props) {
    const { pokemon, query, setSelectedPokemon } = props;
    const filteredPokemon = pokemon.filter( poke => poke.name.includes(query))
    const [favourites, setFavourites] = useState([]);
    const [showFavourites, setShowFavourites] = useState(false);

  return (
    <Container>
        <Row>
            <Button
                onClick={() => setShowFavourites(!showFavourites)}
            >
                {showFavourites ? "Mostra tutti" : "Mostra Preferiti"}
            </Button>
        </Row>
        <Row>
            {filteredPokemon.map((poke, i) => {
                if (!showFavourites || favourites.includes(poke)) {
                    return (
                        <Col key={i} xs={12} sm={6} md={3}>
                <Card
                    style= {{
                        width: "13rem",
                        margin: "1rem",
                        backgroundColor: favourites.includes(poke) && 'yellow'
                    }}
                >
                    <Card.Body>
                        <Card.Title>
                            {poke.name.toUpperCase()}
                        </Card.Title>
                        <Card.Img
                            variant='top'
                            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
                            pokeID(filteredPokemon[i].url.split('/')[6])
                            }.png`}
                        />
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <Button className='bg-light border border-white'
                                    style={{
                                        backgroundColor: favourites.includes(poke) && 'red',
                                        color: favourites.includes(poke) && 'white'
                                    }}
                                    onClick={() => {
                                        if (favourites.includes(poke)) {
                                            setFavourites(favourites.filter(p => p !== poke));
                                        } else {
                                            setFavourites([...favourites, poke])
                                        }
                                    }}
                                ><i className="bi bi-heart text-black fs-4"></i></Button>
                            </Col>
                            <Col className='d-flex justify-content-center'>
                                <Button className='bg-light border border-white'
                                    onClick={() =>
                                    axios 
                                        .get(poke.url)
                                        .then(res => setSelectedPokemon(res.data))
                                    }
                                >
                                    <i className="bi bi-info-circle text-black fs-4"></i></Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
                    )
                }}
                
            )}
            
        </Row>
    </Container>
  )
}

export default Grid