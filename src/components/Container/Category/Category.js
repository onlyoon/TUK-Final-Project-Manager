import classes from "./Category.module.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className={classes.category}>
      <div className={classes.FlexContainer}>
        <div>
          <a href="wallet-manage">지갑관리</a>
        </div>
        <div>
          <a href="network-manage">네트워크관리</a>
        </div>
        <div>
          <a href="blockchain-manage">블록체인관리</a>
        </div>
      </div>
      <div className={classes.FlexContainer2}>
        <div className={classes.FlexContainer2_components}>
          {/* <Link to="/"> */}
          <button>지갑관리</button>
          {/* </Link> */}
          <button>네트워크관리</button>
          <button>블록체인관리</button>
        </div>
        <div>
          <button>결제내역</button>
        </div>
        <div>
          <button>지갑조회/등록</button>
          <button>내 정보</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
