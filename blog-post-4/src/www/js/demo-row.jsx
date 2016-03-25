"use strict";

const
	React = require("react"),
	DemoRow = module.exports = class extends React.Component {

		render() {

			return (
				<tr>
					<td>{this.props.demo.name}</td>
					<td>{this.props.demo.description}</td>
					<td><a href={this.props.demo.url}>Run It!</a></td>
				</tr>
			);

		}
	}