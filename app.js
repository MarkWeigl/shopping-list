$(document).ready(function(){
	var state = {
	    items: []
	};

	

	// State modification functions
	var addItem = function(state, item) {
	    state.items.push(item);
	    console.log(state.items);
	    
	};    
	
	var deleteItem = function(state, item) {
		state.items.splice(state.items.indexOf(item),1);
		console.log(state.items);
	};

	var toggleItem = function(state, item) {
		state.items.toggleClass(state.item);
		console.log(state.items);

	};

	// Render functions
	var renderList = function(state, element) {
	   console.log(state);
	    var itemsHTML = state.items.map(function(item, index) {
	    	var listItemTemplate = (
	  '<li data-item="'+index+'">' +
	    '<span class="shopping-item">'+item+'</span>' +
	    '<div class="shopping-item-controls">' +
	      '<button class="shopping-item-toggle">' +
	        '<span class="button-label">check</span>' +
	      '</button>' +
	      '<button class="shopping-item-delete">' +
	        '<span class="button-label">delete</span>' +
	      '</button>' +
	    '</div>' +
	  '</li>'
	);
	       return listItemTemplate;
	    });
	    console.log(itemsHTML);
	    element.html(itemsHTML);
	};

	// Event listeners
	$('#js-shopping-list-form').submit(function(event) {
	    event.preventDefault();
	    addItem(state, $('#shopping-list-entry').val());
	    $('#shopping-list-entry').val("");
	    renderList(state, $('.shopping-list'));
	});

	$(document).on('click','.shopping-item-delete',function(){
		var item = parseInt($(this).parent().parent().attr("data-item"));
		deleteItem(state,item);
		renderList(state, $('.shopping-list'));
	});

	$(document).on('click','.shopping-item-toggle',function(){
		
	
		renderList(state, $('.shopping-list'));
	});

});

