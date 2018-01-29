import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Look at my code, my code is amazing</p>
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="Ashish117/friday"
                    avatar="github.png"
                  />
                <CardText>
                        A static site showing how to add response to a bots core. Check out the code on Github.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/Ashish117/friday" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
