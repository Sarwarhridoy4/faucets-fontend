import Alert from "../Alert/Alert";
import "./SubmitForm.css";
const SubmitForm = () => {
  return (
    <div className='bg-white'>
      <Alert />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='info_form'>
              <div className=''>
                <form action=''>
                  <div className='wallet_address'>
                    <label htmlFor='wallet'>Wallet Address</label>
                    <div className='input_Wall'>
                      <input
                        type='text'
                        placeholder='Your Wallet Address...'
                        name='walletAddress'
                        className='input_class'
                      />
                    </div>
                  </div>
                  <div id='Request_Type' className='req-type'>
                    <label htmlFor='wallet'>Request Type</label>
                    <div className='inputFields'>
                      <div className='left_Input' id='linput'>
                        <input
                          type='text'
                          placeholder='Test link'
                          name='test_link'
                          disabled
                          className='input_class'
                          value='20 Test Link'
                        />
                      </div>
                      <div className='rightInput'>
                        <input
                          type='text'
                          placeholder='ETH'
                          name='eth'
                          disabled
                          className='input_class'
                          value='0.5 ETH'
                        />
                      </div>
                    </div>
                    <div className='req-button'>
                      <button type='submit'>Send Request</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col d-none d-lg-block'></div>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
