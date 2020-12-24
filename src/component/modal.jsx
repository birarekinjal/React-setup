import React from "react";

const modal = (props) => {
    const { closePopup } = props;
    return (
        <>
            <div>
                <div className="modal fade show" id="twoFactor" tabIndex="-1" role="dialog" aria-labelledby="twoFactorTitle" aria-hidden="true" style={{ zIndex: 1 }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header ">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closePopup}>
                                    {/* <img src={Images.close} /> */}
                                </button>
                            </div>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" style={{ zIndex: 0 }}></div>
        </>
    );
};

export default modal;
