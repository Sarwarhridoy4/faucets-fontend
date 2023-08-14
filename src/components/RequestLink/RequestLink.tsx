import Alert from "./Alert/Alert";
import RequestHistory from "./RequestHistory/RequestHistory";
import SubmitForm from "./SubmitForm/SubmitForm";

const RequestLink = () => {
  return (
    <div>
      <Alert />
      <SubmitForm />
      <RequestHistory />
    </div>
  );
};

export default RequestLink;
