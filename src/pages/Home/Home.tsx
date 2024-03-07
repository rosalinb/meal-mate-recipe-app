import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Heading } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  const [trivia, setTrivia] = useState("");
  const [joke, setJoke] = useState("");
  const [showFacts, setShowFacts] = useState(false);
  const [showJokes, setShowJokes] = useState(false);

  const ApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  function getTrivia() {
    setShowFacts(!showFacts);
    fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${ApiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setTrivia(data.text);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function getJoke() {
    setShowJokes(!showJokes);
    fetch(`https://api.spoonacular.com/food/jokes/random?apiKey=${ApiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.text);
      });
  }

  return (
    <main>
      <section className="home-page-content">
        <Heading mb="5" as="h1">
          Find you perfect meal <br></br> with MealMate
        </Heading>
        <Heading mb="10" as="h2" size="sm">
          Search from our wide range of meal collections
        </Heading>

        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" onClick={getTrivia} variant="outline">
            Food Trivia
          </Button>

          <Button colorScheme="teal" onClick={getJoke} variant="outline">
            Food Joke
          </Button>
        </Stack>
      </section>

      <Modal isOpen={showFacts} onClose={() => setShowFacts(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{trivia}</ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={showJokes} onClose={() => setShowJokes(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Joke</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{joke}</ModalBody>
        </ModalContent>
      </Modal>

      <section className="homepage-container1">
        <article className="section-article-box">
          <h4>Everything is good, when it is about Food.</h4>
          <p>Select your favourite food from our wide range of cuisine. </p>
          <p>
            Try it out in your kitchen with the our quick guide of your
            favourite recipe.
          </p>
          <p>
            Every recipe details comes with stepwise instruction and
            ingredientlist that helps your to shop your groceries easily.
          </p>

          <div>
            <button className="button" style={{ verticalAlign: "middle" }}>
              <Link to="/cuisine">
                <span>Search By Cuisine</span>
              </Link>
            </button>
          </div>
        </article>

        <div className="section-image-box">
          <img
            className="cuisine-image"
            src="https://i.pinimg.com/originals/c6/3f/19/c63f194cb6616f52548ba51a3572515f.gif"
            alt="cuisine recipe image"
          />
        </div>
      </section>

      <section className="homepage-container2">
        <div className="section-image-box">
          <img
            className="calories-image"
            src="https://www.dish-works.com/wp-content/uploads/Rainbow-Rice-Bowls_GIF-1_toppings-min.gif"
            alt="calories image"
          />
        </div>

        <article className="section-article-box2">
          <h4>Count your memories not your calories!</h4>
          <p>
            Having said that, we all want to keep a check on out daily calorie
            intake.
          </p>
          <p>
            Just give us your daily calories intake and we provide you our 3
            course meal option.
          </p>
          <p>Get full recipe details to give them a go.</p>

          <div>
            <button className="button" style={{ verticalAlign: "middle" }}>
              <Link className="link" to="/calories">
                <span>Search By Calories</span>
              </Link>
            </button>
          </div>
        </article>
      </section>

      <section className="homepage-container1">
        <article className="section-article-box">
          <h4>From Pantry to Plate</h4>

          <p>
            Have a look at the ingredients you have and turn them into amazing
            recipes.
          </p>
          <p>
            We take a mix of your available ingredients and match them with our
            amazing recipe ideas.
          </p>
          <p>
            Wondering how to prepare! Well check out our details recipe guide.
          </p>
          <div>
            <button className="button" style={{ verticalAlign: "middle" }}>
              <Link className="link" to="/search-by-ingredients">
                <span>Search By Ingredient</span>
              </Link>
            </button>
          </div>
        </article>

        <div className="section-image-box">
          <img
            className="by-ingredient-image"
            src="https://cdn.dribbble.com/users/590596/screenshots/6200385/a--_converted_.gif"
            alt="grocery image"
          />
        </div>
      </section>

      <section className="homepage-container2">
        <div className="section-image-box">
          <img
            className="joke-image"
            src="https://www.rd.com/wp-content/uploads/2020/04/Pizzapuns32-1-scaled.jpg"
            alt="calories image"
          />
        </div>

        <article className="section-article-box2">
          <h4>Food is not always about Cooking!</h4>
          <p>Its fun know some facts about food. Have a trivia time.</p>
          <p>Share a laugh with fun joke realted to food and dining.</p>
          <p>Get full recipe details to give them a go.</p>

          <div style={{ display: "flex", gap: "5px" }}>
            <Button colorScheme="teal" onClick={getTrivia} variant="outline">
              Food Trivia
            </Button>

            <Button colorScheme="teal" onClick={getJoke} variant="outline">
              Food Joke
            </Button>
          </div>
        </article>
      </section>
    </main>
  );
}
