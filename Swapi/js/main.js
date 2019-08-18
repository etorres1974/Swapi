
    function importAll(){
    importSpecies();
    importCharacters()
    importPlanets()
    importShips()
    }

    function timing(){
        setTimeout(function() {
            importMovies();        
        }, 1000)
        setTimeout(function() {
            createText();        
        }, 2000)
    }
    
   importAll(); 
   timing()
