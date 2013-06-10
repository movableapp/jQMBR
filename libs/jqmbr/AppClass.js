/**
 * ---[[   B O I L E R P L A T E   ]]---
 * JqueryMobile + BackboneJS + RequireJS
 * =====================================
 *
 * Main Application Class prototype 
 * inherit Backbone's event system!
 */

define([
	'jquery', 'backbone'
	

], function(
	$, Backbone
) {
	
	/**
	 * Empty class with Backbone's Events System
	 * it resolve a global "initialized" DeferredObject after
	 * running "initialize()" method.
	 *
	 * initialize() method should return a DFD!!!
	 */
	var AppClass = function() {
		$.when(this.initialize.apply(this, arguments)).then($.proxy(function() {
			this.initialized.resolveWith(this);
		}, this));
	};
	_.extend(AppClass.prototype, Backbone.Events);
	
	
	// Initialized DeferredObject
	AppClass.prototype.initialized 	= $.Deferred();
	
	
	/**
	 * App Constructor
	 * !! does not write anything here !!
	 * !! will be overridden by the initialization file !!
	 *
	 * It should return a DeferredObject to be resolved asyncronously so you
	 * can hold very complex inizialization logic here!
	 */
	AppClass.prototype.initialize = function() {
		var dfd = $.Deferred();
		
		// ... do stuff or long 
		dfd.resolve();
		
		return dfd.promise();
	};
	
	
	/**
	 * On iOS I found a little refreshing bug so screen updates only
	 * after a user click or a user scroll.
	 *
	 * This trivial fix trigger a click on active $.mobile page
	 * to force that refresh.
	 *
	 * Is is useful after listview("refresh") or similar activities.
	 */
	AppClass.prototype.updateUi = function(timeout) {
		timeout = timeout || 100;
		setTimeout(function(){$.mobile.activePage.trigger('click');}, timeout);
	};
	
	return AppClass;
});