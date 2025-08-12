import React, {useEffect, useState} from "react";
// import ScoreBoard from "./ScoreBoard";
import CardGame from "./CardGame";


export default function GameLogic () {
    const [cards, setCards] = useState([]);
    // const [gameOver, setGameOver] = useState(false);
    // const [score, setScore] = useState(0);
    // const [highScore, setHighScore] = useState(0);

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

        if (selectedCard.wasSelected) {
            handleGameOver();
            
        } else {
            handleSuccessfulClick();
            
        }
        

    }

    const handleGameOver = () => {
        //reset score to 0
        //call for new set of cards
        //keep current highScore
    }

    const handleSuccessfulClick = () => {
        //set is selected to true for the card
        //shuffle the deck
        setCards(shuffleCards(cards))
        //increase score by one
    }

    function shuffleCards(cards) {
        return [...cards].sort(() => Math.random() - 0.5);
    }


    return (
        <>
            {/* <ScoreBoard
                score={score}
                highScore={highScore}
                isGameOver={gameOver}
            /> */}

            <CardGame
                cards={cards}
                handleClick={handleClick}
            />
        </>
    )


    
    
}


