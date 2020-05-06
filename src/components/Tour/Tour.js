import React, { Component } from 'react'
import '../Tour/tour.scss'
export default class Tour extends Component {
    state={
        showInfo:false
    }
    handleInfo = ()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
        const {id,city,img,name,info}=this.props.tour;
        const removeTour = this.props.removeTour;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="No Image"/>
                    <span className="closeButton" onClick={()=>{removeTour(id)}}><i class="fas fa-2x fa-window-close"></i></span>
                </div>
                <div className="tourInfo">
                    <h3>{city}</h3>
                    <h4>{name}&nbsp;<span className="infoButton" onClick={this.handleInfo}><i class="fas fa-caret-square-down"></i></span></h4>
                    {this.state.showInfo&&<p>{info}</p>}
                </div>
            </article>
        )
    }
}
