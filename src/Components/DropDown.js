import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import {debounce} from "lodash"

class DropDown extends Component {
    constructor(props){
        super(props)
        this.state = {
            showContent: false,
            filteredData: props.data
        }
    }

    selectedValue(e) {
        this.setState({ selectedValue: e.option, showContent: false, searchValue: e.option })
        this.props.dropDownPayload(e.option)
    }

    filterData = e => {
        this.setState({searchValue: e})
        const value = e.toLocaleLowerCase()
        let data = this.props.data
        const finalData = data.filter(e => e.option.toLocaleLowerCase().indexOf(value) > -1 || `${e.id}`.toLocaleLowerCase().indexOf(value) > -1)
        this.setState({filteredData: finalData, showContent: true})
    }

    render() {
        const { data, title } = this.props

        return (
            <React.Fragment>
                {this.state.showContent && <div className="overlay" onClick={() => this.setState({ showContent: false })}></div>}
                { data && <React.Fragment>
                    {!this.props.search ?<div className="dropdown">
                        <div 
                            className={"division-list-title" + (this.state.selectedValue ? " selected" : "")} 
                            onClick={() => this.setState({showContent: !this.state.showContent})}
                        >
                            {this.state.selectedValue ? this.state.selectedValue : title}
                            <FontAwesomeIcon
                                icon={!this.state.showContent ? faAngleDown : faAngleUp}
                            />
                        </div>
                        {this.state.showContent && <ul className={"division-list"}>
                            {data.map((e, i) => e.option && (
                                <li onClick={() => this.selectedValue(e)}>{e.option}</li>
                            ))}
                        </ul>}
                    </div>: <div className="dropdown dropdown-search"
                    >
                        <input 
                            placeholder={this.props.placeholder}
                            value={this.state.searchValue}
                            onChange={(e) => this.filterData(e.target.value)}
                            onClick={() => this.setState({showContent: !this.state.showContent, searchValue: ""})}
                        />
                        <FontAwesomeIcon
                            icon={!this.state.showContent ? faAngleDown : faAngleUp}
                        />
                        {this.state.showContent && <ul className={"division-list"}>
                            {this.state.filteredData.length > 0 ? this.state.filteredData.map((e, i) => e.option && (
                                <li onClick={() => this.selectedValue(e)}>
                                    <img src={e.image}/>
                                    <div className="content">
                                        <h4>{e.option}</h4>
                                        <p>{e.id}</p>
                                    </div>
                                </li>
                            )): <div className="no-data">No Data Available</div>}
                        </ul>}
                    </div>}
                </React.Fragment>}
            </React.Fragment>
        )
    }
}

export default DropDown