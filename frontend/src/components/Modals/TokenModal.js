import React from "react";
import { Modal } from "web3uikit";
import { abouts } from "../Coin/about";

function TokenModal(props) {
  const { visible, modalPrice, setVisible, modalToken } = props;
  return (
    <Modal
      isVisible={visible}
      onCloseButtonPressed={() => {
        setVisible(false);
      }}
      hasFooter={false}
      title={modalToken}
    >
      <div>
        <div>{`Price: $${modalPrice}`}</div>
        <span>About</span>
      </div>
      <div>
        {modalToken &&
          abouts[abouts.findIndex((x) => x.token === modalToken)].about}
      </div>
    </Modal>
  );
}

export default TokenModal;
