import React, { useState, useEffect } from 'react';
import './App.css';
import appleImg from './images/apple.png';
import bananaImg from './images/banana.png';
import cherryImg from './images/cherry.png';
import grapeImg from './images/grape.png';
import flowerImg from './images/flower.png';

import carImg from './images/car.jpeg';
import bikeImg from './images/bike.jpeg';
import busImg from './images/bus.jpeg';
import truckImg from './images/truck.jpeg';
import bookImg from './images/book.jpeg';

import dogImg from './images/dog.jpeg';
import monkeyImg from './images/monkey.png';
import elephantImg from './images/elephant.jpeg';
import lionImg from './images/lion.jpeg';
import chairImg from './images/chair.jpeg';

import pizzaImg from './images/pizza.jpeg';
import burgerImg from './images/burger.jpeg';
import sushiImg from './images/sushi.jpeg';
import icecreamImg from './images/icecream.jpeg';
import penguinImg from './images/penguin.jpeg';

import teddyImg from './images/teddy.jpeg';
import toyImg from './images/toy.jpeg';
import roboImg from './images/robo.jpeg';
import ballImg from './images/ball.jpeg';
import doughnutImg from './images/doughnut.jpeg';

import sparrowImg from './images/sparrow.jpeg';
import peacockImg from './images/peacock.jpeg';
import owlImg from './images/owl.jpeg';
import parrotImg from './images/parrot.jpeg';
import tigerImg from './images/tiger.jpeg';

import fishImg from './images/fish.jpeg';
import crabImg from './images/crab.jpeg';
import starfishImg from './images/starfish.jpeg';
import octopusImg from './images/octopus.jpeg';
import shoesImg from './images/shoes.jpeg';

import redImg from './images/red.png';
import blueImg from './images/blue.png';
import pinkImg from './images/pink.png';
import orangeImg from './images/orange.png';
import cameraImg from './images/camera.png';

import circleImg from './images/circle.jpeg';
import squareImg from './images/square.jpeg';
import triangleImg from './images/triangle.png';
import rectangleImg from './images/rectangle.png';
import duckImg from './images/duck.png';

import footballImg from './images/football.jpeg';
import basketballImg from './images/basketball.jpeg';
import tennisImg from './images/tennis.png';
import cricketImg from './images/cricket.png';
import watermelonImg from './images/watermelon.png';

import pianoImg from './images/piano.jpeg';
import violinImg from './images/violin.png';
import drumImg from './images/drum.png';
import guitarImg from './images/guitar.jpeg';
import hammerImg from './images/hammer.jpeg';

import doctorImg from './images/doctor.jpeg';
import teacherImg from './images/teacher.png';
import policeImg from './images/police.jpeg';
import chefImg from './images/chef.png';
import dolphinImg from './images/dolphin.jpeg';

import londonImg from './images/london.png';
import parisImg from './images/paris.png';
import newyorkImg from './images/newyork.png';
import berlinImg from './images/berlin.png';
import telephoneImg from './images/telephone.jpeg';

import earthImg from './images/earth.png';
import marsImg from './images/mars.png';
import jupiterImg from './images/jupiter.png';
import saturnImg from './images/saturn.png';
import juiceImg from './images/juice.jpeg';

import printerImg from './images/printer.png';
import mouseImg from './images/mouse.png';
import monitorImg from './images/monitor.png';
import cpuImg from './images/cpu.png';
import hamsterImg from './images/hamster.jpeg';

import hoodieImg from './images/hoodie.png';
import shortsImg from './images/shorts.png';
import dressImg from './images/dress.jpeg';
import sweaterImg from './images/sweater.jpeg';
import pinetreeImg from './images/pinetree.jpeg';

import englishImg from './images/english.png';
import spanishImg from './images/spanish.png';
import frenchImg from './images/french.png';
import germanImg from './images/german.png';
import summerImg from './images/summer.jpeg';

import happyImg from './images/happy.png';
import sadImg from './images/sad.png';
import angryImg from './images/angry.png';
import surprisedImg from './images/surprised.png';
import tvImg from './images/tv.jpeg';

import januaryImg from './images/january.jpeg';
import octoberImg from './images/october.jpeg';
import marchImg from './images/march.png';
import septemberImg from './images/september.png';
import eggImg from './images/egg.jpeg';

