import styled from "styled-components/native";

export const ContainerStyle = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderStyle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding-block: 10px;
  background-color: antiquewhite;
  /* box-shadow: #bbad9b 0px 0px 20px 0px; */
  position: fixed;
  z-index: 2;
  width: 100%;
`;

export const LogoStyle = styled.Image`
  display: flex;
  align-items: center;
  margin-left: 16px;
  height: 50px;
  width: 83px;
`;

export const LoginButtonStyle = styled.Text`
  margin-right: 16px;
`;

export const InstructionStyle = styled.Text`
  display: flex;
  justify-content: center;
  margin: 30px auto;
  text-align: center;
  font-size: 25px;
  margin-top: 20px;
`;

export const ListStyle = styled.FlatList``;
