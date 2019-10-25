function getCoords(coords, line){
  var cd = [];
  for(var i = 1; i < line.length; i++){
    cd.push(parseFloat(line[i]))
  }
  coords.push(cd);
}

function getDef(defs, line, coords){
  var trig = [];
  for(var i = 1; i < line.length; i++){
    trig.push(coords[parseInt(line[i])-1])
  }
  defs.push(trig)
} 
document.getElementById('file').onchange = function(){

    var file = this.files[0];
  
    var reader = new FileReader();
    reader.onload = function(progressEvent){
      // Entire file
      console.log(this.result);
  
      // By lines
      var coords = []; // seznam ogljišč
      var defs =  []; //seznam definicij trikotnikov
      var lines = this.result.split('\n');
      for(var line = 0; line < lines.length; line++){
        var spl = lines[line].split(" ");
        if(spl[0] == "v"){
          getCoords(coords, spl) // dobi koordinate, če se linija začne s f
        }
        else if(spl[0] == "f"){
          getDef(defs, spl, coords) // dobi definicije ogljišč trikotnikov
        }
      }
      for(var i = 0; i < coords.length; i++){
        console.log(coords[i])
      }
      for(var i = 0; i < defs.length; i++){
        console.log(defs[i])
      }
    };
    reader.readAsText(file);
  };