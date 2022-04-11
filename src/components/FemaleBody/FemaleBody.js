import { MDBTooltip } from 'mdb-react-ui-kit';
import React from 'react';
import './FemaleBody.scss'

function FemaleBody() {
    return (
        <div className='female-body'>
            <div className="full-body">
                <div className="set-organs">
                    <img src="female/body.png" alt="body" style={{ minWidth: 226, height: 482 }} className="img-fluid"
                        id="body-image" />

                    <div className="brain-set organ">
                        <MDBTooltip tag='a' wrapperProps={{}} title="Brain" placement='right'>
                            <img data-src="female/brain.png" id="brain"
                                alt="organs images" className="img-fluid organ-images lazyloaded"
                                src="female/brain.png" />

                        </MDBTooltip>
                        {/* <a id="brain-set" className="showSingle" target="brain"> */}

                        {/* <div className="organ-tooltip display-none">
                                <div className="arrow" style="top: 13px;"></div>
                                <div className="organ-tooltip-inner">brain</div>
                            </div> */}
                        {/* </a> */}
                    </div>


                    <div className="liver-set organ">
                        {/* <a id="liver-set" className="showSingle" target="liver" href> */}
                        <MDBTooltip tag='a' wrapperProps={{}} title="Liver" placement='left'>
                            <img data-src="female/liver.png" id="liver"
                                alt="organs images" className="img-fluid organ-images lazyloaded"
                                src="female/liver.png" />
                        </MDBTooltip>

                        {/* </a> */}
                    </div>


                    <div className="stomach-set organ">
                        {/* <a id="stomach-set" className="showSingle" target="stomach" href> */}
                        <MDBTooltip tag='a' wrapperProps={{}} title="Stomach" placement='right'>

                            <img data-src="female/stomach.png" id="stomach"
                                alt="organs images" className="img-fluid organ-images lazyloaded"
                                src="female/stomach.png" />
                        </MDBTooltip>

                        {/* </a> */}
                    </div>
                    <div className="lungs-set organ">
                        <MDBTooltip tag='a' wrapperProps={{}} title="Lungs" placement='right'>
                            <img data-src="female/lungs.png" id="lungs"
                                alt="organs images" className="img-fluid organ-images lazyloaded clicked"
                                src="female/lungs.png" />

                        </MDBTooltip>
                    </div>

                    <div className="thyroid-set organ">
                        {/* <a id="thyroid-set" className="showSingle" target="thyroid" href title='thyriod'> */}
                        <MDBTooltip tag='a' wrapperProps={{}} title="Thyriod" placement='right'>

                            <img data-src="female/thyroid.png" id="thyroid"
                                alt="organs images" className="img-fluid organ-images lazyloaded"
                                src="female/thyroid.png" />
                        </MDBTooltip>

                        {/* </a> */}
                    </div>



                    <div className="pancreas-set organ">
                        {/* <a id="pancreas-set" className="showSingle" target="pancreas" href> */}
                        <MDBTooltip tag='a' wrapperProps={{}} title="Pancreas" placement='right'>
                            <img data-src="female/pancreas.png" id="pancreas"
                                alt="organs images" className="img-fluid organ-images lazyloaded"
                                src="female/pancreas.png" />

                            {/* </a> */}
                        </MDBTooltip>
                    </div>

                    <div className="female_reproductive_system-set organ">
                        {/* <a id="female_reproductive_system-set" className="showSingle" target="female_reproductive_system" href> */}
                        <MDBTooltip tag='a' wrapperProps={{}} title="Reproductive" placement='right'>

                            <img data-src="female/reproductive.png"
                                id="female_reproductive_system" alt="organs images" className="img-fluid organ-images lazyloaded"
                                src="female/reproductive.png" />

                            {/* </a> */}
                        </MDBTooltip>
                    </div>

                    <div className="intestines-set organ">
                        {/* <a id="intestines-set" className="showSingle" target="intestines" href> */}
                        <MDBTooltip tag='a' wrapperProps={{}} title="Intestines" placement='bottom'>

                            <img data-src="female/intestines.png"
                                id="intestines" alt="organs images" className="img-fluid organ-images lazyloaded"
                                src="female/intestines.png" />

                            {/* </a> */}
                        </MDBTooltip>
                    </div>

                    <div className="bludder-set organ">
                        {/* <a id="bludder-set" className="showSingle" target="bludder" href> */}
                        <MDBTooltip tag='a' wrapperProps={{}} title="Bludder" placement='right'>

                            <img data-src="female/bludder.png" id="bludder"
                                alt="organs images" className="img-fluid organ-images lazyloaded"
                                src="female/bludder.png" />
                        </MDBTooltip>

                        {/* </a> */}
                    </div>
                    <div className="kidney-set organ">
                        {/* <a id="kidney-set" className="showSingle" target="kidney" href> */}
                        <MDBTooltip tag='a' wrapperProps={{}} title="Kidney" placement='left'>

                            <img data-src="female/kidney.png" id="kidney"
                                alt="organs images" className="img-fluid organ-images lazyloaded"
                                src="female/kidney.png" />

                            {/* </a> */}

                        </MDBTooltip>
                    </div>
                    <div className="heart-set organ">
                        {/* <a id="heart-set" className="showSingle" target="heart" href> */}
                        <MDBTooltip tag='a' wrapperProps={{}} title="Heart" placement='bottom'>

                            <img data-src="female/heart.png" id="heart"
                                alt="organs images" className="img-fluid organ-images lazyloaded"
                                src="female/heart.png" />
                        </MDBTooltip>

                        {/* </a> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FemaleBody