import React from "react";

export default class VndUsd extends React.Component {
    constructor(props) {
        super(props);
    }
    renders = vnd => vnd / 23000;
    render() {
        return (
            <div className='form-group'>
                <h4>VND = {
                    this.props.valueInput.toLocaleString('vi', { style: 'currency', currency: 'VND' })
                }</h4>
                <input className='form-control' type='number'
                    onChange={(e) => {
                        const vnd = e.target.value;
                        const usd = this.renders(vnd);
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
