import Card from '../components/card/card';
import './mainpage.css';
import img1 from '../assets/img/img1.png';
function Mainpage() {
  return (
    <main className="Main">
      <div className="card-container">
        <Card
          img={img1}
          head="Boiled Egg"
          para="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
        />
        <Card
          img={img1}
          head="Boiled Egg"
          para="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
        />
        <Card
          img={img1}
          head="Boiled Egg"
          para="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
        />
        <Card
          img={img1}
          head="Boiled Egg"
          para="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
        />
        <Card
          img={img1}
          head="Boiled Egg"
          para="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
        />
        <Card
          img={img1}
          head="Boiled Egg"
          para="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
        />
      </div>

      {/* <Card
        img={img1}
        head="Boiled Egg"
        para="Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. "
      /> */}
    </main>
  );
}

export default Mainpage;
