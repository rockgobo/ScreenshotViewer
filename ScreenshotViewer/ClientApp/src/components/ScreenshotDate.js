import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class ScreenshotDate extends Component {
    static displayName = ScreenshotDate.name;

  constructor(props) {
    super(props);
      this.state = { screenshots: [], loading: true };

      this.populateScreenshots = this.populateScreenshots.bind(this);
  }

  componentDidMount() {
    this.populateScreenshots();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.folder !== this.props.folder) {
            this.populateScreenshots();
        }
    }

    renderScreenshots(screenshots) {
        return (
            <>
            <h2 id="tabelLabel" className="mt-4">Screenshots</h2>
            <div className="screenshots">
                    {screenshots.map(screenshot =>
                        <Link to={() => '/screen/' +btoa(screenshot.url)}>
                    <div className="screenshot" key={screenshot.id}>
                        <div className="screenshot__image">
                            <img src={screenshot.url} alt=""></img>
                        </div>
                        <div className="screenshot__subtitle">{screenshot.fileName}</div>
                            </div>
                        </Link>
                )}
            </div>
            </>
    );
  }

    render() {
        let contents = this.state.loading || this.state.screenshots.length == 0
        ? <p></p>
        : this.renderScreenshots(this.state.screenshots);

    return (
        <div>
            {contents}
      </div>
    );
  }

  async populateScreenshots() {
    const response = await fetch('screenshots?folder='+this.props.folder); 
      const data = await response.json();
      var i = 0;
      data.map(image => { image.id = ++i; image.url = '/Images/' + this.props.folder + '/' + image.fileName; return image} )
      this.setState({ screenshots: data, loading: false });
  }
}
