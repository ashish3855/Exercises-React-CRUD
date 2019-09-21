import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { muscles } from "../../store";

class Footer extends Component {
  handleChange = (e, index) => {
    this.index = index;
    this.props.onSelect(index === 0 ? "" : muscles[index - 1]);
  };
  constructor(props) {
    super(props);
    this.index = this.props.category
      ? muscles.findIndex(group => group === this.props.category) + 1
      : 0;
  }

  render() {
    return (
      <div>
        <Paper square>
          <Tabs
            value={this.index}
            indicatorColor="primary"
            onChange={this.handleChange}
            textColor="primary"
            aria-label="wrapped label tabs example"
            centered
          >
            <Tab href="#" label="All" />
            {this.props.muscles.map(group => {
              return <Tab href="#" key={group} label={group} />;
            })}
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default Footer;
