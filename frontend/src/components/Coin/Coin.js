import React, { useState, useEffect } from "react";
import "./Coin.css";
import { Button } from "web3uikit";
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";

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
      contractAddress: process.env.CONTRACT_ADDRESS,
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
    <div style={{ marginBottom: "50px" }}>
      <div className="token">{token}</div>
      <div className="circle" style={{ boxShadow: `0 0 20px ${color}` }}>
        <div
          className="wave"
          style={{
            marginTop: `${100 - perc}%`,
            boxShadow: `0 0 20px ${color}`,
            backgroundColor: color,
          }}
        ></div>
        <div className="percentage">{perc}%</div>
      </div>
      <div className="votes">
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
      </div>
      <div className="votes">
        <Button
          onClick={() => {
            setModalToken(token);
            setVisible(true);
          }}
          text="INFO"
          theme="translucent"
          type="button"
        />
      </div>
    </div>
  );
};

export default Coin;
