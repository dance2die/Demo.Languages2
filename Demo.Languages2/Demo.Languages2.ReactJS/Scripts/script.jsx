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

var Result = React.createClass({
	render: function() {
		return (
			<div>XXX</div>
		);
	}
});

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Button></Button>
				<Result></Result>
			</div>
		);
	}
});

React.render(<Main />, document.getElementById("root"));