import sunnyImg from './images/sunny.png';
import rainyImg from './images/rainy.png';
import cloudyImg from './images/cloudy.png';
import snowyImg from './images/snowy.png';
import puddingImg from './images/pudding.png';

import roseImg from './images/rose.jpeg';
import tulipImg from './images/tulip.jpeg';
import sunflowerImg from './images/sunflower.png';
import lilyImg from './images/lily.png';
import colosseumImg from './images/colosseum.jpeg';

import carrotImg from './images/carrot.png';
import broccoliImg from './images/broccoli.png';
import brinjalImg from './images/brinjal.png';
import tomatoImg from './images/tomato.png';
import biryaniImg from './images/biryani.jpeg';

import kennelImg from './images/kennel.png';
import hiveImg from './images/hive.png';
import nestImg from './images/nest.png';
import caveImg from './images/cave.png';
import umbrellaImg from './images/umbrella.png';

import cupImg from './images/cup.png';
import vaseImg from './images/vase.jpeg';
import mirrorImg from './images/mirror.png';
import clockImg from './images/clock.jpeg';
import boatImg from './images/boat.png';

import lipstickImg from './images/lipstick.png';
import creamImg from './images/cream.png';
import nailpolishImg from './images/nailpolish.png';
import blushImg from './images/blush.png';
import kimonoImg from './images/kimono.jpeg';

import hatImg from './images/hat.png';
import ringImg from './images/ring.png';
import watchImg from './images/watch.jpeg';
import sunglassesImg from './images/sunglasses.jpeg';
import croissantImg from './images/croissant.jpeg';

import antImg from './images/ant.jpeg';
import beeImg from './images/bee.jpeg';
import butterflyImg from './images/butterfly.jpeg';
import ladybugImg from './images/ladybug.png';
import bagImg from './images/bag.png';

import cupboardImg from './images/cupboard.png';
import tableImg from './images/table.jpeg';
import bedImg from './images/bed.png';
import sofaImg from './images/sofa.jpeg';
import toasterImg from './images/toaster.png';

import lizardImg from './images/lizard.png';
import snakeImg from './images/snake.jpeg';
import turtleImg from './images/turtle.png';
import crocodileImg from './images/crocodile.jpeg';
import giftImg from './images/gift.jpeg';

import earImg from './images/ear.png';
import eyeImg from './images/eye.png';
import tongueImg from './images/tongue.png';
import handImg from './images/hand.png';
import catImg from './images/cat.jpeg';

