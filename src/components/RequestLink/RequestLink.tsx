
import RequestHistory from "./RequestHistory/RequestHistory";
import SubmitForm from "./SubmitForm/SubmitForm";

const RequestLink = () => {
  return (
    <div>
      <div>
      <div>
      <h2>Request testnet LINK</h2>
      <p>
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
