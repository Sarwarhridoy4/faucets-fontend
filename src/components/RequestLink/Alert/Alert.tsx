import alert from '../../../assets/alert.svg'
import "./Alert.css"
const Alert = () => {
  return (
    <div className='form'>
      <div className="warning d-flex align-align-items-center gap-2">
      <img src={alert} alt="alert" />
      <p>
        Your wallet is connected to <b>Ethereum Kovan</b> , so you are requesting
        <b>Ethereum Kovan</b> Link/ETH.
      </p>
      </div>
    </div>
  );
};

export default Alert;
