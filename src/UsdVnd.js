import React from "react";

export default class UsdVnd extends React.Component {
    constructor(props) {
        super(props);
    }
    renders = usd => usd * 23000;
    render() {
        return (
            <div className='form-group'>
                <h4>USD {
                    this.props.valueInput.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                }</h4>
                <input className='form-control' type='number'
                    onChange={(e) => {
                        const usd = e.target.value;
                        const vnd = this.renders(usd);

                        this.props.renderInput({
                            usd,
                            vnd,
                        });
                    }}
                    value={this.props.valueInput}
                />
            </div>
        )
    }
}
