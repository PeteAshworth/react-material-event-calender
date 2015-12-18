var React = require('react');
var ReactDOM = require('react-dom');
//var Calendar = require("react-data-calendar");
var Calendar = require("./components/Calender");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


/*window.eventTypesAvailable=['debugData.json', 'largeEvent.json', 'mediumEvent.json', 'realEvent.json', 'smallEvent.json'];

window.eventSetLoad=window.eventTypesAvailable[1];
 $(document).ready(function() {
	$.ajax({
		url:'/eventdata/'+window.eventSetLoad,
		dataType:'json',
		success:function(data) {
			console.log('loaded data');
			//console.log(data);
			React.render(<Calendar data={data} />,document.getElementById('main'));
		},
		error:function(err){
			console.error(err,'error from loading json');
		}
	})
 });*/

/*var ITEMS = {
	months: {
		// January 
		"11": {
			days: {
				"10": [
					{link: true, url: "http://google.com", text: "A link to content"},
					{link: false, url: null, text: "Some other content"}
				],
				"2": [
					{link: false, url: null, text: "Some other content"}
				]
			}
		},
 
		// March 
		"2": {
			days: {
				"7": [
					{link: true, url: "http://google.com", text: "A link to content"},
					{link: false, url: null, text: "Some other content"}
				],
				"20": [
					{link: false, url: null, text: "Some other content"}
				]
			}
		}
	}
};*/

// var events = {
// 	years :{
// 		"2015" :{
// 			months: {
// 				// January 
// 				"11": {
// 					days: {
// 						"10": [
// 							{link: true, url: "http://google.com", text: "A link to content",time:"10 AM"},
// 							{link: false, url: null, text: "Some other content",time:"10 PM"}
// 						],
// 						"2": [
// 							{link: false, url: null, text: "Some other content",time:"12 PM"}
// 						]
// 					}
// 				},
		 
// 				// March 
// 				"2": {
// 					days: {
// 						"7": [
// 							{link: true, url: "http://google.com", text: "A link to content",time:"01 AM"},
// 							{link: false, url: null, text: "Some other content"}
// 						],
// 						"20": [
// 							{link: false, url: null, text: "Some other content",time:"01 PM"}
// 						]
// 					}
// 				}
// 			}
// 		},
// 		"2016" :{
// 			months: {
// 				// January 
// 				"1": {
// 					days: {
// 						"10": [
// 							{link: true, url: "http://google.com", text: "A link to content",time:"10 AM"},
// 							{link: false, url: null, text: "Some other content",time:"12 PM"}
// 						],
// 						"2": [
// 							{link: true, url: "http://google.com", text: "A link to content",time:"00 AM"},
// 							{link: false, url: null, text: "Some other content",time:"06 AM"},
// 							{link: true, url: "http://google.com", text: "A link to content",time:"12 PM"},
// 							{link: false, url: null, text: "Some other content",time:"08 PM"}
// 						]
// 					}
// 				},
		 
// 				// March 
// 				"2": {
// 					days: {
// 						"7": [
// 							{link: true, url: "http://google.com", text: "A link to content",time:"00 AM"},
// 							{link: false, url: null, text: "Some other content",time:"06 AM"},
// 							{link: true, url: "http://google.com", text: "A link to content",time:"12 PM"},
// 							{link: false, url: null, text: "Some other content",time:"08 PM"}
// 						],
// 						"20": [
// 							{link: true, url: "http://google.com", text: "A link to content",time:"10 AM"},
// 							{link: false, url: null, text: "Some other content",time:"12 PM"}
// 						]
// 					}
// 				}
// 			}
// 		} 
// 	}
	
// };

