// hi
//brobrobrobro
//noob jill
//kuy hei



// 'kearfnovnfokvwni
class GameArcade {
     static autoId = 1;
     constructor(gameName) {
       this.gameId = GameArcade.autoId++;
       this.gameName = gameName;
     }
   }
   
   function control() {
     let box = [];
     function addGame(newGameName) {
       for (const boxCount of box) {
         if (boxCount.gameName == newGameName) return "Duplicate game";
       }
       box.push(new GameArcade(newGameName));
       return box.length;
     }
   
     function findGameId(idGame) {
        let finding = box.find(x => x.gameId == idGame)
        if(finding === undefined)return "no game found"
        return finding.gameId
     }
   
     function removeGame(removeId) {
        let finding = box.findIndex(x => x.gameId == removeId)
        if(finding === -1)return "no game found"
        box.splice(finding,1)
        return "Game is removed"
     }
   
     function getGameById(id) {
        let finding = box.findIndex(x => x.gameId == id)
        if(finding === -1)return "game not found"
        return box[finding]
     }
   
     function getAllGames() {
       return box;
     }
   
     return { addGame, getAllGames ,findGameId, removeGame, getGameById};
   }
   
   const { addGame, getAllGames ,findGameId,getGameById , removeGame} = control();
   
   //test cases
   
   //     // Test Case 2: Add a new game
   console.log(addGame("Pac-Man")); // Expected: 1 (new game added)
   console.log(getAllGames()); // Expected: [{ gameId: 1, gameName: 'Pac-Man' }]
   
   //     // Test Case 3: Add another game
       console.log(addGame('Space Invaders')) // Expected: 2 (new game added)
       console.log(getAllGames()) // Expected: [{ gameId: 1, gameName: 'Pac-Man' }, { gameId: 2, gameName: 'Space Invaders' }]
   
   //     // Test Case 4: Attempt to add a game with the same name
       console.log(addGame('Pac-Man')) // Expected: -1 (duplicate game)
   
   //     // Test Case 5: Find game by ID
       console.log(findGameId(1)) // Expected: 0 (first game found)
       console.log(findGameId(2)) // Expected: 1 (second game found)
       console.log(findGameId(3)) // Expected: -1 (no game found)
   
   //     // Test Case 6: Remove a game by ID
       console.log(removeGame(1)) // Expected: 1 (game removed)
       console.log(getAllGames()) // Expected: [{ gameId: 2, gameName: 'Space Invaders' }]
   
   //     // Test Case 7: Attempt to remove a game that does not exist
       console.log(removeGame(3)) // Expected: -1 (no game found)
   
   //     // Test Case 8: Get a game by ID
       console.log(getGameById(2)) // Expected: { gameId: 2, gameName: 'Space Invaders' }
       console.log(getGameById(1)) // Expected: undefined (game not found)
   // }
   
   
   