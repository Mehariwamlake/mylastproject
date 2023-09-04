import Nav from "./Nav";
import Header from "./Header";
import Topleft from "./Topleft";

export default function Layout({childeren}) {
    return (
        <div className="page bg-site text-white bg-cover bg-no-repeat">
            <Topleft></Topleft>
            <Header></Header>
            <Nav></Nav>
            {childeren}
        </div>
    )
  }