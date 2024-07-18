import React, { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import img1 from "/img/harli-marten-n7a2OJDSZns-unsplash.jpg";
import img2 from "/img/joakim-honkasalo-HShd0DeMRIc-unsplash.jpg";
import img3 from "/img/jukka-heinovirta-NgZj1mZn1YY-unsplash.jpg";
import img4 from "/img/kien-do-NjT4O7WYmwk-unsplash.jpg";
import img5 from "/img/payam-moin-afshari-GpUoC2EtwQ4-unsplash.jpg";
import img6 from "/img/saad-chaudhry-cYpqYxGeqts-unsplash.jpg";
import img7 from "/img/alexandra-gorn-52jG7-FN22Y-unsplash.jpg";
import img8 from "/img/faiz-mohomed-8mYOlmdaOsc-unsplash.jpg";
import img9 from "/img/pete-alexopoulos-XyVQW6VcEs8-unsplash.jpg";
import { useCart } from "../Store";
import "./SearchForm.css";

const allImg = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

const moviesList = [
  { id: 1, title: "The Shawshank Redemption", year: 1994 },
  { id: 2, title: "The Godfather", year: 1972 },
  { id: 3, title: "The Dark Knight", year: 2008 },
  { id: 4, title: "The Godfather: Part II", year: 1974 },
  { id: 5, title: "12 Angry Men", year: 1957 },
  { id: 6, title: "Schindler's List", year: 1993 },
  { id: 7, title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { id: 8, title: "Pulp Fiction", year: 1994 },
  { id: 9, title: "The Good, the Bad and the Ugly", year: 1966 },
  { id: 10, title: "Fight Club", year: 1999 },
  { id: 11, title: "Forrest Gump", year: 1994 },
  { id: 12, title: "Inception", year: 2010 },
  { id: 13, title: "The Matrix", year: 1999 },
  {
    id: 14,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    id: 15,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { id: 17, title: "The Godfather", year: 1972 },
  { id: 18, title: "The Dark Knight", year: 2008 },
  { id: 20, title: "12 Angry Men", year: 1957 },
  { id: 21, title: "Jurassic Park", year: 1993 },
  { id: 22, title: "Gladiator", year: 2000 },
  { id: 23, title: "Avatar", year: 2009 },
  { id: 24, title: "Titanic", year: 1997 },
  { id: 25, title: "The Silence of the Lambs", year: 1991 },
  {
    id: 26,
    title: "Indiana Jones and the Raiders of the Lost Ark",
    year: 1981,
  },
  { id: 27, title: "Saving Private Ryan", year: 1998 },
  { id: 28, title: "Spirited Away", year: 2001 },
  { id: 29, title: "Interstellar", year: 2014 },
  { id: 30, title: "Back to the Future", year: 1985 },
];

export default function SearchForm() {
  const [queryMovie, setQueryMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const { initialCart, setCart } = useCart();

  const filterObj = (params) => {
    const selectedMovie = Object.values(moviesList).filter((movie) => {
      return movie.title.includes(params);
    });

    const selectedMoviesTitle = selectedMovie.map((movie) => movie.title);

    return selectedMoviesTitle;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    const filterObject2 = filterObj(event.target.value);
    setQueryMovie(filterObject2);
  };

  //   const handleCheckboxChange = (movie: string) => {
  //     setSelectedMovie((prevSelectedMovies) =>
  //       prevSelectedMovies.includes(movie)
  //         ? prevSelectedMovies.filter((id) => id !== movie)
  //         : [...prevSelectedMovies, movie]
  //     );
  //   };

  const handleCheckboxChange = (movie) => {
    setSelectedMovie(movie);
  };

  const handleResetSelect = () => {
    console.log(selectedMovie);
    setSelectedMovie([]);
  };

  //   const handleScaleImage = (e) => {
  //     // e.target.style.zIndex = "1000";
  //     // e.target.style.transform = "scale(1.2)";
  //     // e.target.style.position = "relative";
  //     // e.target.style.transition = "transform 0.2s ease";
  //     console.log("yes");
  //     e.target.style.backgroundSize = "200%";
  //   };

  //   function handleResetImageScale(e) {
  //     e.target.style.zIndex = "0";
  //     e.target.style.transform = "scale(1)";
  //   }

  const totalItems = selectedMovie.length;

  const handleSubmitCheckbox = () => {
    setCart(selectedMovie.length);
    console.log(selectedMovie);
  };

  console.log(initialCart);

  const newStyles = {
    width: "250px",
    height: "250px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-size 0.3s ease",
    backgroundSize: "100%",
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          alignItems: "center",
          right: 0,
          width: "20px",
          height: "20px",
          backgroundColor: "rgba(249, 242, 242, 0.598);",
        }}
      >
        {initialCart.totalItems}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label id="title" htmlFor="title">
              Title
            </label>
            <Input id="title" type="text" onChange={handleChange} />
          </div>
          <Button type="submit">submit</Button>
        </form>
      </div>
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        maxHeight={"400px"}
        // h="600px"
      >
        <Box w="50%" h="400px">
          {/* <form onSubmit={handleSubmitCheckbox}> */}
          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            overflow={"auto"}
            h={"300px"}
          >
            <CheckboxGroup
              colorScheme="green"
              onChange={handleCheckboxChange}
              value={selectedMovie}
            >
              {queryMovie.map((movie) => (
                <Checkbox
                  key={movie}
                  // isChecked={selectedMovie.includes(movie)}
                  // onChange={() => handleCheckboxChange(movie)}
                  value={movie}
                >
                  {movie}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </Stack>
          <Button
            colorScheme="blue"
            alignSelf="center"
            style={{ display: "block" }}
            size={"sm"}
            onClick={handleSubmitCheckbox}
          >
            Submit
          </Button>
          {/* </form> */}
          <Button
            colorScheme="green"
            alignSelf="center"
            style={{ display: "block" }}
            size={"sm"}
            onClick={handleResetSelect}
          >
            {" "}
            Reset{" "}
          </Button>
        </Box>
        <Box
          w="50%"
          display={"flex"}
          justifyContent={"flex-start"}
          flexDir={"column"}
        >
          <h1>Total Items : {totalItems}</h1>
          <br />
          <form onSubmit={handleSubmitCheckbox}>
            <CheckboxGroup
              value={selectedMovie}
              onChange={handleCheckboxChange}
            >
              {selectedMovie.map((movie) => (
                <Checkbox
                  // isChecked={selectedMovie.includes(movie)}
                  key={movie}
                  // onChange={() => handleCheckboxChange(movie)}
                >
                  {movie}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </form>
        </Box>
      </Box>
      {/* <Box
        display={"flex"}
        maxW="full"
        justifyContent={"center"}
        // flexDirection={"column"}
        flexWrap={"wrap"}
      >
        {allImg.map((url) => (
          <img
            className="imgCSS"  
            // sx={{
            //   width: "250px",
            //   height: "250px",
            //   transition: "transform 0.3s ease",
            //   //   objectFit: "cover",
            //   _hover: {
            //     backgroundSize: "120%",
            //   },
            //   //   _hover: {
            //   //     transform: "scale(1.2)",
            //   //   },
            // }}

            // sx={{
            //   //   backgroundImage: `url(${url})`,
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "100%",
            //   transition: "background-size 0.3s ease",
            //   width: "250px",
            //   height: "250px",
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   overflow: "hidden",
            //   _hover: {
            //     backgroundSize: "120%",
            //   },
            // }}
            // {...newStyles}
            // boxSize="350px"
            // padding={"2rem 2rem"}
            src={url}
            // onMouseOver={handleScaleImage}
            // onMouseLeave={handleResetImageScale}
          ></img>
        ))}
      </Box> */}
    </>
  );
}
