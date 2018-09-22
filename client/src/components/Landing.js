import React from 'react';
import Waypoint from 'react-waypoint';
import Fade from 'react-reveal/Fade';
import cheapImg from './img/cheap1.jpg';
import simpleImg from './img/simple.jpg';
import './Landing.css';
class Landing extends React.Component {
  state = { show1: false, show2: false }

  _handleFirstWaypointEnter = () => {
    console.log('Waypoint enters');
    this.setState({ show1: true });
  }

  _handleSecondWaypointEnter = () => {
    this.setState({ show2: true });
  }

  render() {
    return (
      <div className="landing">
        <div className="bg">
          <div className="centered">
            <span>EMAILY</span>
            <h5>Cheap and simple collect customers' feedback with emails.</h5>
          </div>
        </div>
        
        <div className="features">
          <div className="feature">
          <Waypoint
              onEnter={this._handleFirstWaypointEnter}
            >
              <Fade top duration={3000} when={this.state.show}>
                <h1>CHEAP</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat nibh, accumsan non fermentum et, tempus ac tellus. Aliquam quam mi, suscipit at nisl consectetur, fermentum ullamcorper lorem. Fusce sed felis eros.</p>
              </Fade>
            </Waypoint>
            <img src={cheapImg} alt="cheap"/>
          </div>
          {/* <div style={{ clear: 'both' }}></div> */}
          <div className="feature">
            <img src={simpleImg} alt="simple"/>
            <Waypoint
              onEnter={this._handleSecondWaypointEnter}
            >
              <Fade top duration={3000} when={this.state.show}>
                <h1>SIMPLE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat nibh, accumsan non fermentum et, tempus ac tellus. Aliquam quam mi, suscipit at nisl consectetur, fermentum ullamcorper lorem. Fusce sed felis eros.</p>
              </Fade>
            </Waypoint>
          </div>
        </div>

        <div className="about">
          <h1>ABOUT US</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat nibh, accumsan non fermentum et, tempus ac tellus. Aliquam quam mi, suscipit at nisl consectetur, fermentum ullamcorper lorem.  Integer condimentum bibendum purus, ac posuere lacus posuere vel. Duis molestie ante vitae augue venenatis pretium.</p>
          <p>Fusce sed felis eros. Quisque luctus, mauris ut sollicitudin volutpat, justo tellus pellentesque tellus, nec sodales nisi turpis sed dui. Integer in convallis mi, eu rutrum elit. Aenean efficitur ipsum nec sagittis dignissim.</p>
        </div>

        <div className="newsletter">
          <span>Sign up for newsletter</span>
          <h5>Sign up to our mailing list to get the lastest updates and discounts.</h5>
          <div class="input-field inline">
            <input id="email_inline" type="email" class="validate" />
            <label for="email_inline">Email</label>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>

        <div className="footer">
          <div className="copyright">Copyright &copy; Emaily 2018</div>
          <div className="conversation">
            <p>Want to start a conversation with us?</p>
            <p>lenguyenduy85@gmail.com</p>
            <p>+358 46 571 9108</p>
          </div>
          <div className="social">
            <i class="fab fa-facebook-square fa-2x"></i>
            <i class="fab fa-twitter-square fa-2x"></i>
            <i class="fab fa-github-square fa-2x"></i>
            <i class="fab fa-linkedin fa-2x"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;