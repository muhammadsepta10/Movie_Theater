import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.collapseButton}
          <div class="collapse" id="collapseExample">
            <div
              class="card card-body d-flex flex-row flex-wrap"
              style={{ width: "100%" }}
            >
              {this.props.table}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
