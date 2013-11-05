
module.exports = {
	/*
		'get(id, [options], callback)'
		----------
		Return an array of metrics.

		### Parameters
		-----------
		'id'		Metric id as integer
		'callback'	Contains an err as first argument
					if any
		### Options
		'start' 	Timestamp
		'end'	  	Timestamp
		'timestep'	Step between each metrics in milliseconds	
	*/
	get: function(id, options, callback){
		if(arguments.length ===2){
			callback = options;
		}
		setImmediate(function(){
			callback(null, [{
				timestamp: (new Date('2013-11-04 14:00 UTC')).getTime(),
				value:1234
			},{
				timestamp: (new Date('2013-11-04 14:10 UTC')).getTime(), 
				value:5678
			}])
		})
	},
	/*
		'save(id, metrics, callback)'
		----------
		### Parameters
		-----------
		'id'		Metric id as integer
		'metrics'	Array with timestamp sa keys and integer as values
		'callback'	Contains an err as first argument
					if any
	*/
	save: function(id, metrics, callback){}
}