import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 10px;
  background-color: antiquewhite;
  box-shadow: #bbad9b 0px 0px 20px 0px;
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
`;

export const LogoStyle = styled.img`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 16px;
  height: 50px;
  width: 83px;
`;

export const InstructionStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto;
  text-align: center;
  font-size: 25px;
  margin-top: 90px;
`;

export const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;
