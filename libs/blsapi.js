/*
 * This Javascript is inteded to serve as a wrapper for the Bureau of 
 * Labor Statistics' API.  It was designed with Version 2.0 in mind.
 * It allows for making requests, and then making cached copies of those
 * requests in order to prevent recycling.
 */

var apiKey = null;
var mostRecentRequest = null;

/*
 * Sets the API Key of the user of the script
 * key -- The API key to use
 * TODO -- Get this to search a local directory or other storage in
 * to separate out API key knowledge.
 */
function setAPIKey(key){
	apiKey = key;
}

/*
 * General wrapper for making BLS data requests
 */
function makeRequest(seriesID, paramPairs){
	var request = null;
	//Step 1 -- See if the local cache has this request already
	//Step 2 -- JSON-ify the request
	if(typeof seriesID.length === "string" &&& !paramPairs){
		request = seriesID;
	} else {
		//JSON all series IDs in the seriesID parameter
		//Then test to see if there are parameter Pairs to add
		if(paramPairs){
			//If so, add them to the request
		}
	}
	
	var result = blsRequest(request);
	//Step 3 -- Cache the Returned value
	//Step 4 -- Return the request
	return result;
}

//Code to submit a BLS formatted request
function blsRequest(request){
	var httpRequest = null;
	if(window.XMLHttpRequest){
		httpRequest = new XMLHttpRequest();
	}
	
	if(!httpRequest){
		console.log("Stopping operation.  Unable to create new XMLHttpRequest.");
		return false;
	}
	
	httpRequest.onreadystatechange = alertContents;
	
}

//Function to make a local copy of the most recent request.
function cacheRequest(){
}
