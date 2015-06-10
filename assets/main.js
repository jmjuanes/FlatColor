// Load function
window.onload = function(){ Flat.Ini(); };

// Init function
var Flat = new function()
{
	// Colours
	this.colors = ['strawberry', 'red', 'watermelon', 'orange', 'meat', 'pumpkin', 'yellow', 'sand', 'cofee', 'brown', 'maroon', 'lime', 'green', 'emerald', 'mint', 'water', 'blue', 'dblue', 'powder', 'royal', 'magenta', 'pink', 'white', 'gray', 'navy']; 
	
	// Copy box
	this.copy;
	
	//Color
	this.color;
	
	//Ini function
	this.Ini = function()
	{
		// Get the main
		this.main = document.getElementById('main');
		
		// Creates the html
		var h = '';
		
		// Loop
		for (i in this.colors)
		{
			// Create the box
			h = h + '<div class="box">';
			
			// Left color
			h = h + '<div id="box-l-' + i + '" class="box-color-left flat-' ;
			h = h + this.colors[i];
			h = h + '-light-bg" onclick="Flat.OnDown(\'box-l-' + i + '\');"></div>';
			
			// Right color
			h = h + '<div id="box-d-' + i + '" class="box-color-right flat-';
			h = h + this.colors[i];
			h = h + '-dark-bg" onclick="Flat.OnDown(\'box-d-' + i + '\');"></div>';
			
			// Text
			h = h + '' + this.colors[i] + '';
			
			// Ends the box
			h = h + '</div>';
		}
		
		// Save all the boxes
		main.innerHTML = h;	
		
		// Gets the copy box
		this.copy = document.getElementById('box-copy');
		
		// Hide the copy box
		this.copy.style.display = 'none';
	};
	
	// Converts RGB to HEX
	this.rgb2hex = function(rgb)
	{
		// Hex characters
		var hexChars = '0123456789ABCDEF';
		
		// Delete the spaces and the rgb()
		rgb = rgb.replace(/\s|rgb|\(|\)/gi, '');
		
		//Split the text
		rgb = rgb.split(',');
		
		// Converts
		var r = parseInt(rgb[0]).toString(16);
		var g = parseInt(rgb[1]).toString(16);
		var b = parseInt(rgb[2]).toString(16);
		
		// Concatenate the values
		var hex = '#' + r + g + b;
		
		// Return
		return hex;
	};
	
	//Mouse
	this.OnDown = function(id)
	{
		// Get the element
		var box = document.getElementById(id);
		
		// Get the color
		this.color = window.getComputedStyle(box).getPropertyValue('background-color');
		
		// Converts to hex
		this.color = this.rgb2hex(this.color);
		
		// Change the background color
		this.copy.style.backgroundColor = this.color;
		
		// Add the color to the text
		document.getElementById('copy-color').innerHTML = this.color;
		
		//Shows the copy box
		this.copy.style.display = 'block';
		
	};
	
	//Copy color
	this.Copy = function()
	{
		//Copy
		window.prompt("Copy to clipboard: Ctrl+C, Enter", this.color);
	}
};