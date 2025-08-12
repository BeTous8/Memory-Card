import React, { useState } from 'react';


export default function ScoreBoard({score, highScore, isGameOver}) {
    
    
    return (
        <>
            <div className='score-board'>
                <div className='score'><b>Score :</b> {score}</div>
                <div className='highScore'><b>High Score :</b> {highScore}</div>
            </div>
        
        </>
    )
}