import React , {Component} from "react"
import data from "./data"
import Modal from "./Modal"
import MaterialDetails from "./MaterialDetails"

class Home extends React.Component {

    constructor () {
        super()
        this.state = {
            showColor: false,
            showModal: false
        }
    }

    onCardFocus(i) {
        this.setState({
            ["showColor" + i]: true
        })
    }

    cardFocusLeave(i) {
        this.setState({
            ["showColor" + i]: false
        })
    }

    getSelectedCrad(i) {
        this.setState({cardData: data.cardData[i]}, () => this.setState({showModal: true}))
    }

    closeModal() {
        this.setState({showModal: false})
    }

    render() {

        return (
            <div className="home">
                <div className="fabric-card-container" >
                    {data.cardData.map((e,index) => <div 
                        className="card" 
                        onMouseLeave={() => this.cardFocusLeave(index)} 
                        onMouseEnter={() => this.onCardFocus(index)}
                        onClick={() => this.getSelectedCrad(index)}
                    >
                        <div className="image">
                            <img src={e.image}/>
                        </div>
                        <div className="card-content">
                            <p className="title">{e.title}</p>
                            {this.state[`showColor${index}`] ? 
                                <div className="colors-container">
                                    {e.colors.map((color, i) => i < 6 && <div className="color" style={{background: color}}></div>)}
                                    {e.colors.length > 6 && <div>+ {e.colors.length - 6}</div>}
                                </div>
                            :
                                <p className="color-count">{e.colors.length} colors</p>
                            }
                        </div>
                    </div>)}
                </div>
                {this.state.showModal && <Modal closeModal={() => this.closeModal()} title="Material details" component={<MaterialDetails data={this.state.cardData}/>}/>}
            </div>
        ) 
    }

}

export default Home