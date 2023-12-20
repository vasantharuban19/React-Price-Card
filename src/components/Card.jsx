import React from 'react'

function Card({cardData}) {
  return <>
  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{cardData.sub}</h5>
            <h6 className="card-price text-center">{cardData.dollor}<span className="period">{cardData.month}</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={cardData.isUser?"":"text-muted"}><span className="fa-li"><i className={cardData.isUser?"fas fa-check":"fas fa-times"}></i></span>{cardData.sub!=="Free"?<b>{cardData.user}</b>:cardData.user}</li>
              <li className={cardData.isStorage?"":"text-muted"}><span className="fa-li"><i className={cardData.isStorage?"fas fa-check":"fas fa-times"}></i></span>{cardData.storage}</li>
              <li className={cardData.isPublic?"":"text-muted"}><span className="fa-li"><i className={cardData.isPublic?"fas fa-check":"fas fa-times"}></i></span>{cardData.public}</li>
              <li className={cardData.isAccess?"":"text-muted"}><span className="fa-li"><i className={cardData.isAccess?"fas fa-check":"fas fa-times"}></i></span>{cardData.access}</li>
              <li className={cardData.isPrivate?"":"text-muted"}><span className="fa-li"><i className={cardData.isPrivate?"fas fa-check":"fas fa-times"}></i></span>{cardData.private}</li>
              <li className={cardData.isSupport?"":"text-muted"}><span className="fa-li"><i className={cardData.isSupport?"fas fa-check":"fas fa-times"}></i></span>{cardData.support}</li>
              <li className={cardData.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={cardData.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{cardData.sub==="Pro"?<><b>Unlimited</b> {cardData.Subdomain}</>:cardData.Subdomain}</li>
              <li className={cardData.isReorts?"":"text-muted"}><span className="fa-li"><i className={cardData.isReports?"fas fa-check":"fas fa-times"}></i></span>{cardData.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
     
  </>
}

export default Card