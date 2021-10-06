import "./index.scss";
import arrowIcon from "../../images/arrow.png";
import logo from "../../images/logo.png";

function Header () {
  return (
    <header className="header">
      <div className="contents">
        <img src={logo} className="logo"/>
        <nav className="navigation">
          <ul>
          <div className="menu">
              <li className="home">
                홈
              </li>
            </div>
            <div className="menu">
              <li>
                환자 관리
              </li>
              <img src={arrowIcon} width="15px"/>
            </div>
            <div className="menu">
              <li>
                의약품 교품거래
              </li>
              <img src={arrowIcon} width="15px"/>
            </div>
            <div className="menu">
              <li>
                의약품 관리
              </li>
              <img src={arrowIcon} width="15px"/>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;