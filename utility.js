var current_room = "start"

/*/
    This variable is used to assign an id to every
    item.
/*/
var next_item_id = 1;

function generate_id () {
    let id = next_item_id;
    next_item_id++;
    return id;
}

/*/
    This function get's a random number between 0 and max
/*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
/*/
    Get the element where id="view"
    That element must exist in the HTML document.
/*/
function getViewElement() {
    return document.getElementById ('view');
}

/*/
    Get the element where id="items"
    That element must exist in the HTML document.
/*/
function getItemsElement() {
    return document.getElementById ('items');
}

/*/
    Get the element where id="actions"
    That element must exist in the HTML document.
/*/
function getActionsElement() {
    return document.getElementById ('actions');
}

/*/
    Get the element where id="menu"
    That element must exist in the HTML document.
/*/
function getMenuElement() {
    return document.getElementById ('menu');
}

/*/
    Show items that are currently in an area
/*/
function showItems (where) {
    let stuff_in_area = items [where];
    let items_element = getItemsElement();
    items_element.replaceChildren();

    for (i = 0; i < stuff_in_area.length; i++) {
        const item_name = stuff_in_area[i];
        let item = document.getElementById (stuff_in_area [i]);
        items_element.appendChild (item .cloneNode(true));
        items_element.lastChild.onclick=function(){
            takeItem (where, item_name);
        };
    }
}
/*/
    Show inventory items
/*/
function showInventory () {
    let menu_element = getMenuElement();
    menu_element.replaceChildren();

    for (i = 0; i < inventory.length; i++) {
        const item_name = inventory[i];
        let item = document.getElementById (item_name);
        menu_element.appendChild (item .cloneNode(true));
        console.log("listing: ", inventory[i]);
        menu_element.lastChild.onclick=function(){
            dropItem (item_name);
        };
    }
}

/*/
    Get the element where id = which
    Copy that into the view element.
/*/
function setViewTo (what) {
    let element = document.getElementById (what);
    let view_element = getViewElement();

    view_element.replaceChildren();
    view_element.appendChild (element.cloneNode(true));
    current_room = what;
    showItems (what);
    showInventory ()
}

/*/
    Take an item from a room
/*/
function takeItem (where, which) {
    console.log(inventory);
    inventory .push (which);
    console.log(inventory);
    let list = items [where];
    list .splice (list.indexOf(which), 1);
    console.log("room contains:", list);
    showItems (where);
    showInventory();
}

/*/
    drop an item into a room
/*/
function dropItem (which) {
    let room = document.getElementById
    items [current_room].push (which);
    inventory .splice (inventory.indexOf(which), 1);
    console.log("room contains:", items [current_room]);
    console.log("inventory contains:", inventory);

    showItems (current_room);
    showInventory();
}