$(document).ready(function(){
	var state = {
	    items: []
	};

	var listItemTemplate = (
	  '<li>' +
	    '<span class="shopping-item"></span>' +
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

	// State modification functions
	var addItem = function(state, item) {
	    state.items.push(item);
	    renderList(state, $('.shopping-list'));
	    console.log(state.items);
	    
	};    
	
	var deleteItem = function(state, item) {
		state.items.splice(state.items.indexOf(item),1);
		console.log(state.items);
	};

	// Render functions
	var renderList = function(state, element) {
	    var itemsHTML = state.items.map(function(item) {
	        return '<li>' + item + '</li>';
	    });
	    element.html(itemsHTML);
	};

	// Event listeners
	$('#js-shopping-list-form').submit(function(event) {
	    event.preventDefault();
	    addItem(state, $('#shopping-list-entry').val());
	    renderList(state, $('.shopping-list'));
	});

	$(document).on('click','.shopping-item-delete',function(){
		var item = $(this).parent().parent().find('.shopping-item').text();
		renderList(state, $('.shopping-item'));
	});
});

