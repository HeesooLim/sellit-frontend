import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Box } from "@mui/system";

const Container = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 0 1rem 0 #ededed;
  border-radius: 1rem;
  display: flex;
  transition: 0.3s;
  width: 35rem;
  &:hover {
    box-shadow: 0 0 1.5rem 0 #b5b5b5;
    transition: 0.3s;
  }

  @media only screen and (max-width: 700px) {
    width: auto;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const HomeItem = (data) => {
  const { title, price, description, location, timestamp, favourites } =
    data.data;

  const time = moment(timestamp, "YYYY-MM-DDTHH:mm:ss").fromNow();
  return (
    <Container>
      <Box sx={{ width: "100px", height: "100px" }}>
        <Image src={"https://picsum.photos/200/300"} alt="" />
      </Box>
      <Content>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="caption" style={{ color: "#999999" }}>
          {location} • {time}
        </Typography>
        <Box sx={{ display: "flex", marginTop: "auto" }}>
          ${price}
          <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "end" }}>
            <FavoriteIcon fontSize="xs" />5{/* <p>{favourites}</p> */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "flex-end",
              }}
            >
              <ChatBubbleIcon fontSize="xs" style={{ marginLeft: "0.5rem" }} />
              10
            </Box>
          </Box>
        </Box>
      </Content>
    </Container>
  );
};

export default HomeItem;
