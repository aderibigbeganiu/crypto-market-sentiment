import React, { useState } from "react";
import {
  ContainerStyle,
  HeaderStyle,
  InstructionStyle,
  ListStyle,
  LoginButtonStyle,
  LogoStyle,
} from "./App.styled";
import Coin from "./components/Coin/Coin";
import { StatusBar } from "react-native";

export default function App() {
  const [btc, setBtc] = useState(4);
  const [eth, setEth] = useState(50);
  const [link, setLink] = useState(100);

  const DATA = [
    {
      id: 1,
      perc: btc,
      token: "BTC",
    },
    {
      id: 2,
      perc: eth,
      token: "ETH",
    },
    {
      id: 3,
      perc: link,
      token: "LINK",
    },
  ];
  const renderItem = ({ item }) => <Coin token={item.token} perc={item.perc} />;

  return (
    <ContainerStyle style={{ marginTop: StatusBar.currentHeight || 0 }}>
      <HeaderStyle>
        <LogoStyle source={require("../mobile/assets/logo.jpg")} />
        <LoginButtonStyle>Connect Wallet</LoginButtonStyle>
      </HeaderStyle>
      <InstructionStyle>
        Where do you think this tokens are going? Up or Down?
      </InstructionStyle>
      <ListStyle
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </ContainerStyle>
  );
}
