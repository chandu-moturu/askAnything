import React from "react";
import './footer.css'
import twitter from '../../assets/icons8-twitter.svg'
import linkedin from '../../assets/icons8-linkedin.svg'
import youtube from '../../assets/icons8-youtube.svg'
import discord from '../../assets/icons8-discord.svg'
import github from '../../assets/icons8-github.svg'
import telegram from '../../assets/icons8-telegram.svg'

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-area">
      <div>
        <h2>Cluster</h2>
        <p>Managed by Artificial Intelligence</p>
        <div className="footer-icons">
            <a href=""><img src={youtube} alt="" /></a>
            <a href=""><img src={twitter} alt="" /></a>
            <a href=""><img src={discord} alt="" /></a>
            <a href=""><img src={linkedin} alt="" /></a>
            <a href=""><img src={github} alt="" /></a>
            <a href=""><img src={telegram} alt="" /></a>
        </div>
        <div><p>Cluster {new Date().getFullYear()} &copy; All rights reserved</p></div>
      </div>
      <div>
        <table>
            <thead>
                <tr>
                    <td>CLUSTER</td>
                    <td>GET CONNECTED</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Grants</td>
                    <td>Services</td>
                </tr>
                <tr>
                    <td>Generator</td>
                    <td>Blog</td>
                </tr>
                <tr>
                    <td>Careers</td>
                    <td>Newsletter</td>
                </tr>
                <tr>
                    <td>Desclimer</td>
                    
                </tr>
            </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default Footer;