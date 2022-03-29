import React, { Component } from 'react'

export default class Model extends Component {
    render(){
    let modelStyle={
        display:'block',
        backgroundColor:'rgba(0,0,0,0.8)',

    }
  return (
    <div>
        <div className="modal show fade" style={modelStyle}>
            <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title">{this.props.title}</h5> */}
                            <button type="button" className="btn-close"></button>
                            </div>
                        </div>
                        <div className="modal-body">
                              {/* <img src={this.props.img} className="img-fluid" alt="" />
                            <p>{this.props.desc}</p> */}
                                <h1>Hello</h1>
                            </div>

                </div>

            </div>


    </div>
  )
}
}
