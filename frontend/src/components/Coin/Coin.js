import React, { useState, useEffect } from "react";
import { Button } from "web3uikit";
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import { Circle, Container, Token, Votes, Wave } from "./Coin.styled";

const Coin = (props) => {
  const { perc, token, setModalToken, setVisible } = props;

  const [color, setColor] = useState();
  const contractProcessor = useWeb3ExecuteFunction();
  const { isAuthenticated } = useMoralis();

  useEffect(() => {
    if (perc < 50) {
      setColor("#c43d08");
    } else {
      setColor("green");
    }
  }, [perc]);

  async function vote(upDown) {
    let options = {
      contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
      functionName: "vote",
      abi: [
        {
          inputs: [
            { internalType: "string", name: "_ticker", type: "string" },
            { internalType: "bool", name: "_vote", type: "bool" },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      params: {
        _ticker: token,
        _vote: upDown,
      },
    };

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        alert("Vote succesful!");
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  }

  return (
    <Container>
      <Token>{token}</Token>
      <Circle style={{ boxShadow: `0 0 20px ${color}` }}>
        <Wave
          style={{
            marginTop: `${100 - perc}%`,
            boxShadow: `0 0 20px ${color}`,
            backgroundColor: color,
          }}
        ></Wave>
        <div className="percentage">{perc}%</div>
      </Circle>
      <Votes>
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
      </Votes>
    </Container>
  );
};

export default Coin;
