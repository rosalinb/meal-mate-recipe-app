import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import {
  Avatar,
  WrapItem,
  Text,
  Divider,
  Stack,
  Skeleton,
  HStack,
} from "@chakra-ui/react";
import "./Cuisine.css";
import { isMobile } from "../../config/Breakpoint";

const CUISINES = [
  {
    name: "American",
    image:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "British",
    image:
      "https://images.unsplash.com/photo-1606946144557-0d04974df266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJpdGlzaCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Chinese",
    image:
      "https://images.pexels.com/photos/688803/pexels-photo-688803.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },

  {
    name: "French",
    image:
      "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Greek",
    image:
      "https://images.pexels.com/photos/709823/pexels-photo-709823.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Indian",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Italian",
    image:
      "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Korean",
    image:
      "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Japanese",
    image:
      "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Mexican",
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },

  {
    name: "Spanish",
    image:
      "https://images.pexels.com/photos/4765652/pexels-photo-4765652.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Thai",
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Vietnamese",
    image:
      "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Eastern European",
    image:
      "https://images.pexels.com/photos/6252725/pexels-photo-6252725.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Middle Eastern",
    image:
      "https://images.pexels.com/photos/8286779/pexels-photo-8286779.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function Cuisine() {
  const resultRef = useRef<any>(null);
  const [cuisineData, setCuisineData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const ApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  function getCuisineData(cuisineType: any) {
    setIsFetching(true);
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}&cuisine=${cuisineType}&instructionsRequired=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setCuisineData(data.results);
        setIsFetching(false);
      });
  }

  function handleCuisineType(event: any) {
    setCuisineData([]);
    getCuisineData(event.target.alt);
  }

  useEffect(() => {
    if (resultRef && resultRef.current) {
      resultRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [cuisineData]);

  return (
    <div>
      <Heading mb="5" as="h1" size="lg">
        Cuisines From Around the word
      </Heading>

      <section className="cuisine-container">
        {CUISINES.map((cuisine) => {
          return (
            <>
              <WrapItem
                key={cuisine.name}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  border: !isMobile ? "1px solid teal" : "",
                  borderRadius: 5,
                }}
              >
                <button
                  disabled={isFetching}
                  onClick={handleCuisineType}
                  value={cuisine.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    size="md"
                    name={cuisine.name}
                    src={cuisine.image}
                    mb={2}
                    mt={3}
                  />
                  {!isMobile && <Divider width={50} mb={1}></Divider>}
                  <Text
                    color="teal"
                    fontSize="xs"
                    fontWeight={!isMobile ? "semibold" : "normal"}
                    mb={2}
                  >
                    {cuisine.name}
                  </Text>
                </button>
              </WrapItem>
            </>
          );
        })}

        {/* <button disabled={isFetching} onClick={handleCuisineType}>
          American
        </button> */}
      </section>

      <section className="recipe-container" ref={resultRef}>
        {isFetching && (
          <>
            <div>
              <HStack>
                <Skeleton height="150px" width={isMobile ? "28vw" : "250px"} />
                <Skeleton height="150px" width={isMobile ? "28vw" : "250px"} />
                <Skeleton height="150px" width={isMobile ? "28vw" : "250px"} />
              </HStack>
            </div>
          </>
        )}

        {cuisineData &&
          cuisineData.map((item: any) => {
            return (
              <>
                <section className="recipe-card" key={item.id}>
                  <h3> {item.title}</h3>

                  <img src={item.image} alt="recipe image" />

                  <Link
                    className="recipe-link"
                    to={`/recipe-details/${item.id}`}
                  >
                    View Recipe
                  </Link>
                </section>
              </>
            );
          })}
      </section>
    </div>
  );
}
