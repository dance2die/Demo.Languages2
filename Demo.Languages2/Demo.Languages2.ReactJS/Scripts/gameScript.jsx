﻿var StarsFrame = React.createClass({
	render: function () {
		var numberOfStars = this.props.numberOfStars;
		var stars = [];
		for (var i = 0; i < numberOfStars; i++) {
			stars.push(<span className="glyphicon glyphicon-star"></span>);
		}

		return (
			<div id="stars-frame">
				<div className="well">
					{stars}
				</div>
			</div>
		);
	}
});

var ButtonFrame = React.createClass({
	render: function () {
		var disabled;
		var button;
		var correct = this.props.correct;

		switch (correct) {
			case true:
				button = (
					<button className="btn btn-success btn-lg"
							onClick={this.props.acceptAnswer}>
						<span className="glyphicon glyphicon-ok"></span>
					</button>
				);
				break;
			case false:
				button = (
					<button className="btn btn-danger btn-lg">
						<span className="glyphicon glyphicon-remove"></span>
					</button>
				);
				break;
			default:
				disabled = (this.props.selectedNumbers.length === 0);
				button = (
					<button className="btn btn-primary btn-lg"
							disabled={disabled}
							onClick={this.props.checkAnswer}>
						=
					</button>
				);
		}

		return (
			<div id="button-frame">
				{button}
				<br />
				<br />
				<button className="btn btn-warning btn-xs"
						onClick={this.props.redraw}
						disabled={this.props.redraws === 0}>
					<span className="glyphicon glyphicon-refresh"></span>
					&nbsp;
					{this.props.redraws}
				</button>
			</div>
		);
	}
});

var AnswerFrame = React.createClass({
	render: function () {
		var props = this.props;
		var selectedNumbers = props.selectedNumbers.map(function (i) {
			return (
				<span onClick={props.unselectNumber.bind(null, i)}>
					{i}
				</span>
			);
		});

		return (
			<div id="answer-frame">
				<div className="well">
					{selectedNumbers}
				</div>
			</div>
		);
	}
});

var NumbersFrame = React.createClass({
	render: function () {
		var numbers = [];
		var className;
		var selectedNumbers = this.props.selectedNumbers;
		var selectNumber = this.props.selectNumber;
		var usedNumbers = this.props.usedNumbers;

		for (var i = 1; i <= 9; i++) {
			className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
			className += " used-" + (usedNumbers.indexOf(i) >= 0);
			numbers.push(
			<div className={className}
				 onClick={selectNumber.bind(null, i)}>
				{i}
			</div>);
		}

		return (
			<div id="numbers-frame">
				<div className="well">
					{numbers}
				</div>
			</div>
		);
	}
});

var DoneFrame = React.createClass({
	render: function () {
		return (
			<div className="well text-center">
				<h2>{this.props.doneStatus}</h2>
			</div>
		);
	}
});

var Game = React.createClass({
	getInitialState: function () {
		return {
			numberOfStars: this.randomNumber(),
			selectedNumbers: [],
			usedNumbers: [],
			redraws: 5,
			correct: null,
			doneStatus: null
		};
	},
	randomNumber: function () {
		return Math.floor(Math.random() * 9) + 1;
	},
	selectNumber: function (clickedNumber) {
		if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
			this.setState(
				{
					selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
					correct: null
				}
			);
		}
	},
	unselectNumber: function (clickedNumber) {
		var selectedNumbers = this.state.selectedNumbers;
		var indexOfNumber = selectedNumbers.indexOf(clickedNumber);
		selectedNumbers.splice(indexOfNumber, 1);

		this.setState({
			selectedNumbers: selectedNumbers,
			correct: null
		});
	},
	sumOfSelectedNumbers: function () {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
		return this.state.selectedNumbers.reduce(function (previousValue, currentValue) {
			return previousValue + currentValue;
		}, 0);
	},
	checkAnswer: function () {
		var correct = (this.state.numberOfStars === this.sumOfSelectedNumbers());
		this.setState({ correct: correct });
	},
	acceptAnswer: function () {
		var usedNumers = this.state.usedNumbers.concat(this.state.selectedNumbers);
		this.setState({
			selectedNumbers: [],
			usedNumbers: usedNumers,
			correct: null,
			numberOfStars: this.randomNumber()
		});
	},
	redraw: function () {
		if (this.state.redraws > 0) {
			this.setState({
				numberOfStars: this.randomNumber(),
				correct: null,
				selectedNumbers: [],
				redraws: this.state.redraws - 1
			});
		}
	},
	render: function () {
		var selectedNumbers = this.state.selectedNumbers;
		var numberOfStars = this.state.numberOfStars;
		var correct = this.state.correct;
		var usedNumbers = this.state.usedNumbers;
		var redraws = this.state.redraws;
		var doneStatus = this.state.doneStatus;
		var bottomFrame;

		if (doneStatus) {
			bottomFrame = <DoneFrame doneStatus={doneStatus} />
		} else {
			bottomFrame = <NumbersFrame selectedNumbers={selectedNumbers}
								  selectNumber={this.selectNumber}
								  usedNumbers={usedNumbers} />
		}

		return (
			<div id="game">
				<h2>Play Nine</h2>
				<hr />
				<div className="clearfix">
					<StarsFrame numberOfStars={numberOfStars} />
					<ButtonFrame selectedNumbers={selectedNumbers}
								 correct={correct}
								 checkAnswer={this.checkAnswer}
								 acceptAnswer={this.acceptAnswer}
								 redraw={this.redraw}
								 redraws={redraws} />
					<AnswerFrame selectedNumbers={selectedNumbers}
								 unselectNumber={this.unselectNumber} />
				</div>

				{bottomFrame}

			</div>
		);
	}
});

React.render(<Game />, document.getElementById("container"));