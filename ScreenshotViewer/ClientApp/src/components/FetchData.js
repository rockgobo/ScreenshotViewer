import React, { Component } from 'react';
import { ScreenshotDate } from './ScreenshotDate';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = { dates: [], date: "", loading: true };
      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.populateDates();
    }

    handleClick(folder) {
        this.setState(state => ({
            date: folder 
        }));
    }



  renderDates(dates) {
    return (
      <div>
          {dates.map(date =>
              <div className={`btn btn-primary picker ${this.state.date == date.name ? "picker--active": ""}`} onClick={(e) => this.handleClick(date.name, e)}>
                  <div className="picker__date">{date.date}</div>
                  <div className="picker__time">{date.time}</div>
                  <div className="picker__count">{date.count} Screenshots</div>
              </div>
          )}
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderDates(this.state.dates);

    return (
      <div>
        <h1 id="tabelLabel" >Zeitpunkte</h1>
        <p>An folgenden Zeitpunkten wurden Screenshots erstellt.</p>
            {contents}

            <ScreenshotDate folder={this.state.date}></ScreenshotDate>
      </div>
    );
  }

  async populateDates() {
    const response = await fetch('date');
    const data = await response.json();
    this.setState({ dates: data, loading: false, date: data[data.length-1].name });
  }
}
