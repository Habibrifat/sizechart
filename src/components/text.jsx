import myImage1 from "./.././image/Smart Size1.png";
import myImage2 from "./.././image/Smart Size2.png";
import myImage3 from "./.././image/Smart Size3.png";

const Text = () => {
  return (
    <div className=" w-9/12 m-auto">
      <div className="container flex items-center justify-evenly m-auto py-5 w-9/12 gap-10">
        <img src={myImage3} alt="My Image" className=" w-56" />
        <div className="">
          <h2 className=" font-semibold">Chest</h2>
          <p>
            Measure the bust line at the fullest part of your chest. Pull the
            tape as tight as you can without changing the shape of your breasts.
          </p>
        </div>
      </div>
      <div className="container flex items-center justify-between m-auto py-5 w-9/12 gap-14">
        <img src={myImage2} alt="My Image" className=" w-56" />
        <div className="">
          <h2 className=" font-semibold">Waist</h2>
          <p>
            Wrap the measuring tape around your torso at the smallest part of
            your waist. Typically this is an inch or so above your belly button
            and is also known as the natural waistline.
          </p>
        </div>
      </div>
      <div className="container flex items-center justify-between m-auto py-5 w-9/12 gap-14">
        <img src={myImage1} alt="My Image" className=" w-56" />
        <div className="">
          <h2 className=" font-semibold">Hips</h2>
          <p>Wrap the measuring tape around the widest part of the seat.</p>
        </div>
      </div>
    </div>
  );
};

export default Text;
