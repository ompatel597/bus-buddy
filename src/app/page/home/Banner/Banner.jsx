import Header from "../../../Components/Header/Header";
import WhyCard from "../../../Components/WhyCard/WhyCard";

import icon1 from "../../../assets/icon1.svg";
import icon2 from "../../../assets/icon2.svg";
import icon3 from "../../../assets/icon3.svg";

const Banner = () => {
  return (
    <>


      <div className="main_banner">
        <Header />
        <div className="banner_div">


          <div className="banner_text">
            <h1>Find cheap bus tickets for your next trip</h1>
            <p>Easily compare and book your next trip with Busbud</p>
          </div>

          <div className="search_form">
            <form action="">
              <div className="source-starting">
                <label htmlFor="origin">ORIGIN</label>
                <input type="text" placeholder="Leaving from..." />
              </div>
              <div className="source-ending">
                <label htmlFor="destination">DESTINATION</label>
                <input type="text" placeholder="Going to..." />
              </div>
              <div className="date-bus">
                <label htmlFor="date">DATE</label>
                <input type="date" name="" id="datepicker" autoComplete="off" />
              </div>
              <div className="search-bus">
                <button>
                  <i className="ri-search-2-line" />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="whycard_container">
        <div className="whycard_div">
          <WhyCard img={icon1} heading="Your pick of rides at low prices" text="No matter where you’re going,find the perfect ride from our wide range of destinations and routes at low prices." />
          <WhyCard img={icon2} heading="Trust who you travel with" text="We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform." />
          <WhyCard img={icon3} heading="Scroll, click, tap and go!" text="Booking a ride has never been easier!  you can book a ride close to you in just minutes." />
        </div>

      </div>



    </>
  );
};

export default Banner;
