import React, { Component } from 'react';
import Axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import Header from '../Header';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';

class VirtualTerminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNo: '',
      expiryDate: '',
      CVV: '',
      zipCode: '',
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    //e.preventDefault();
    // console.log('Login Called');
    const { cardNo, expiryDate, CVV, zipCode } = this.state;
    console.log(cardNo, expiryDate, CVV, zipCode);
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onChangeCardNo = e => {
    this.setState({ cardNo: e.target.value });
  };

  onChangeExpiryDate = e => {
    this.setState({ expiryDate: e.target.value });
  };

  onChangeCVV = e => {
    this.setState({ CVV: e.target.value });
  };

  onChangeZipCode = e => {
    this.setState({ zipCode: e.target.value });
  };

  onClickBtn = e => {
    const { cardNo, expiryDate, CVV, zipCode } = this.state;
    console.log(cardNo, expiryDate, CVV, zipCode);

    Axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-ApiKey': 'mMfovkcm7t2c$S=%_y0l'
      },
      url: 'https://api.wammopay.com/v1/bill',
      data: {
        card: {
          Address1: 'Wall street, 12',
          CVV: CVV,
          City: 'New York',
          Country: 'USA',
          Email: 'sergey@mailinator.com',
          ExpirationMonth: '03',
          ExpirationYear: '2019',
          Name: 'Visa',
          Number: cardNo,
          Phone: '+1-555-2455755',
          State: 'New York',
          ZipCode: zipCode
        },
        Charge: {
          Amount: 50,
          CurrencyType: 'EUR',
          Description: '50 EUR payment'
        }
      }
    })
      .then(res => {
        console.log(res.data);
        const apiData = res.data['Data'];
        console.log(apiData);
        alert('Payment Successfull');
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };

  render() {
    const { cardNo, expiryDate, CVV, zipCode } = this.state;
    return (
      <div className="template-light">
        <div class="main-wrapper" id="mainWrapper">
          <Header />
          <div class="page-wrapper d-flex clearfix">
            <SideBar />
            {/* <!-- ====== Page Content Area Start ====== --> */}
            <div className="page-content">
              {/* <!-- Wrapper --> */}
              <div className="wrapper wrapper-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="box box-info bg-boxshadow mb-30">
                        {/*<div className="box-header mb-30">
                          <h3>Order Details</h3>
                        </div>*/}
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <form className="order-form" method="" action="">
                            {/* <div className="row">
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>Product</label>
                                  </div>
                                  <div className="col-md-8">
                                    <select name="select">
                                      <option value="d">Select Product</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>Order Amount</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      placeholder="$ 0.00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row mb-20">
                              <div className="col-xl-12 col-md-12 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-2">
                                    <label>Order Note</label>
                                  </div>
                                  <div className="col-md-10">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      placeholder="Enter if any note you want to add"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
    */}
                            <h3 className="mb-30 mt-30">Card Details</h3>
                            <div className="row mb-20">
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>Card Number</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      value={cardNo}
                                      placeholder="Enter the Card Number"
                                      onChange={this.onChangeCardNo}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>Expiration Date</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      value={expiryDate}
                                      placeholder="Enter the date"
                                      onChange={this.onChangeExpiryDate}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row mb-30">
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>CVV/CVV2</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      value={CVV}
                                      placeholder="Enter your CVV number"
                                      onChange={this.onChangeCVV}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>Billing Zipcode</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      value={zipCode}
                                      placeholder="Enter the zip code"
                                      onChange={this.onChangeZipCode}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="text-right">
                              <button
                                type="button"
                                onClick={this.toggle}
                                className="btn waves-effect m-2 btn-round btn-default"
                              >
                                Make the payment
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Card Details</ModalHeader>
            <ModalBody>
              <div className="row mb-20">
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="row form-r">
                    <div className="col-md-4">
                      <label>Card Number</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form"
                        name=""
                        value={cardNo}
                        placeholder="Enter the Card Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="row form-r">
                    <div className="col-md-4">
                      <label>Expiration Date</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form"
                        name=""
                        placeholder="Enter the date"
                        value={expiryDate}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-30">
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="row form-r">
                    <div className="col-md-4">
                      <label>CVV/CVV2</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form"
                        name=""
                        placeholder="Enter your CVV number"
                        value={CVV}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12">
                  <div className="row form-r">
                    <div className="col-md-4">
                      <label>Billing Zipcode</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form"
                        name=""
                        placeholder="Enter the zip code"
                        value={zipCode}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.onClickBtn}>
                Confirm
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VirtualTerminal)
);
