import React from 'react';

const ImgRadio = (props) => {

    const cardClick = (e) => {
        console.log(e)
        // if(this.hasClass("on")){
        //     $(this).removeClass("on");
        //     $(this).children(".radio_btn").prop('checked', false);
        // }
        // else{
        //     $(".card").removeClass("on");
        //     $(this).addClass("on");
        //     $(".radio_btn").prop('checked', false);
        //     $(this).children(".radio_btn").prop('checked', true);
        // }
    }

    const sandWitchArr = props.data.map((sandwitch, index) => {
        return(
                <div key={sandwitch.idx} className="card_area col-lg-4 col-md-6 col-sm-12">
                    <div onClick={cardClick} className="card mx-auto rounded menu" style={{width: '18rem'}}>
                        <img src={sandwitch.image} className="card-img-top" alt={sandwitch.name}/>
                        <div className="card-body">
                            <h4 className="card-text center_align">{sandwitch.name}</h4>
                        </div>
                        <input className="radio_btn" type="radio" value="1"/>
                    </div>
                </div>
        )
    });


    return(
        <div className="select_row row">
            {sandWitchArr}
        </div>
    )
}

export default ImgRadio;