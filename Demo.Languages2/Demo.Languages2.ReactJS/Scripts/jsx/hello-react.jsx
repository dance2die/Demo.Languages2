// https://facebook.github.io/react/docs/displaying-data.html

var HelloWorld = React.createClass({
	render: function () {
		return (
		  <p>
		  	Hello, <input type="text" placeholder="Your name here" />!
		  	It is {this.props.date.toTimeString()}
		  </p>
	  );
	}
});

setInterval(function () {
	ReactDOM.render(<HelloWorld date={new Date()} />, document.getElementById('example'));
}, 500);
