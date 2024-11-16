import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import LeftSide from "../component/layout-component/LeftSide";
import MainSection from "../component/layout-component/MainSection";
import RightSide from "../component/layout-component/RightSide";
import Navber from "../component/Navber";


const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navber></Navber>
      </nav>
      <main className="w-11/12 mx-auto pt-10 grid gap-3 md:grid-cols-12">
        <aside className="col-span-3">
          <LeftSide></LeftSide>
        </aside>
        <section className="col-span-6">
          <MainSection></MainSection>
        </section>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;