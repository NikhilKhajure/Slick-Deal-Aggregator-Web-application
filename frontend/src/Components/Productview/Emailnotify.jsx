import React from 'react'

function Emailnotify() {
    return (
        <>
            <button type="button" className="btn quickViewBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Notify When Price Drops
            </button>
            <div className="modal fade email_card" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Notify Me</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body email_card_body">
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Enter Name</label>
                                <input type="text" id='exampleInputName' className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPrice" className="form-label">Enter Excepted Price</label>
                                <input type="text" id='exampleInputPrice' className="form-control" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn quickViewBtn" data-bs-dismiss="modal">Notify!!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Emailnotify
