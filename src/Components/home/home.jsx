import React from "react";
import img from "../assets/img.png";
import img1 from "../assets/ReactLogo.png";
import img2 from "../assets/fff.png";
import img3 from "../assets/male.png";
import img4 from "../assets/myImage.png";
function Home() {
  return (
    <>
      <div className="Testimonail">
        {/* purple card */}
        <div className="card card--bg--purple">
          <header className="card-header">
            <img src={img} className="card-img" alt="" />
            <div>
              <h3>Mustafa John</h3>
              <p>Web Developer </p>
            </div>
          </header>
          <p className="card-lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit illum
            quaerat ducimus totam mollitia quos nesciunt beatae odio molestiae
            in dolorem, architecto ipsum? Laborum soluta quisquam ut omnis
            explicabo fugit?
          </p>
          <p className="card-qoute">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est
            voluptas facere provident dolore dignissimos harum vitae itaque id
            quo omnis laboriosam commodi officia quam vero, eos eligendi
            reiciendis? Consequatur! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod est voluptas facere provident dolore
            dignissimos harum vitae itaque id quo omnis laboriosam commodi
            officia quam vero, eos eligendi reiciendis? Consequatur! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quod est voluptas
          </p>
        </div>

        {/* another card */}

        <div className="card card--bg--gray-blue">
          <header className="card-header ">
            <img src={img2} className="card-img" alt="" />
            <div>
              <h3>Mustafa</h3>
              <p>hello every one </p>
            </div>
          </header>
          <p className="card-lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit illum.
          </p>
          <p className="card-qoute">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est
            voluptas facere provident dolore dignissimos harum vitae itaque id
            quo omnis laboriosam commodi officia quam vero, eos eligendi
            reiciendis? Consequatur!
          </p>
        </div>

        {/* another card */}

        <div className="card">
          <header className="card-header">
            <img src={img1} className="card-img" alt="" />
            <div>
              <h3>Mustafa gool</h3>
              <p>hello every one </p>
            </div>
          </header>
          <p className="card-lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit illum.
          </p>
          <p className="card-qoute">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est
            voluptas facere provident dolore dignissimos harum vitae itaque id
            quo omnis laboriosam commodi officia quam vero, eos
          </p>
        </div>

        {/* another card */}

        <div className="card card--bg--black-blue">
          <header className="card-header">
            <img src={img3} className="card-img" alt="" />
            <div>
              <h3>Mustafa n</h3>
              <p>hello every one </p>
            </div>
          </header>
          <p className="card-lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit illum
            quaerat ducimus totam mollitia quos nesciunt explicabo fugit?
          </p>
          <p className="card-qoute">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est
            voluptas facere provident dolore dignissimos harum vitae itaque id
            quo omnis laboriosam commodi officia quam vero, eos eligendi
            reiciendis? Consequatur! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod est voluptas facere provident dolore
            dignissimos harum vitae itaque id quo omnis laboriosam commodi
            officia quam vero, eos eligendi reiciendis? Consequatur! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quod est voluptas
            facere provident dolore dignissimos harum vitae itaque id quo omnis
            laboriosam commodi officia quam vero, eos eligendi reiciendis?
            Consequatur!
          </p>
        </div>

        {/* another card */}

        <div className="card ">
          <header className="card-header">
            <img src={img4} className="card-img" alt="" />
            <div>
              <h3>Mustafa</h3>
              <p>hello every one </p>
            </div>
          </header>
          <p className="card-lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit illum
            quaerat ducimus totam mollitia quos nesciunt beatae odio molestiae
            in dolorem, architecto ipsum? Laborum soluta quisquam ut omnis
            explicabo fugit?
          </p>
          <p className="card-qoute">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est
            voluptas facere provident dolore dignissimos harum vitae itaque id
            quo omnis laboriosam commodi officia quam vero, eos eligendi
            reiciendis? Consequatur! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod est voluptas facere provident dolore
            dignissimos harum vitae itaque id quo omnis laboriosam commodi
            officia quam vero, eos eligendi reiciendis? Consequatur! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quod est voluptas
            facere provident dolore dignissimos harum vitae itaque id quo omnis
            laboriosam commodi officia quam vero, eos eligendi reiciendis?
            Consequatur!
          </p>
        </div>
      </div>

      <footer>
        <h4>Mustafa 2023</h4>
      </footer>
    </>
  );
}
export default Home;
