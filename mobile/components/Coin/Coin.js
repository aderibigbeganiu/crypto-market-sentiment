import React, { useState, useEffect } from "react";
import { Circle, Container, Percentage, Token, Wave } from "./Coin.styled";

export default function Coin(props) {
  const { token, perc } = props;
  const [color, setColor] = useState();

  useEffect(() => {
    if (perc < 50) {
      setColor("#c43d08");
    } else {
      setColor("green");
    }
  }, [perc]);
  return (
    <Container>
      <Token>{token}</Token>
      <Circle>
        <Wave
          style={{
            marginTop: `${100 - perc}%`,
            boxShadow: `0 0 20px ${color}`,
            backgroundColor: color,
          }}
        ></Wave>
        <Percentage>{perc}%</Percentage>
      </Circle>
      {/* <Votes>
        <Button
          onClick={() => {
            if (isAuthenticated) {
              vote(true);
            } else {
              alert("Authenticate to vote");
            }
          }}
          text="Up"
          color="primary"
          type="button"
        />
        <Button
          onClick={() => {
            if (isAuthenticated) {
              vote(false);
            } else {
              alert("Authenticate to vote");
            }
          }}
          text="Down"
          color="red"
          theme="colored"
          type="button"
        />
      </Votes>
      <Votes>
        <Button
          onClick={() => {
            setModalToken(token);
            setVisible(true);
          }}
          text="INFO"
          theme="translucent"
          type="button"
        />
      </Votes> */}
    </Container>
  );
}
