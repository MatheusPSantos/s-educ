import { Fragment } from "react";
import Link from "next/link"; 
import { Navbar } from "./styles";
function DashBoardMenu() {
  return (
    <Fragment>
      <Navbar>
        <h2>Admin dashboard</h2>
        <h3>Managment</h3>
        <Link href="/pages">
          <a>Pages</a>
        </Link>
        <h3>Configurations</h3>
        <Link href="/config/credentials">
          <a>User credentials</a>
        </Link>
        <Link href="/config/theme">
          <a>Theme</a>
        </Link>
        <Link href="/config/project">
          <a>Project Configurations</a>
        </Link>
        <div>
          <Link href="/login">
            <a>SAIR</a>
          </Link>
        </div>
      </Navbar>
    </Fragment>
  );
}

export default DashBoardMenu;
