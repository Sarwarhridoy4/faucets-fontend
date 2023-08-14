
import RequestHistory from "./RequestHistory/RequestHistory";
import SubmitForm from "./SubmitForm/SubmitForm";

const RequestLink = () => {
  return (
    <div className='bg-[#eef2fe]'>
      <div className="py-12">
      <div className="container mx-auto px-[30px]">
      <h2 className="text-[#9b1fe9] text-[35px] font-semibold mb-5">Request testnet LINK</h2>
      <p className="text-[16px] text-[#7177a5]">
        Get testnet LINK for an account on one of the supported blockchain
        testnets so you can <br /> create and test your own oracle and Chainlinked
        smart contract
      </p>
      </div>
      </div>
      <SubmitForm />
      <RequestHistory />
    </div>
  );
};

export default RequestLink;
