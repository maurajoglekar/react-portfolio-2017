import React from 'react';
import parral from './images/parral.jpg'
import maura from './images/maura_now.png'
import gj from './images/grandJunction.jpg'
import stanford from './images/stanford.jpg'
import oracle from './images/oracle.jpg'

import './App.css';

const AboutMe = () => ({
    render: function() {
          var myPicStyle = {
              display: "inline"
          };

    return (
        <div className="container-fluid text-center"> 
            <div className="container-fluid bg-1 text-center">
              <h3 className="margin padTitle">Who Am I?</h3>
              <img src={maura} className="img-responsive thumbnail margin padTitle" style={myPicStyle} alt="Maura" width="250" height="250"/>
               <p className="whatPara">I'm an experienced full-stack developer with a passion for learning and applying technical skills in service to customers. </p>
            </div>

            <div className="container-fluid bg-2 text-center">
              <h3 className="margin padTitle">What Am I?</h3>
              <p className="whatPara">I have over 20 years of hands-on software development experience in various large enterprise applications.  Currently doing front-end development in the Oracle engagement cloud.  I also worked three years in a high-paced search start-up.  Worked for ten years in the Oracle Server Technologies building database and programmatic interface.  I have a Masters in Computer Science from Stanford and Bachelors in Computer Science and Math from Mesa State University in Colorado. </p>
            </div>

            <div className="container">    
              <h3 className="margin padTitle">Where To Find Me?</h3>
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                  <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>

                <div className="carousel-inner">

                  <div className="item active">
                  <img src={parral} alt="Chihuahua Mexico" width="100%" />
                    <div className="carousel-caption">
                      <h3>I was born in Chihuahua, Mexico and lived there until the age of 12.</h3>
                    </div>
                  </div>

                  <div className="item">
                    <img src={gj} alt="Grand Junction Colorado" width="100%" />
                    <div className="carousel-caption">
                      <h3>I lived and studied in Grand Junction Colorado.</h3>
                    </div>
                  </div>

                  <div className="item">
                    <img src={stanford} alt="Stanford University" width="100%" />
                    <div className="carousel-caption">
                      <h3>Moved to California to attend Stanford University</h3>
                    </div>
                  </div>

                  <div className="item">
                    <img src={oracle} alt="Oracle Corporation" width="100%" />
                    <div className="carousel-caption">
                      <h3>Worked at Oracle for almost 20 years.</h3>
                    </div>
                  </div>

                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
        </div>
          );
        }
    });

export default AboutMe
