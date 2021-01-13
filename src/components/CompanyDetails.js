import React from 'react';

const CompanyDetails = ()=>{
    return(
        <section className="section-details">
            <div className="u-margin-bottom-large">
                <h1 className="heading-primary">Company Details</h1>
            </div>
            <div className="details">
                <p>
                    <div>
                        <span className="u-bold" >Company:</span>
                         Geeksynergy Technologies Pvt Ltd
                    </div>
                    <div>
                        <span  className="u-bold" >Address:</span>
                        Sanjayanagar, Bengaluru-56
                    </div>
                    <div>
                        <span  className="u-bold" >Phone:</span>
                        XXXXXXXXX09
                    </div>
                    <div>
                        <span  className="u-bold" >Email:</span>
                         XXXXXX@gmail.com
                    </div>
                </p>
            </div>
        </section>
    )
}

export default CompanyDetails;
