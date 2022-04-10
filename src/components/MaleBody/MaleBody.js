import React from 'react';
import './MaleBody.scss'

function MaleBody() {
    return (
        <div className="full-body">
            <div className="set-organs">
                <img src="/male/body.png" alt="body" style={{ minWidth: 350 }} className="img-fluid"
                    id="body-image" />

                <div className="brain-set organ">
                    <a id="brain-set" className="showSingle" target="brain">
                        <img data-src="male/brain.png" id="brain"
                            alt="organs images" className="img-fluid organ-images lazyloaded"
                            src="male/brain.png" />
                        {/* <div className="organ-tooltip display-none">
                                <div className="arrow" style="top: 13px;"></div>
                                <div className="organ-tooltip-inner">brain</div>
                            </div> */}
                    </a>
                </div>


                <div className="liver-set organ">
                    <a id="liver-set" className="showSingle" target="liver" href>
                        <img data-src="male/liver.png" id="liver"
                            alt="organs images" className="img-fluid organ-images lazyloaded"
                            src="male/liver.png" />

                    </a>
                </div>


                <div className="stomach-set organ">
                    <a id="stomach-set" className="showSingle" target="stomach" href>
                        <img data-src="male/stomach.png" id="stomach"
                            alt="organs images" className="img-fluid organ-images lazyloaded"
                            src="male/stomach.png" />

                    </a>
                </div>
                <div className="lungs-set organ">
                    <a id="lungs-set" className="showSingle clicked" target="lungs" href>
                        <img data-src="male/lungs.png" id="lungs"
                            alt="organs images" className="img-fluid organ-images lazyloaded clicked"
                            src="male/lungs.png" />

                    </a>
                </div>

                <div className="thyroid-set organ">
                    <a id="thyroid-set" className="showSingle" target="thyroid" href>
                        <img data-src="male/thyroid.png" id="thyroid"
                            alt="organs images" className="img-fluid organ-images lazyloaded"
                            src="male/thyroid.png" />

                    </a>
                </div>



                <div className="pancreas-set organ">
                    <a id="pancreas-set" className="showSingle" target="pancreas" href>
                        <img data-src="male/pancreas.png" id="pancreas"
                            alt="organs images" className="img-fluid organ-images lazyloaded"
                            src="male/pancreas.png" />

                    </a>
                </div>

                <div className="male_reproductive_system-set organ">
                    <a id="male_reproductive_system-set" className="showSingle" target="male_reproductive_system" href>
                        <img data-src="male/reproductive.png"
                            id="male_reproductive_system" alt="organs images" className="img-fluid organ-images lazyloaded"
                            src="male/reproductive.png" />

                    </a>
                </div>

                <div className="intestines-set organ">
                    <a id="intestines-set" className="showSingle" target="intestines" href>
                        <img data-src="male/intestines.png"
                            id="intestines" alt="organs images" className="img-fluid organ-images lazyloaded"
                            src="male/intestines.png" />

                    </a>
                </div>

                <div className="bludder-set organ">
                    <a id="bludder-set" className="showSingle" target="bludder" href>
                        <img data-src="male/bludder.png" id="bludder"
                            alt="organs images" className="img-fluid organ-images lazyloaded"
                            src="male/bludder.png" />

                    </a>
                </div>
                <div className="kidney-set organ">
                    <a id="kidney-set" className="showSingle" target="kidney" href>
                        <img data-src="male/kidney.png" id="kidney"
                            alt="organs images" className="img-fluid organ-images lazyloaded"
                            src="male/kidney.png" />

                    </a>
                </div>
                <div className="heart-set organ">
                    <a id="heart-set" className="showSingle" target="heart" href>
                        <img data-src="male/heart.png"id="heart"
                            alt="organs images" className="img-fluid organ-images lazyloaded"
                            src="male/heart.png"/>
                            
                    </a>
                </div>

            </div>
        </div>
    )
}

export default MaleBody