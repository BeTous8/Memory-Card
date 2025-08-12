import React, {useEffect, useState} from "react";
import ScoreBoard from "./ScoreBoard";
import CardGame from "./CardGame";


export default function GameLogic () {
    const [cards, setCards] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    // Only on mount
    useEffect(() => {
        fetchCards();
    }, [])


    const generateTenRandomIds = () => {
        const ids = [];
        while (ids.length < 10) {
            const randomNum = Math.floor(Math.random() * 150) + 1;
            if (!ids.includes(randomNum)) {
                ids.push(randomNum);
            }
            
        }
        return ids;
    }

    const fetchCards = async () => {
        try {
            const cardIndex = generateTenRandomIds();
        const fetchPromises = cardIndex.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`))

        const responses = await Promise.all(fetchPromises);

        const pokemonData = await Promise.all(
            responses.map(responses => responses.json())
        );

        const gameCards = pokemonData.map(data => ({
            id : data.id,
            name : data.name,
            image : data.sprites.front_default,
            wasSelected : false
        }));

        setCards(gameCards);
        } catch (error) {
            console.error('Failed to fetch Pokemon:', error);
        }
        
    };

    
    function handleClick(selectedId) {
        const selectedCard = cards.find(card => card.id === selectedId);

        const notYetSelected = cards.filter(card => card.wasSelected === false)

        if (notYetSelected.length === 0) {
            // declare winner with modal
            handleModal('win')
        }

        if (selectedCard.wasSelected) {
            handleGameOver();
            
        } else {
            handleSuccessfulClick(selectedId);
            
        }
        

    }

    const handleGameOver = () => {
        //keep current highScore
        setHighScore(Math.max(score, highScore))
        setScore(0);
        

        // declare game over with modal
        handleModal('lose')
        //call for new set of cards
        fetchCards();
        
    }

    const handleSuccessfulClick = (selectedId) => {
        //set is selected to true for the card
        const updatedCards = cards.map(card => 
            card.id === selectedId
            ? {...card, wasSelected : true}
            : card
        )
        //shuffle the deck
        setCards(shuffleCards(updatedCards))
        //increase score by one
        setScore(score + 1)
    }

    function shuffleCards(cards) {
        return [...cards].sort(() => Math.random() - 0.5);
    }

    const handleModal = (gameResult) => {
        if (gameResult === 'win') {
            //open a modal say the game is over with Play Again button that fetch new cards
        } else if (gameResult === 'lose') {
            //open modal and say you win the game
            //make sure you move fetch card from handleGameOver function to here
        }
    }


    return (
        <>
            <h1>Memory Cards Game</h1>
            <p>Don't select a card twice or you'll lose!</p>
            <ScoreBoard
                score={score}
                highScore={highScore}
                isGameOver={isGameOver}
            />

            <CardGame
                cards={cards}
                handleClick={handleClick}
            />
        </>
    )


    
    
}


