import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <a target="_blank" href="https://github.com/Ashish117">
            Github
          </a>
           ●
          <a target="_blank" href="https://twitter.com/amvo97">
            Twitter
          </a>
           ●
          <a target="_blank" href="https://facebook.com/ashish.varghese.117">
            Facebook
          </a>
           ●
          <a target="_blank" href="https://instagram.com/ashish__117/">
            Instagram
          </a>
          ●
          <a target="_blank" href="http://ashish117.com">
            Homepage
          </a>
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="Back to top" onClick={this.onScrollToTop}/>
      </div>
    );
  }
}

export default FooterComponent;
