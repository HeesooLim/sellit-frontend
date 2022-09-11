import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import NearMeIcon from "@mui/icons-material/NearMe";
import RoundedOuterContainer from "../../components/rounded-container/RoundedOuterContainer";
import HomeItem from "../../components/home-item/HomeItem";

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  min-height: 100vh;
  padding: 3rem;
`;

const ItemsDiv = styled.div`
  max-height: 40vh;
  overflow-y: scroll;
  padding: 0 1.5rem;

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const InnerContainer = styled.div`
  padding: 1rem;
  box-shadow: 0 0 0.5rem 0 light-grey;
`;

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/product/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);

  return (
    <OuterDiv>
      <RoundedOuterContainer style={{ display: "flex" }}>
        <Typography variant="h6" component="h6">
          Enter your location
        </Typography>
        <Box style={{ margin: "1rem 0" }}>
          <FormControl variant="standard" fullWidth>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <NearMeIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Typography variant="h6" component="h6">
          Items near you
        </Typography>
        <ItemsDiv>
          {items.map((item) => (
            <HomeItem data={item} key={item.id} />
          ))}
        </ItemsDiv>
      </RoundedOuterContainer>
    </OuterDiv>
  );
};

export default Home;
