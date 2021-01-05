import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class MainCanelita extends React.Component{
    render(){
        return(
            <section className="container main">
                <div className="row">
                    <div className="col col-50">
                        <img className="img-fluid" src="https://www.ssbwiki.com/images/thumb/2/2b/Isabelle_SSBU.png/1200px-Isabelle_SSBU.png" alt=""/>
                    </div>
                    <div className="col col-50">
                        <img src="https://www.ssbwiki.com/images/thumb/2/2b/Isabelle_SSBU.png/1200px-Isabelle_SSBU.png" alt=""/>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainCanelita;