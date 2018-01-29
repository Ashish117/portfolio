import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
               The best way to predict the future is to invent it.
              </span>
              <span className="quote-author">- Alan Kay</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
