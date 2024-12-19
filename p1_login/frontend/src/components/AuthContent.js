import * as React from 'react';

import { request, setAuthHeader } from './helpers/axios_helper';

export default class AuthContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            status: '',
            userId: '',  // Assuming userId is required for the reimbursement
            errors: {}
        };
    }


    componentDidMount() {
        request(
            "GET",
            "/messages",
            {}).then(
            (response) => {
                this.setState({data: response.data})
            }).catch(
            (error) => {
                if (error.response.status === 401) {
                    setAuthHeader(null);
                } else {
                    this.setState({data: error.response.code})
                }

            }
        );
    };

  render() {
    const { amount, description, date, userId, errors } = this.state;
    return (
        /*
        <div className="row justify-content-md-center">
            <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Backend response</h5>
                        <p className="card-text">Content:</p>
                        <ul>
                            {this.state.data && this.state.data
                                .map((line) =>
                                    <li key={line}>{line}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        */
        
       
            <div className="container">
                <h2>Create New Reimbursement</h2>
                <form onSubmit={this.onSubmit}>


                <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeHandler}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            className="form-control"
                            value={this.state.amount}
                            onChange={this.onChangeHandler}
                            required
                        />
                    </div>



                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

    );
  };
}