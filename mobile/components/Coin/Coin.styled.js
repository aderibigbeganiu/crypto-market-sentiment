import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
`;

export const Token = styled.Text`
  text-align: center;
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-block: 20px;
`;

export const Circle = styled.View`
  border: 4px solid rgba(0, 0, 0, 0.4);
  width: 250px;
  height: 250px;
  border-radius: 250 / 2;
  overflow: hidden !important;
  position: relative;
  z-index: 1;
`;

export const Wave = styled.View`
  position: relative;
  right: 30%;
  width: 160%;
  height: 160%;
  transform-origin: 50% 50%;
  border-radius: 78% 56%;
  animation: spin 5s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Percentage = styled.Text`
  position: absolute;
  top: 75px;
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, 0.3);
  font-size: 70px;
  font-weight: 600;
`;

export const Votes = styled.Button`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;
