import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class MainCanelita extends React.Component{
    render(){
        return(
            <section className="container-fluid main h-100">
                <div className="row">
                    <div className="col col-60">
                        <img className="img-fluid" src="https://www.ssbwiki.com/images/thumb/2/2b/Isabelle_SSBU.png/1200px-Isabelle_SSBU.png" alt=""/>
                    </div>
                    <div className="col col-40">
                        <img className="img-fluid" src="https://www.ssbwiki.com/images/thumb/2/2b/Isabelle_SSBU.png/1200px-Isabelle_SSBU.png" alt=""/>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainCanelita;