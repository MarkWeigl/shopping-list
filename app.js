$(document).ready(function(){
    var state = {
        items: []
    };
    
    // State modification functions
    var addItem = function(state, item) {
        var itemObj = {};
        itemObj.name = item;
        itemObj.checked = false;
        state.items.push(itemObj); 
        console.log(state);
    };    
    
    var deleteItem = function(state, item) {
        state.items.splice(item,1);
    };

    var toggleItem = function(state, item) {
        state.items[item].checked=true;
    };

    // Render functions
    var renderList = function(state, element) {
        
        var itemsHTML = state.items.map(function(item, index) {
          var listItemTemplate="";
          if (item.checked) {
              listItemTemplate +='<li class="shopping-item shopping-item-checked" data-item="'+index+'">';
          }
          else {
              listItemTemplate +='<li class="shopping-item" data-item="'+index+'">';
          }
          
          listItemTemplate +='<span class="shopping-item">'+item.name+'</span>' +
              '<div class="shopping-item-controls">' +
                '<button class="shopping-item-toggle">' +
                  '<span class="button-label">check</span>' +
                '</button>' +
                '<button class="shopping-item-delete">' +
                  '<span class="button-label">delete</span>' +
                '</button>' +
              '</div>' +
            '</li>';
            return listItemTemplate;
        });
        
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
        var item = parseInt($(this).parent().parent().attr("data-item"));
        toggleItem(state,item);
        renderList(state, $('.shopping-list'));
    });

});

