import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WomenSVG from "./image/woman.a89832eb.svg";
import ManSVG from "./image/man.aa6a4b32.svg";
import GirlSVG from "./image/girl.631b4fed.svg";
import BoySvg from "./image/boy.e7476d7e.svg";
import DocSVG from "./image/ilu_lean.a3c749ad.svg";
import PantsSVG from "./image/017-pants.b5cb83f0.svg";
import HeelsSVG from "./image/029-highheels.f466dc8d.svg";
import BrassierSVG from "./image/035-brassiere.03fa33c2.svg";
import DressSVG from "./image/042-dress.abe53419.svg";
import SwimSuitSVG from "./image/046-swimsuit.a719a34b.svg";
import PoloSVG from "./image/023-polo.a8898ee5.svg";
import ShoesSVG from "./image/027-shoes.98f568ac.svg";
import BlazerSVG from "./image/004-blazer.5e36e04f.svg";
import ShirtSVG from "./image/045-shirt.e4e42b7d.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewSizeChart = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    // centerMode: true,
    // variableWidth: true,
    arrows: false,
  };

  return (
    <>
      <div className="new-size-chart-container p-9">
        <h2 className="text-4xl font-bold">New Size Chart</h2>
        <p className="text-lg py-5">
          Select the starting template that matches your needs. Some templates
          may contain pre-filled data. Please, make sure that you add, delete or
          modify the data inside the template to match the sizing of your
          garnment.
        </p>
        <div className="new-card-container pt-9 px-24">
          <Tabs>
            <TabList className="tablist bg-black text-white text-center text-xl font-semibold py-2 capitalize">
              <Tab>Blank</Tab>
              <Tab>women</Tab>
              <Tab>men</Tab>
            </TabList>
            <div className="bg-[#E5E5E5] pt-20 px-20 m-auto">
              <TabPanel>
                <div className="cart-item-container">
                  <Slider {...settings}>
                    <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                      <img
                        src={WomenSVG}
                        alt=""
                        className=" m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                      />
                      <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                        Women
                      </p>
                    </div>
                    <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                      <img
                        src={ManSVG}
                        alt=""
                        className="m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                      />
                      <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                        Man
                      </p>
                    </div>
                    <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                      <img
                        src={GirlSVG}
                        alt=""
                        className=" m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                      />
                      <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                        Girl
                      </p>
                    </div>
                    <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                      <img
                        src={BoySvg}
                        alt=""
                        className=" m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                      />
                      <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                        Boy
                      </p>
                    </div>
                    <div className="cart-item bg-white p-7 rounded-lg border border-black border-solid">
                      <img
                        src={DocSVG}
                        alt=""
                        className="m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                      />
                      <p className=" pt-1 text-[#757575] font-bold text-sm capitalize text-center">
                        blank size <br /> chart
                      </p>
                    </div>
                  </Slider>
                </div>
              </TabPanel>
              <TabPanel>
                <Slider {...settings}>
                  <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                    <img
                      src={PantsSVG}
                      alt=""
                      className=" m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                    />
                    <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                      bottom Women
                    </p>
                  </div>
                  <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                    <img
                      src={HeelsSVG}
                      alt=""
                      className="m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                    />
                    <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                      shoes women
                    </p>
                  </div>
                  <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                    <img
                      src={DressSVG}
                      alt=""
                      className=" m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                    />
                    <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                      dress women
                    </p>
                  </div>
                  <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                    <img
                      src={SwimSuitSVG}
                      alt=""
                      className="m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                    />
                    <p className=" py-2 text-[#757575] font-bold text-sm capitalize text-center">
                      swim women
                    </p>
                  </div>
                  <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                    <img
                      src={BrassierSVG}
                      alt=""
                      className=" m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                    />
                    <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                      bra women
                    </p>
                  </div>
                </Slider>
              </TabPanel>
              <TabPanel>
                <Slider {...settings}>
                  <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                    <img
                      src={PoloSVG}
                      alt=""
                      className=" m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                    />
                    <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                      Polo
                    </p>
                  </div>
                  <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                    <img
                      src={ShoesSVG}
                      alt=""
                      className="m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                    />
                    <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                      shoes Man
                    </p>
                  </div>
                  <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                    <img
                      src={BlazerSVG}
                      alt=""
                      className=" m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                    />
                    <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                      Jacket Men
                    </p>
                  </div>
                  <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                    <img
                      src={ShirtSVG}
                      alt=""
                      className=" m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                    />
                    <p className="py-2 capitalize text-center text-[#757575] font-bold text-sm">
                      shirt men
                    </p>
                  </div>
                  <div className="cart-item bg-white p-8 rounded-lg border border-black border-solid">
                    <img
                      src={PantsSVG}
                      alt=""
                      className="m-auto bg-center bg-no-repeat bg-cover w-14 h-14 object-cover"
                    />
                    <p className="py-2 text-[#757575] font-bold text-sm capitalize text-center">
                      bottom men
                    </p>
                  </div>
                </Slider>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default NewSizeChart;
