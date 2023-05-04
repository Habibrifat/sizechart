const Plans = () => {
  return (
    <>
      <div className="plans-section p-4 bg-[#F3F5F7]">
        <div className="text-5xl font-bold">Plans</div>
        <p className=" font-bold text-xl pt-5 max-[680px]:text-base">
          Your current plan is:
          <span className="text-[#4C7B9A]"> 15-day Free Trial</span>
        </p>
        <p className="text-xl max-[680px]:text-base">
          You are currently on a 15-day trial of our Growth Plan. After the
          trial finishes, a countdown will appear on your charts. To remove the
          countdown, please upgrade your plan.
        </p>
        <div className="plans-card my-5 flex flex-row items-center justify-center gap-4 text-center max-[680px]:flex-col">
          <div className="card bg-white text-center py-4 w-[320px]  h-[560px] shadow-xl border-solid border-2 rounded">
            <p className=" text-2xl font-medium text-[#2196F3] py-4">Free</p>
            <span className="text-4xl py-4">Free</span>
            <hr className="my-4" />
            <button className="bg-black py-2 px-16 text-lg  font-medium text-white rounded my-6">
              Select
            </button>
            <p className="text-lg capitalize  pt-4 pb-2">
              2 published size charts
            </p>
            <p className="text-lg capitalize py-2">No watermark</p>
            <p className="text-lg capitalize py-2">
              Automatic conversion cm / in
            </p>
            <p className="text-lg capitalize py-2">Upload your images</p>
            <p className="text-lg capitalize py-2">
              Change icon, label and colors
            </p>
            <p className="text-lg capitalize py-2">Adjust popup width</p>
          </div>
          <div className="card bg-white text-center py-4 w-[320px] h-[560px] shadow-xl border-solid border-2 rounded">
            <p className=" text-2xl font-medium text-[#2196F3] py-4">Growth</p>
            <span className="text-4xl py-4">$6.99/month</span>
            <hr className="my-4" />
            <button className="bg-black py-2 px-16 text-lg  font-medium text-white rounded my-6">
              Select
            </button>
            <p className="text-lg capitalize  pt-4 pb-2">
              All features included in Free Plan
            </p>
            <p className="text-lg capitalize py-2">Unlimited size charts</p>
            <p className="text-lg capitalize py-2">Priority support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
