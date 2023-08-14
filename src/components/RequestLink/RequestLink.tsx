
import RequestHistory from "./RequestHistory/RequestHistory";
import SubmitForm from "./SubmitForm/SubmitForm";
import "./RequestLink.css"
const RequestLink = () => {
  return (
    <div className="container">
      <div className="main_content">
      <div className="title">
      <h2>Request testnet LINK</h2>
      <p>
        Get testnet LINK for an account on one of the supported blockchain
        testnets so you can create and test your own oracle and Chainlinked
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
