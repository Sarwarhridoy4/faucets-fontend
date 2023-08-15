import "./Navbar.css";
import faucets from "../../assets/faucets.webp";
import user from "../../assets/user.svg";
import wallet from "../../assets/wallet.svg";
import { AiOutlineDown } from 'react-icons/ai';
const Navigation = () => {
  return (
    <nav className='header bg-white'>
      <div className='container'>
        <div className='header_Container'>
          <div className='logo'>
            <a href='/'>
              <h2>Faucets</h2>
            </a>
          </div>
          <div className='right-content'>
            <div className='networks'>
              <div className='networkList'>
                <div className='network_State d-flex align-items-center justify-content-center'>
                  <p className="d-flex align-items-center justify-content-center">
                    <img src={faucets} alt='faucets' className='networksImg m-0' />
                    <span id='smallText' className="d-none d-lg-inline">Ethereum Kovan</span>
                  </p>
                  <span>
                  <AiOutlineDown/>
                  </span>
                </div>
              </div>
              <div className='connect_wallet'>
                <button className='connectButton'>
                  <img src={wallet} alt='wallet' className="me-1" />
                  <span className='btn-text d-none d-lg-block'>Connect Wallet</span>
                </button>
              </div>
              <div className="user">
                <div className="icon">
                  <img src={user} alt="user"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
