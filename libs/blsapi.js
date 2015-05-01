/*
 * This Javascript library is intended to serve as a wrapper for the Bureau of 
 * Labor Statistics' API.  It was designed with Version 2.0 in mind.
 * It allows for making requests, and then making cached copies of those
 * requests in order to prevent recycling.
 */

//Strict mode activated.
'use strict';
 
var apiKey = null;
var mostRecentRequest = null;
var blsURL = 'http://api.bls.gov/publicAPI/v2/timeseries/data/';

/*
 * Sets the API Key of the user of the script
 * key -- The API key to use
 * TODO -- Get this to search a local directory or other storage in
 * to separate out API key knowledge.
 */
 function checkAPIKey(){
	 if(!localStorage.getItem('apiKey')){
		 return null;
	 }else{
		 apiKey = localStorage.getItem('apiKey');
	 }
 }
 
function setAPIKey(key){
	apiKey = key;
	localStorage.setItem('apiKey',apiKey);
}

function clearAPIKey(){
	apiKey = null;
	localStorage.clearItem('apiKey');
}

/*
 * General wrapper for making BLS data requests
 */
function makeRequest(seriesID, paramPairs){
	console.log("Request begun.");
	var payload = null;
	//Step 1 -- See if the local cache has this request already
	//Step 2 -- JSON-ify the request
	
	//For single series requests, we only need to make a GET request.  For multiple series, we
	//need to do a post.
	if(typeof seriesID === "string" && !paramPairs){
		payload = blsRequest(seriesID,'GET');
	} else {
		//JSON all series IDs in the seriesID parameter
		//Then test to see if there are parameter Pairs to add
		if(paramPairs){
			//If so, add them to the request
		}
	}
	
	//Step 3 -- Cache the Returned value
	//Step 4 -- Return the request
	return result;
}

//Code to submit a BLS formatted request
function blsRequest(seriesReq, method){
	var reqResp = null;
	var httpRequest = null;
	
	if(window.XMLHttpRequest){
		httpRequest = new XMLHttpRequest();
	}else{
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	if(!httpRequest){
		console.log("Stopping operation.  Unable to create new XMLHttpRequest.");
		return false;
	}
	
	httpRequest.onreadystatechange = function(){
		if (httpRequest.readyState==4 && httpRequest.status==200){
			reqResp=httpRequest.responseText;
			console.log(reqResp);
		}else{
			console.log("Response has failed.  Review your settings and make a new request.");
		}
	}
	
	if(method === 'GET'){
		httpRequest.open(method, blsURL + seriesReq);
		httpRequest.send();
	}else{
		console.log('This is a todo.  How we get here?');
	}
	
}

//Function to make a local copy of the most recent request.
function cacheRequest(){
}
