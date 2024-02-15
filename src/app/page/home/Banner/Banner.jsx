import Header from "../../../Components/Header/Header";

const Banner = () => {
  return (
    <>
      <div className="banner-top">
        <Header />

        <div className="banner-txt">
          <h1>
            Find cheap bus tickets <br />
            for your next trip
          </h1>
          <p>Easily compare and book your next trip with Busbud</p>

          <div className="banner-srch">
            <div className="source-starting">
              <label htmlFor="origin">origin</label>
              <input type="text" placeholder="Leaving from..." />
            </div>
            <div className="source-ending">
              <label htmlFor="destination">destination</label>
              <input type="text" placeholder="Going to..." />
            </div>
            <div className="date-bus">
              <input type="date" name="" id="" />
            </div>
            <div className="search-bus">
              <button>
                <i className="ri-search-2-line" />
              </button>
            </div>
          </div>
          <div className="slogan">
          <i class="ri-hand-coin-line"></i>
            <p>
              Providing reliable customer service for your <br />booking and travel
              needs."
            </p>
            <br />
            <i class="ri-hand-coin-line"></i>
            <p>
              Your go-to platform for bus tickets, <br /> serving multiple routes.
            </p>
            <br />
            <i class="ri-hand-coin-line"></i>
            <p>Building a platform for easy bus ticket reservations.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
