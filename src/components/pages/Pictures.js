import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pictures.css';
import {AiFillYoutube} from "react-icons/ai";
import {BsTwitter, BsWhatsapp} from "react-icons/bs";
import {FiInstagram} from "react-icons/fi";
import {FaFacebookF} from "react-icons/fa";
import Text from "./Text";
import Text2 from "./Text2";
import Text3 from "./Text3";
import Text4 from "./Text4";

const Pictures = () => {
  return (
  <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.picswalls.com%2Fwallpapers%2F2014%2F08%2F08%2Ffree-beautiful-house-wallpaper_015602813_146.jpg&f=1&nofb=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.architectureartdesigns.com%2Fwp-content%2Fuploads%2F2015%2F07%2F713.jpg&f=1&nofb=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.o188lK_ojBFNja7JeRz2NgHaD4%26pid%3DApi&f=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="Socials">
          <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Black-D3vil007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/atmagyan-singh-96642115b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/atmagyan-singh-96642115b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FiInstagram />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/atmagyan-singh-96642115b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/blackd3vil_007/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <BsWhatsapp />
                </a>
              </li>
          </ul>
        </div>

        <div>
          <Text />
          <Text2 />
          <Text3 />
          <Text4 />
        </div>

      </>
    
  );
};

export default Pictures;
