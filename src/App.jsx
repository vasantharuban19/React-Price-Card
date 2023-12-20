import React from 'react'
import Card from './components/Card'

function App() {
  let data = [{
    sub:"Free",
    dollor:"$0",
    month:"/month",
    user:"Single User",
    isUser:true,
    storage:"5GB Storage",
    isStorage:true,
    public:"Unlimited Public Projects",
    isPublic:true,
    access:"Community Access",
    isAccess:true,
    private:"Unlimited Private Projects",
    isPrivate:false,
    support:"Dedicated Phone Support",
    isSupport:false,
    Subdomain:"Free Subdomain",
    isSubdomain:false,
    reports:"Monthly Status Reports",
    isReports:false
  },
  {
    sub:"Plus",
    dollor:"$9",
    month:"/month",
    user:"5 Users",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    public:"Unlimited Public Projects",
    isPublic:true,
    access:"Community Access",
    isAccess:true,
    private:"Unlimited Private Projects",
    isPrivate:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    Subdomain:"Free Subdomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:false
  },
  {
    sub:"Pro",
    dollor:"$49",
    month:"/month",
    user:"Unlimited Users",
    isUser:true,
    storage:"150GB Storage",
    isStorage:true,
    public:"Unlimited Public Projects",
    isPublic:true,
    access:"Community Access",
    isAccess:true,
    private:"Unlimited Private Projects",
    isPrivate:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    Subdomain:"Free Subdomain",
    isSubdomain:true,
    reports:"Monthly Status Reports",
    isReports:true
  }]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return (
            <Card cardData={e} key={i}/>
          )
        })
      }
    </div>
  </div>
</section>
  </>
}

export default App