// https://facebook.github.io/react/docs/displaying-data.html

function addDays(date, days) {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

var HelloWorld = React.createClass({
	render: function () {
		var mmddyyyy = moment(addDays(this.props.date, 10)).format("MM/DD/YYYY hh:mm:ss a");
		// It is {this.props.date.toTimeString()}
		return (
		  <p>
		  	Hello, <input type="text" placeholder="Your name here" />!
		  	
		  	It is {mmddyyyy}
		  </p>
	  );
	}
});

setInterval(function () {
	ReactDOM.render(<HelloWorld date={new Date()} />, document.getElementById('example'));
}, 500);
