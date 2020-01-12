import React, { Component } from "react";

export default class Collapse extends Component {
  render() {
    return (
      <div>
        {this.props.collapseButton}
        <div class="collapse" id="collapseExample">
          <div
            class="card card-body d-flex flex-row flex-wrap"
            style={{ width: 300 }}
          >
            {this.props.time}
          </div>
        </div>
      </div>
    );
  }
}
