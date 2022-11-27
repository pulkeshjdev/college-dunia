import React from 'react'
import '../css/College.css';

const College = ({ college }) => {
  return ( 
    <div className="Rectangle-1">
      <div className="Rectangle-1-1">
        <div className="Rectangle-1-1-1">
          <span className="Rating">
            <span className="Text-style-1">{ college.rating }</span>/5<br/>
            <span>{ college.rating_remarks }</span>
          </span>
        </div>
        <div className="Rectangle-1-1-2">
            {college.tags.map((tag, i) => 
              (<div className="Tags-div" >
                <div className="Tags">
                  <span key={i} className="Tags-text">
                    {tag}
                  </span>
                </div>
              </div>)
            )}
          <div className="Ranking">
            <span className="Ranking-text">
                { college.ranking }
            </span>
          </div>
        </div>
      </div>
      <div className="Rectangle-1-2">
        <div className="College-details-left">
            <div className="College-name">
              <span className="College-name-text">
                { college.college_name }
              </span>
            </div>
          <div className="Nearest-place">
            {college.nearest_place.map((nearestPlace, i) => 
            (<>
              <span className="Nearest-place-text">
                {nearestPlace}
              </span>
              <div className="Shape-2"></div>
            </>
            )
            )}
              
            </div>
            <div className="Famous-nearest-places">
              <span className="Famous-nearest-places-text">
                <span className="Text-style-1">93% Match : </span>
              <span className="Text-Style-4"> { college.famous_nearest_places }</span>
              </span>
            </div>
            <div className="Offertext">
              <span className="Offertext-text">
                { college.offertext }
              </span>
          </div>
        </div>
        <div className="College-details-right">
          <div className="Original-fees">
            <div className="Original-fees-text">
              <span className="Original-fees">
                <span className="Text-style-1">₹</span>
                  { college.original_fees }
              </span>
            </div>
            <div className="Discount-badge-triangle"></div>
            <div className="Discount-badge">
              <div className="Ellipse-2">
                <span> { college.discount } </span>
              </div>
            </div>
          </div>
          <div className="Discount-fee">
            <span className="Discount-fee">
              <span className="Text-style-1">₹</span>
              { college.discounted_fees }
            </span>
          </div>
          <div className="Fee-cycle">
            <span className="Fees-cycle">
              { college.fees_cycle }
            </span>
          </div>
          <div className="Amenity">
            {college.amenties.map((amenity, i) => (
              <>
                <div className="Ellipse-1"></div>
                <span className="Amenity-text">
                  {amenity}
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default College;
