import "./index.scss";

function Header () {
  return (
    <header className="header">
      <div className="contents">
        <div>
          로고 자리
        </div>

        <nav className="navigation">
          <ul>
            <li>
              메뉴 1
            </li>
            <li>
              메뉴 2
            </li>
            <li>
              메뉴 2
            </li>
            <li>
              회원 아이콘
            </li>
            <li>
              알림 로고
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;