function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		for (var i = 0; i< spectrum.length; i++){
            var green = map(spectrum[i], 0, 255, 255, 0);
            fill(spectrum[i], green, 0);
            
            // vertical
//			var x = map(i, 0, spectrum.length, 0, width);
//		    var h = -height + map(spectrum[i], 0, 255, height, 0);
//		    rect(x, height, width / spectrum.length, h );
            
            // horizontal
            var y = map(i, 0, spectrum.length, 0, height);
            var w = map(spectrum[i], 0, 255, 0, width);
            rect(0, y, w, height / spectrum.length);
  		}
	
		pop();
	};
}
