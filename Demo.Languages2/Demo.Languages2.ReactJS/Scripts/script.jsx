var Button = React.createClass({
	getInitialState: function() {
		return { counter: 0 };
	},
	render: function() {
		return (
			<button onClick={this.handleClick}>{this.state.counter}</button>
		);
	},
	handleClick: function() {
		this.setState({ counter: this.state.counter + 1 });
	}
});

React.render(<Button />, document.getElementById("root"));