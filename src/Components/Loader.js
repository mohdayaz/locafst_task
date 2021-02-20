import React from 'react'

function Loader({ disableEverythingElse }) {
    // disableEverythingElse prop adds an overlay on the page which does not allow the user to do anything else.
    return (
        disableEverythingElse ?
            (<div className="overlay loader">
                <div className="tspinner">
                    {/* <FontAwesomeIcon className="fa-spin" icon={faSpinner} /> */}
                    <img src="https://naviadoctors-storage.s3.ap-south-1.amazonaws.com/media/staticfiles/Double+Ring-2s-200px.svg" />
                </div>
            </div>)
            :
            (<div className="tspinner">
                {/* <FontAwesomeIcon className="fa-spin" icon={faSpinner} /> */}
                <img src="https://naviadoctors-storage.s3.ap-south-1.amazonaws.com/media/staticfiles/Double+Ring-2s-200px.svg" />
            </div>)
    )
}

export default Loader
