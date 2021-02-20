import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Pagination = (props) => {

    const [page, setPage] = useState(props.currentPage)

    const setPageValue = (type) => {
        const currentPage = page
        if(type === "increment" && page < props.totalPages) {
            setPage(currentPage + 1)
            props.getData(currentPage + 1)
        }
        if(type === "decrement" &&  page > 1) {
            setPage(currentPage - 1)
            props.getData(currentPage - 1)
        }
    }

    return (
        <div className="pagination">
            <div className={`tab ${page == 1 && "disable"}`} onClick={() => setPageValue("decrement")}><FontAwesomeIcon icon={faAngleLeft}/></div>
            <div className="count">{page}</div>
            <div className={`tab ${page == props.totalPages && "disable"}`} onClick={() => setPageValue("increment")}><FontAwesomeIcon icon={faAngleRight}/></div>
        </div>
    )
}

export default Pagination