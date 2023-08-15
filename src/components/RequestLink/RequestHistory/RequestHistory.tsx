import { useState } from "react";
import "./RequestHistory.css";
const RequestHistory = () => {
  const [name, setName] = useState("eth");
  return (
    <div className='req_history'>
      <h2>Request History</h2>
      <div className='tabs d-flex d-lg-block'>
        <span
          onClick={() => setName("eth")}
          className={name === "eth" && "active_tabs"}
        >
          ETH Transaction History
        </span>
        <span
          onClick={() => setName("testLink")}
          className={name === "testLink" && "active_tabs"}
        >
          TestLink Transaction History
        </span>
      </div>
      <div className='history_text'>
        <div className='history'>
          <div className='container text-center'>
            <div className='row'>
              <div className='col'>
                {name === "eth" ? (
                  <table className='table table-bordered my-5 overflow-scroll'>
                    <thead>
                      <tr>
                        <th scope='col'>Sr</th>
                        <th scope='col'>Time</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Hash</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>12:30 AM</td>
                        <td>500</td>
                        <td>jnfnhikm666</td>
                      </tr>
                      <tr>
                        <th scope='row'>2</th>
                        <td>10:30 AM</td>
                        <td>450</td>
                        <td>guyuvtyfvgy5</td>
                      </tr>
                      <tr>
                        <th scope='row'>3</th>
                        <td>11:30 AM</td>
                        <td>800</td>
                        <td>xtgtvg666</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <table className='table table-bordered my-5 overflow-scroll'>
                    <thead>
                      <tr>
                        <th scope='col'>Sr</th>
                        <th scope='col'>Time</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Hash</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>05:30 AM</td>
                        <td>500</td>
                        <td>jnfnhikmvghvg6</td>
                      </tr>
                      <tr>
                        <th scope='row'>2</th>
                        <td>05:30 AM</td>
                        <td>350</td>
                        <td>guyuvtyfvgy5</td>
                      </tr>
                      <tr>
                        <th scope='row'>3</th>
                        <td>11:30 AM</td>
                        <td>1000</td>
                        <td>xtgtvg666</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
              <div className='col d-none d-lg-flex'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHistory;
