import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component{
    render(){
        return(
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3">
                    Made by 
                    <a className="text-dark" href="https://github.com/danielsanchez93"> Puni</a>
                </div>
          </footer>
        )
    }
}

export default Footer;