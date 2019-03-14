import React from 'react';
import step1 from '../Assets/Step1.png';
import step2 from '../Assets/Step2.png';
import step3 from '../Assets/Step3.png';
import step4 from '../Assets/Step4.png';
import './style.css';

export default class FourStep extends React.Component {
  render() {
    return (
      <div id="Fifth-Section">
        <div className="Custom-Wrapper5">
          <div className="container">
            <div className="absoluteContent5">
              <h4>Get Started in 4 steps</h4>
              <div className="row">
                <div className="col-md-3">
                  <div className="services1-section text-center">
                    <img src={step1} alt="Step1" className="img-fluid" />
                    <h6>Lorem ipsum</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do{' '}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="services1-section text-center">
                    <img src={step2} alt="Step2" className="img-fluid" />
                    <h6>Lorem ipsum</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do{' '}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="services1-section text-center">
                    <img src={step3} alt="Step3" className="img-fluid" />
                    <h6>Lorem ipsum</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do{' '}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="services1-section text-center">
                    <img src={step4} alt="Step4" className="img-fluid" />
                    <h6>Lorem ipsum</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