const monkeyegories = {
  Fruits: [
    { name: "apple", image: appleImg, isOdd: false },
    { name: "banana", image: bananaImg, isOdd: false },
    { name: "cherry", image: cherryImg, isOdd: false },
    { name: "grape", image: grapeImg, isOdd: false },
    { name: "flower", image: flowerImg, isOdd: true }
  ],
  Vehicles: [
    { name: "car", image: carImg, isOdd: false },
    { name: "bike", image: bikeImg, isOdd: false },
    { name: "bus", image: busImg, isOdd: false },
    { name: "truck", image: truckImg, isOdd: false },
    { name: "book", image: bookImg, isOdd: true }
  ],
  Animals: [
    { name: "dog", image: dogImg, isOdd: false },
    { name: "monkey", image: monkeyImg, isOdd: false },
    { name: "elephant", image: elephantImg, isOdd: false },
    { name: "lion", image: lionImg, isOdd: false },
    { name: "chair", image: chairImg, isOdd: true }
  ],
  Food: [
    { name: "pizza", image: pizzaImg, isOdd: false },
    { name: "burger", image: burgerImg, isOdd: false },
    { name: "sushi", image: sushiImg, isOdd: false },
    { name: "icecream", image: icecreamImg, isOdd: false },
    { name: "penguin", image: penguinImg, isOdd: true }
  ],
  Toys: [
    { name: "teddy", image: teddyImg, isOdd: false },
    { name: "toy", image: toyImg, isOdd: false },
    { name: "robo", image: roboImg, isOdd: false },
    { name: "ball", image: ballImg, isOdd: false },
    { name: "doughnut", image: doughnutImg, isOdd: true }
  ],
  Birds: [
    { name: "sparrow", image: sparrowImg, isOdd: false },
    { name: "peacock", image: peacockImg, isOdd: false },
    { name: "owl", image: owlImg, isOdd: false },
    { name: "parrot", image: parrotImg, isOdd: false },
    { name: "tiger", image: tigerImg, isOdd: true }
  ],
  SeaCreatures: [
    { name: "fish", image: fishImg, isOdd: false },
    { name: "crab", image: crabImg, isOdd: false },
    { name: "starfish", image: starfishImg, isOdd: false },
    { name: "octopus", image: octopusImg, isOdd: false },
    { name: "shoes", image: shoesImg, isOdd: true }
  ],
  Colors: [
    { name: "red", image: redImg, isOdd: false },
    { name: "blue", image: blueImg, isOdd: false },
    { name: "pink", image: pinkImg, isOdd: false },
    { name: "orange", image: orangeImg, isOdd: false },
    { name: "camera", image: cameraImg, isOdd: true }
  ],
  Shapes: [
    { name: "circle", image: circleImg, isOdd: false },
    { name: "square", image: squareImg, isOdd: false },
    { name: "triangle", image: triangleImg, isOdd: false },
    { name: "rectangle", image: rectangleImg, isOdd: false },
    { name: "duck", image: duckImg, isOdd: true }
  ],
  Sports: [
    { name: "football", image: footballImg, isOdd: false },
    { name: "basketball", image: basketballImg, isOdd: false },
    { name: "tennis", image: tennisImg, isOdd: false },
    { name: "cricket", image: cricketImg, isOdd: false },
    { name: "watermelon", image: watermelonImg, isOdd: true }
  ],
  MusicalInstruments: [
    { name: "piano", image: pianoImg, isOdd: false },
    { name: "violin", image: violinImg, isOdd: false },
    { name: "drum", image: drumImg, isOdd: false },
    { name: "guitar", image: guitarImg, isOdd: false },
    { name: "hammer", image: hammerImg, isOdd: true }
  ],
  Professions: [
    { name: "doctor", image: doctorImg, isOdd: false },
    { name: "teacher", image: teacherImg, isOdd: false },
    { name: "police", image: policeImg, isOdd: false },
    { name: "chef", image: chefImg, isOdd: false },
    { name: "dolphin", image: dolphinImg, isOdd: true }
  ],
  Landmarks: [
    { name: "london", image: londonImg, isOdd: false },
    { name: "paris", image: parisImg, isOdd: false },
    { name: "newyork", image: newyorkImg, isOdd: false },
    { name: "berlin", image: berlinImg, isOdd: false },
    { name: "telephone", image: telephoneImg, isOdd: true }
  ],
  Planets: [
    { name: "earth", image: earthImg, isOdd: false },
    { name: "mars", image: marsImg, isOdd: false },
    { name: "jupiter", image: jupiterImg, isOdd: false },
    { name: "saturn", image: saturnImg, isOdd: false },
    { name: "juice", image: juiceImg, isOdd: true }
  ],
  ComputerParts: [
    { name: "printer", image: printerImg, isOdd: false },
    { name: "mouse", image: mouseImg, isOdd: false },
    { name: "monitor", image: monitorImg, isOdd: false },
    { name: "cpu", image: cpuImg, isOdd: false },
    { name: "hamster", image: hamsterImg, isOdd: true }
  ],
  Clothing: [
    { name: "hoodie", image: hoodieImg, isOdd: false },
    { name: "shorts", image: shortsImg, isOdd: false },
    { name: "dress", image: dressImg, isOdd: false },
    { name: "sweater", image: sweaterImg, isOdd: false },
    { name: "pinetree", image: pinetreeImg, isOdd: true }
  ],
  Languages: [
    { name: "english", image: englishImg, isOdd: false },
    { name: "spanish", image: spanishImg, isOdd: false },
    { name: "french", image: frenchImg, isOdd: false },
    { name: "german", image: germanImg, isOdd: false },
    { name: "summer", image: summerImg, isOdd: true }
  ],
  Emotions: [
    { name: "happy", image: happyImg, isOdd: false },
    { name: "sad", image: sadImg, isOdd: false },
    { name: "angry", image: angryImg, isOdd: false },
    { name: "surprised", image: surprisedImg, isOdd: false },
    { name: "tv", image: tvImg, isOdd: true }
  ],
  Months: [
    { name: "january", image: januaryImg, isOdd: false },
    { name: "october", image: octoberImg, isOdd: false },
    { name: "march", image: marchImg, isOdd: false },
    { name: "september", image: septemberImg, isOdd: false },
    { name: "egg", image: eggImg, isOdd: true }
  ],
  Weather: [
    { name: "sunny", image: sunnyImg, isOdd: false },
    { name: "rainy", image: rainyImg, isOdd: false },
    { name: "cloudy", image: cloudyImg, isOdd: false },
    { name: "snowy", image: snowyImg, isOdd: false },
    { name: "pudding", image: puddingImg, isOdd: true }
  ],
  Flowers: [
    { name: "rose", image: roseImg, isOdd: false },
    { name: "tulip", image: tulipImg, isOdd: false },
    { name: "sunflower", image: sunflowerImg, isOdd: false },
    { name: "lily", image: lilyImg, isOdd: false },
    { name: "colosseum", image: colosseumImg, isOdd: true }
  ],
  Vegetables: [
    { name: "carrot", image: carrotImg, isOdd: false },
    { name: "broccoli", image: broccoliImg, isOdd: false },
    { name: "brinjal", image: brinjalImg, isOdd: false },
    { name: "tomato", image: tomatoImg, isOdd: false },
    { name: "biryani", image: biryaniImg, isOdd: true }
  ],
  Shelters: [
    { name: "kennel", image: kennelImg, isOdd: false },
    { name: "hive", image: hiveImg, isOdd: false },
    { name: "nest", image: nestImg, isOdd: false },
    { name: "cave", image: caveImg, isOdd: false },
    { name: "umbrella", image: umbrellaImg, isOdd: true }
  ],
  HomeItems: [
    { name: "cup", image: cupImg, isOdd: false },
    { name: "vase", image: vaseImg, isOdd: false },
    { name: "mirror", image: mirrorImg, isOdd: false },
    { name: "clock", image: clockImg, isOdd: false },
    { name: "boat", image: boatImg, isOdd: true }
  ],
  BeautyProducts: [
    { name: "lipstick", image: lipstickImg, isOdd: false },
    { name: "cream", image: creamImg, isOdd: false },
    { name: "nailpolish", image: nailpolishImg, isOdd: false },
    { name: "blush", image: blushImg, isOdd: false },
    { name: "kimono", image: kimonoImg, isOdd: true }
  ],
  Accessories: [
    { name: "hat", image: hatImg, isOdd: false },
    { name: "ring", image: ringImg, isOdd: false },
    { name: "watch", image: watchImg, isOdd: false },
    { name: "sunglasses", image: sunglassesImg, isOdd: false },
    { name: "croissant", image: croissantImg, isOdd: true }
  ],
  Insects: [
    { name: "ant", image: antImg, isOdd: false },
    { name: "bee", image: beeImg, isOdd: false },
    { name: "butterfly", image: butterflyImg, isOdd: false },
    { name: "ladybug", image: ladybugImg, isOdd: false },
    { name: "bag", image: bagImg, isOdd: true }
  ],
  Furniture: [
    { name: "bed", image: bedImg, isOdd: false },
    { name: "table", image: tableImg, isOdd: false },
    { name: "cupboard", image: cupboardImg, isOdd: false },
    { name: "sofa", image: sofaImg, isOdd: false },
    { name: "toaster", image: toasterImg, isOdd: true }
  ],
  Reptiles: [
    { name: "lizard", image: lizardImg, isOdd: false },
    { name: "snake", image: snakeImg, isOdd: false },
    { name: "turtle", image: turtleImg, isOdd: false },
    { name: "crocodile", image: crocodileImg, isOdd: false },
    { name: "gift", image: giftImg, isOdd: true } // Odd one out
  ], 
  Reptiles: [
    { name: "lizard", image: lizardImg, isOdd: false },
    { name: "snake", image: snakeImg, isOdd: false },
    { name: "turtle", image: turtleImg, isOdd: false },
    { name: "crocodile", image: crocodileImg, isOdd: false },
    { name: "gift", image: giftImg, isOdd: true } // Odd one out
  ], 
  Organs: [
    { name: "ear", image: earImg, isOdd: false },
    { name: "eye", image: eyeImg, isOdd: false },
    { name: "tongue", image: tongueImg, isOdd: false },
    { name: "hand", image: handImg, isOdd: false },
    { name: "cat", image: catImg, isOdd: true } // Odd one out
  ], 
};

