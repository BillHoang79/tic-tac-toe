function addItem(){
	//user types in item to add on list
	var userInput = document.getElementById('input').value
	//the item is them taken and stored in text
	var text = document.createTextNode(userInput)
	//text becomes li and is ready to be put on list
	var li = document.createElement('li')
	//item list is retrieved and li is taken 
	document.getElementById('items').appendChild(li)
	//li is added to the list with this 
	li.appendChild(text)

function removeItem() {
    li.className = "remove"
	}
	li.onclick = removeItem
}





