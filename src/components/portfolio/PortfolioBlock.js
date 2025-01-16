import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
  const { image, live, source, title, about } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      columnGap={"10px"}
      padding={"10px"}
    >
      <Box
        component={"img"}
        src={image}
        alt={"mockup"}
        borderRadius={"10%"}
        paddingBottom={"10px"}
      />
      <h1 style={{ fontSize: "2rem", paddingBottom: "10px" }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        //   py={"2rem"}
      >
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.5",
            color: " rgb(122 122 122)",
            textAlign: "center",
            margin: "0",
          }}
        >
          {about}
        </p>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
