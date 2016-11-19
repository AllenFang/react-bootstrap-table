import React from 'react';

export default class ExamplSection extends React.Component {
    render() {
        const TragetComponent = this.props.component;
        return (
            <div className="row">
                <div className="panel">
                    <h3 className="demo-title">{ this.props.title }</h3>
                    <div id={this.props.id}></div>
                    <div className="col-md-12 demo-div heading-section">
                        { this.props.component }
                    </div>
                </div>
            </div>
        );
    }
}

//<h3 className="demo-title">{ this.props.title }</h3>