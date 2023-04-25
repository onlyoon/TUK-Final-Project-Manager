import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./Container2.module.css";

import Main from "./Main/Main";
import WalletManage from "./WalletManager/WalletManage/WalletManage";
import NetworkManage from "./WalletManager/NetworkManage/NetworkManage";
import BlockchainManage from "./WalletManager/BlockchainManage/BlockchainManage";
import PaymentRecord from "./NetworkManager/PaymentRecord/PaymentRecord";
import MyInfo from "./BlockchainManager/MyInfo/MyInfo";
import WalletView from "./BlockchainManager/WalletView/WalletView";
import EmptyPage from "./EmptyPage/EmptyPage";

const Container2 = () => {
  return (
    <div className={classes.container2}>
      <BrowserRouter>
        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/WalletManage" element={<WalletManage />} />
          <Route path="/NetworkManage" element={<NetworkManage />} />
          <Route path="/BlockchainManage" element={<BlockchainManage />} />
          <Route path="/PaymentRecord" element={<PaymentRecord />} />
          <Route path="/WalletView" element={<WalletView />} />
          <Route path="/MyInfo" element={<MyInfo />} />
          <Route path="/*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Container2;
