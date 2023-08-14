import alert from '../../../assets/alert.svg'

const Alert = () => {
  return (
    <div>
      <img src={alert} alt="alert" />
      <p>
        Your wallet is connected to <b>Ethereum Kovan</b> , so you are requesting
        <b>Ethereum Kovan</b> Link/ETH.
      </p>
    </div>
  );
};

export default Alert;
