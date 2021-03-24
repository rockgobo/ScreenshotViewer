import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Screenshot extends Component {
    static displayName = Screenshot.name;

  constructor(props) {
    super(props);
    }

    componentDidMount() {
        const { match: { params } } = this.props;
    }

    render() {

        const { match: { params } } = this.props;

        return (
            <div>
                <Link to="/">Zur&#252;ck zu den Screenshots</Link>
      <div class="screenview">
            <img src={atob(params.url)} className="img-fluid"></img>
                </div>
                </div>
    );
  }
}