// Helper function to shuffle array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const OddManOutGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentmonkeyegory, setCurrentmonkeyegory] = useState(null);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [feedback, setFeedback] = useState(''); // New feedback state

  // Start the game
  const handleStartGame = () => {
    setGameStarted(true);
    setCurrentmonkeyegory('Fruits');
  };

  // Reset the game for restart
  const handleRestartGame = () => {
    setGameStarted(false);
    setCurrentmonkeyegory(null);
    setShuffledImages([]);
    setSelectedOption(null);
    setScore(0);
    setShowAnswer(false);
    setGameFinished(false);
    setFeedback('');
  };

  // Shuffle images whenever a new monkeyegory is selected
  useEffect(() => {
    if (currentmonkeyegory) {
      const shuffled = shuffleArray([...monkeyegories[currentmonkeyegory]]);
      setShuffledImages(shuffled);
      setSelectedOption(null);
      setShowAnswer(false);
      setFeedback('');
    }
  }, [currentmonkeyegory]);

  // Handle option selection
  const handleOptionSelect = (index) => {
    if (selectedOption === null) { // Allow selection only once
      setSelectedOption(index);
      const isCorrect = shuffledImages[index].isOdd;
      if (isCorrect) {
        setScore(score + 1);
        setFeedback('Correct!'); // Show feedback for correct answer
      } else {
        setFeedback('Wrong!'); // Show feedback for wrong answer
      }
    }
  };

  // Show the correct answer when the "Show Answer" button is clicked
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  // Proceed to the next monkeyegory or finish the game
  const handleNextmonkeyegory = () => {
    const monkeyegoryKeys = Object.keys(monkeyegories);
    const currentIndex = monkeyegoryKeys.indexOf(currentmonkeyegory);
    if (currentIndex + 1 < monkeyegoryKeys.length) {
      setCurrentmonkeyegory(monkeyegoryKeys[currentIndex + 1]);
    } else {
      setGameFinished(true);
    }
    setSelectedOption(null); // Reset selection
    setShowAnswer(false); // Hide answer
    setFeedback(''); // Clear feedback
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Odd Man Out</h1>
      {!gameStarted && !gameFinished && (
        <button className="start-btn" onClick={handleStartGame}>Start Game</button>
      )}

      {gameStarted && !gameFinished && (
        <>
          <h2 className="monkeyegory-title">{currentmonkeyegory}</h2>
          <div className="image-grid">
            {shuffledImages.map((item, index) => (
              <div
                key={index}
                className={`image-item ${selectedOption === index ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(index)}
                style={{
                  border: selectedOption === index
                    ? (shuffledImages[index].isOdd ? '4px solid green' : '4px solid red')
                    : '2px solid #ddd'
                }}
              >
                <img src={item.image} alt={item.name} className="game-image" />
              </div>
            ))}
          </div>

          {/* Feedback message (Correct choice or Wrong choice) */}
          {feedback && <div className="feedback-message">{feedback}</div>}

          {/* Show Answer button only when the answer is wrong */}
          {selectedOption !== null && !shuffledImages[selectedOption].isOdd && !showAnswer && (
            <button className="show-answer-btn" onClick={handleShowAnswer}>Show Answer</button>
          )}

          {/* Show correct answer only when "Show Answer" is clicked */}
          {showAnswer && (
            <div className="correct-answer">
              Correct Answer: {shuffledImages.find(item => item.isOdd).name}
            </div>
          )}

          {/* Next button */}
          <button className="next-btn" onClick={handleNextmonkeyegory} disabled={selectedOption === null}>Next</button>
        </>
      )}

      {gameFinished && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p className="total-score">Your Total Score: {score}/30</p>
          <button className="restart-btn" onClick={handleRestartGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default OddManOutGame;