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
        let item_element = document.getElementById (stuff_in_area [i]);
        items_element.appendChild (item_element .cloneNode(true));
        items_element.lastChild.onclick=function(){
            takeItem (where, stuff_in_area[i]);
        }
    }
}
/*/
    Show menu items
/*/
function showMenu () {
    let menu_element = getMenuElement();
    menu_element.replaceChildren();

    for (i = 0; i < inventory.length; i++) {
        let menu_item = document.getElementById (inventory [i]);
        menu_element.appendChild (menu_item .cloneNode(true));
        menu_element.lastChild.onclick=function(){
            dropItem (where, inventory[i]);
        }
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

    showItems (what);
    showMenu ()
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
    showItems (where);
    showMenu();
}

/*/
    drop an item into a room
/*/
function dropItem (where, which) {
    list [where].push (which);
    inventory .splice (inventory.indexOf(which), 1);
    showItems (where);
    showMenu();
}