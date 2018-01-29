import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves Node.js, ai, mp games and anime. Apple Enthusiast. Gamer. Botter, currently living in Kerala, India.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
