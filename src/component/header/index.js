import "./index.scss";
import Polygon from "../../images/Polygon 3.png";

function Header () {
  return (
    <header className="header">
      <div className="contents">
        <div>
          로고 자리
        </div>
        <nav className="navigation">
          <ul>
            <div className="menu">
              <li>
                환자 관리
              </li>
              <img src={Polygon} width="20px"/>
            </div>
            <div className="menu">
              <li>
                의약품 교품거래
              </li>
              <img src={Polygon} width="20px"/>
            </div>
            <div className="menu">
              <li>
                의약품 관리
              </li>
              <img src={Polygon} width="20px"/>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;