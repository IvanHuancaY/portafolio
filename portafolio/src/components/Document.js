import React from "react";
import '../style/Document.css';

function Document(){
    return(
        <div className="more-info">
        <section className="icons-container">
            <div className="card-container"> 
            <div className="card-icon1">
                <img className="heaven"
                    src={require("../images/perfil.jpg")}
                    alt="Foto de perfil"
                    />
            
    </div>
                <div className="text-icon">
                    <h1>Ivan Huanca Yujra</h1>
                    <p>Junior</p>

                    <a href="https://github.com/IvanHuancaY" title="git">
                    
                         <img className="image"
                         src={require("../images/github.png")}           
                         alt="Foto del evento" /> 
                        </a>
                        <a href="https://twitter.com/IvanHuancaYujr1" title="twi">
                        <img className="image"
            src={require("../images/twitter.png")}           
            alt="twi" />
                        </a>
                        <a href="https://www.linkedin.com/in/ivan-huanca-yujra-b831822b0/" title="lin">
                        <img className="image"
            src={require("../images/linkedin.png")}           
            alt="lin" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCmSP7BAtK5qoVZOr2l-xwvg" title="you"> 
                        <img className="image"
            src={require("../images/youtube.png")}           
            alt="you" />
                        </a>
                
            </div>
            </div>
        </section>
        </div>
    );
}

export default Document;