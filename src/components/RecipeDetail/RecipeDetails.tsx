import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Image,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import "./RecipeDetails.css";

export default function RecipeDetails() {
  const ApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const [recipeInfo, setRecipeInfo] = useState<any>(null);
  const [showInstruction, setShowInstruction] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);

  function showCookingIntructions() {
    setShowInstruction(!showInstruction);
  }
  function showCookingIngridents() {
    setShowIngredients(!showInstruction);
  }

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${ApiKey}&includeNutrition=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipeInfo(data);
        console.log(data);
      });
  }, []);

  let { recipeId } = useParams();

  if (!recipeInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <main>
        <section className="recipe-detail-cointainer">
          <div>
            <h2>{recipeInfo.title}</h2>

            <Image
              borderRadius="20px"
              boxSize="300px"
              src={recipeInfo.image}
              alt="recipe image"
            />
          </div>
          <div className="steps-wrapper">
            <h3>Preparation time: {recipeInfo.readyInMinutes}</h3>
            <h3>Servings: {recipeInfo.servings}</h3>

            <Stack direction="row" spacing={4} align="center">
              <Button
                colorScheme="teal"
                onClick={showCookingIntructions}
                variant="outline"
              >
                Steps
              </Button>

              <Button
                colorScheme="teal"
                onClick={showCookingIngridents}
                variant="outline"
              >
                Ingredients
              </Button>
            </Stack>
          </div>
          {/* <img src={recipeInfo.image} alt="" /> */}
        </section>

        <section className="summary-container">
          <h2>Summary of the recipe: </h2>
          <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}></p>
        </section>
      </main>

      <Modal isOpen={showInstruction} onClose={() => setShowInstruction(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Preparation Instruction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h4
              dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            ></h4>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={showIngredients} onClose={() => setShowIngredients(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ingredients</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
              {recipeInfo.extendedIngredients.map((ingredient: any) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* <h4>Instruction:</h4>
      <h4 dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}></h4> */}
      {/* <h4>Steps</h4>
      {recipeInfo.analyzedInstructions[0].steps.map((item: any) => {
        return (
          <div>
            <li>{item.step}</li>
          </div>
        );
      })} */}
      {/* <h4>Ingredients:</h4>
      <ul>
        {recipeInfo.extendedIngredients.map((ingredient: any) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul> */}
    </>
  );
}
