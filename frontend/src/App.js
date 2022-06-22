import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { ConnectButton } from "web3uikit";
import Coin from "./components/Coin/Coin";
import { abouts } from "./components/Coin/about";
import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import TokenModal from "./components/Modals/TokenModal";

const App = () => {
  const [btc, setBtc] = useState();
  const [eth, setEth] = useState();
  const [link, setLink] = useState();
  const [visible, setVisible] = useState(false);
  const [modalToken, setModalToken] = useState();
  const [modalPrice, setModalPrice] = useState();
  const Web3Api = useMoralisWeb3Api();
  const { Moralis, isInitialized } = useMoralis();

  useEffect(() => {
    async function getRatio(tick, setPerc) {
      const Votes = Moralis.Object.extend("Votes");
      const query = new Moralis.Query(Votes);
      query.equalTo("ticker", tick);
      query.descending("createdAt");
      const results = await query.first();
      const up = Number(results.attributes.up);
      const down = Number(results.attributes.down);
      let ratio = Math.round((up / (up + down)) * 100);
      setPerc(ratio);
    }
    if (isInitialized) {
      getRatio("BTC", setBtc);
      getRatio("ETH", setEth);
      getRatio("LINK", setLink);
    }

    async function createLiveQuery() {
      let query = new Moralis.Query("Votes");
      let subscription = await query.subscribe();
      subscription.on("update", (object) => {
        if (object.attributes.ticker === "LINK") {
          getRatio("LINK", setLink);
        } else if (object.attributes.ticker === "ETH") {
          getRatio("ETH", setLink);
        } else if (object.attributes.ticker === "BTC") {
          getRatio("BTC", setLink);
        }
      });
    }
    createLiveQuery();
  }, [isInitialized, Moralis]);

  useEffect(() => {
    async function fetchTokenPrice() {
      const options = {
        address:
          abouts[abouts.findIndex((x) => x.token === modalToken)].address,
      };
      const price = await Web3Api.token.getTokenPrice(options);
      setModalPrice(price.usdPrice.toFixed(2));
    }

    if (modalToken) {
      fetchTokenPrice();
    }
  });
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" height={50} />
          {/* <span className="logo-text">Sentiment</span> */}
        </div>
        <ConnectButton />
      </div>
      <div className="instructions">
        Where do you think this tokens are going? Up or Down?
      </div>
      <div className="list">
        <Coin
          perc={btc}
          token={"BTC"}
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
        <Coin
          perc={eth}
          token={"ETH"}
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
        <Coin
          perc={link}
          token={"LINK"}
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
      </div>
      <TokenModal
        visible={visible}
        modalPrice={modalPrice}
        setVisible={setVisible}
        modalToken={modalToken}
      />
    </>
  );
};

export default App;
