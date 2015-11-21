var React = require('react');
var ReactDOM = require('react-dom');

var socket = io.connect('localhost:3000');

var Main = React.createClass({

	displayName: "Cheerio",
	
	getInitialState: function() {
		return {
			items: []
		}
	},

	componentDidMount: function () {

	  var self = this;	 

      socket.on('BPM', function (data) {      	
      	self.addItemToState(data);
      });

	},

	render: function(){
		return (
			<ul>
				{this.getItemNodes()}
			</ul>
		);
	},

	getItemNodes: function() {
		return this.state.items.map(function(item, idx){
			if(idx == this.state.items.length -1){
				console.log(this.state.items.length);
				return (<li>{item}</li>);
			})

		}else{

			return item;
		}
	},

	addItemToState: function(item){
		var items = this.state.items;
		items.push(item);
		//setState causes react to re-render the view.
		this.setState({items: items});

	}

});

ReactDOM.render(<Main />, document.getElementById('app'));












