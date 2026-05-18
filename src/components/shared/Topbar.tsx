import logoo from "../../../public/assets/logo.png"
import loggoo from "../../../public/assets/loggo.png"
import sign from "../../../public/assets/sf.png"


const Topbar = () => {
  return (
    <>
    <div className="topbar">


    <div>
      <img 
        src={logoo}
        alt="logo"
        
        className="genn"
      />
    </div>

    <div>
      <img 
        src={loggoo}
        alt="logo"
        className="ger"
      />
    </div>

    <div className="donjo">
      <img 
        src={sign}
        alt="logo"
        className="germ"
      />
      Sign in
    </div>
    </div>
    </>
  )
}

export default Topbar