//var events=[{"type":"Published","eventId":"566ff0d022a8f10c00c4e02b","start":"2015-12-16T10:00:00.000Z","className":"well well-lg min-height-100","originalSource":{"_id":"566ff0d022a8f10c00c4e02b","date":"2015-12-16T10:00:00.000Z","project_id":{"_id":"55af93af3548000800225dca","name":"MSH GSM Promotion","number":"0001"},"point_of_sale":{"_id":"5613b01376833d0e00a42789","address":{"additional":"","streetnumber":"Weilstraße 227","postal":"73733","city":"Esslingen","company":"Media Markt","country":"55adf58e833f1e4200f28e63"},"number":"73733","name":"Media Markt Esslingen","map":null,"id":"5613b01376833d0e00a42789"},"__v":1,"documents":[],"note":[],"agency_user":[{"user_id":{"_id":"5617b55a33339c0e007bc397","firstName":"Hamed","lastName":"Ghandi","usernameView":"Hamed Ghandi","id":"5617b55a33339c0e007bc397"},"_id":"566ff0d022a8f10c00c4e02d","payment":{"projectExpenses":{"per":"day","amount":0},"personalExpenses":{"per":"day","amount":0},"eventExpenses":{"per":"day","amount":0},"boost":{"apply":"always","per":"day","amount":0},"provision":"yes","fixum":{"perHourHours":0,"per":"event","amount":80}},"paymentType":"project"}],"times":[{"start":"2015-12-16T10:00:51.205Z","stop":"2015-12-16T19:00:51.216Z","_id":"566ff0d022a8f10c00c4e02c"}],"eventState":"Published","eventStateHistory":[{"stateNew":"Published","stateOld":"Planned","date":"2015-12-15T10:52:19.943Z","ip":"91.22.223.188","user":"55aa64f6c4caf90800c77dcf","_id":"566ff0e305205718002b4c76","loc":{"lng":0,"lat":0}}],"created":"2015-12-15T10:52:00.145Z"},"starterStopper":{"start":"2015-12-16T10:00:51.205Z","stop":"2015-12-16T19:00:51.216Z"},"title":"undefined -- Media Markt Esslingen"},{"type":"Published","eventId":"566ed4ca22a8f10c00c4df2e","start":"2015-12-30T10:00:00.000Z","className":"well well-lg min-height-100","originalSource":{"_id":"566ed4ca22a8f10c00c4df2e","date":"2015-12-30T10:00:00.000Z","project_id":{"_id":"55af93af3548000800225dca","name":"MSH GSM Promotion","number":"0001"},"point_of_sale":{"_id":"5613b68876833d0e00a42792","address":{"additional":"","streetnumber":"Unterweingartenfeld 4","postal":"76135","city":"Karlsruhe","company":"Media Markt","country":"55adf58e833f1e4200f28e63"},"number":"76135","name":"Media Markt Karlsruhe I","map":null,"id":"5613b68876833d0e00a42792"},"__v":1,"documents":[],"note":[],"agency_user":[{"user_id":{"_id":"5617a5628ef0e40d0056144f","firstName":"Claudius","lastName":"Cioca","usernameView":"Claudius Cioca","id":"5617a5628ef0e40d0056144f"},"_id":"566ed4ca22a8f10c00c4df30","payment":{"projectExpenses":{"per":"day","amount":0},"personalExpenses":{"per":"day","amount":0},"eventExpenses":{"per":"day","amount":0},"boost":{"apply":"always","per":"day","amount":0},"provision":"yes","fixum":{"perHourHours":0,"per":"event","amount":80}},"paymentType":"project"}],"times":[{"start":"2015-12-30T10:00:06.406Z","stop":"2015-12-30T19:00:06.418Z","_id":"566ed4ca22a8f10c00c4df2f"}],"eventState":"Published","eventStateHistory":[{"stateNew":"Published","stateOld":"Planned","date":"2015-12-14T14:40:15.325Z","ip":"91.22.221.190","user":"55aa64f6c4caf90800c77dcf","_id":"566ed4cf05205718002b4b5b","loc":{"lng":0,"lat":0}}],"created":"2015-12-14T14:40:10.829Z"},"starterStopper":{"start":"2015-12-30T10:00:06.406Z","stop":"2015-12-30T19:00:06.418Z"},"title":"undefined -- Media Markt Karlsruhe I"},{"type":"Published","eventId":"566b410e05205718002b49c2","start":"2015-12-21T00:00:00.000Z","className":"well well-lg min-height-100","originalSource":{"_id":"566b410e05205718002b49c2","date":"2015-12-21T00:00:00.000Z","project_id":{"_id":"56577690d216390e00e112cf","name":"Jarre","number":"Jarre"},"point_of_sale":{"_id":"56547c02e200c02000eb8027","address":{"additional":"","streetnumber":"O 5","postal":"68161","city":"Mannheim","company":"Engelhorn Modehaus","country":"55adf58e833f1e4200f28e63"},"number":"Engelhorn Modehaus","name":"Engelhorn Modehaus","map":null,"id":"56547c02e200c02000eb8027"},"series":"566b410e05205718002b49ba","__v":1,"documents":[],"note":[],"agency_user":[{"user_id":{"_id":"55ba03c542e8c208004cc0eb","firstName":"Pascal","lastName":"Karim","usernameView":"Pascal Karim","id":"55ba03c542e8c208004cc0eb"},"_id":"566b410e05205718002b49c7","payment":{"projectExpenses":{"per":"day","amount":0},"personalExpenses":{"per":"day","amount":0},"eventExpenses":{"per":"day","amount":0},"boost":{"apply":"always","per":"day","amount":0},"provision":"no","fixum":{"perHourHours":0,"per":"event","amount":0}},"paymentType":"project"}],"times":[{"start":"2015-12-21T10:00:40.063Z","stop":"2015-12-21T19:00:40.067Z","_id":"566b410e05205718002b49c6"}],"eventState":"Published","eventStateHistory":[{"stateNew":"Published","stateOld":"Planned","date":"2015-12-11T21:34:23.548Z","ip":"46.5.2.1","user":"55aa5713ef13b53200170a5f","_id":"566b415f22a8f10c00c4dd0a"}],"created":"2015-12-11T21:33:02.288Z"},"starterStopper":{"start":"2015-12-21T10:00:40.063Z","stop":"2015-12-21T19:00:40.067Z"},"title":"undefined -- Engelhorn Modehaus"}]

ReactDOM.render(<Calendar />,document.getElementById('main'));
