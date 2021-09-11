// const BOARD_SIZE = 9
const BoardState = (() =>
{
    let array = ["N", "N", "N", "N", "N", "N", "N", "N", "N"]
    return {array}
})

// function drawBoardState(bs) {
//     let cells = document.querySelectorAll("#board > *")
//     for (let i=0; i < BOARD_SIZE; i++) 
//     {
//         cells[i].textContent = bs.array[i]
//     }
// }

// const start = BoardState();
// start.array[8] = "Y"
// drawBoardState(start)

// function setCellState(cellNum, state){}
// function getCellState(cellNum){}
// const cellState = (()=>
// {

// })
// const Player = (()=>
// {
//     function doMove(cellNum){}

// })

// function checkWin(boardState) {}
// const Game = (()=>
// {
    
// })

class Player 
{
    constructor(inToken, isHuman){
        let token = inToken
        let isHuman = isHuman
    }
    isHuman(){return this.isHuman}
    doMove(cellX, cellY, inBoard)
    {
        return inBoard.setCell(cellX, cellY, Cell(token))
    }
}

class Cell 
{
    constructor(initState) 
    { 
        let state
        if (initState){
            state = initState
        }   
        else {
            state = "N"
        }
     }
    getCellState() {
        return state
    }
    setCellState(inState)
    {
        state = inState
    }
}

class BoardState 
{
    constructor(inCells)
    {
        let cells = inCells 
        let cellLastMove = -1
        this.init()
    }
    init()
    {
        let winTemplate_1 =[[1,1,1],
                            [0,0,0],
                            [0,0,0]]
        let winTemplate_2 =[[0,0,0],
                            [1,1,1],
                            [0,0,0]]
        let winTemplate_3 =[[0,0,0],
                            [0,0,0],
                            [1,1,1]]
        let winTemplate_4 =[[1,0,0],
                            [1,0,0],
                            [1,0,0]]
        let winTemplate_5 =[[0,1,0],
                            [0,1,0], 
                            [0,1,0]]
        let winTemplate_6 =[[0,0,1],
                            [0,0,1],
                            [0,0,1]]
        let winTemplate_7 =[[1,0,0],
                            [0,1,0],
                            [0,0,1]]
        let winTemplate_8 =[[0,0,1],
                            [0,1,0],
                            [1,0,0]]
        winTemplate = [winTemplate_1, winTemplate_2, winTemplate_3,
                            winTemplate_4, winTemplate_5, winTemplate_6, 
                            winTemplate_7, winTemplate_8,]
    }
    _getCellIndex(inX, inY)
    {
        return inX * 3 + inY
    }
    _checkCellsIdentical(array)
    {
        last = array[0]
        for (i = 1; i < array.length; i++)
        {
            if (array[i].getCellState() != last.getCellState())
            {
                return false
            }
            last = array[i]
        }
        return true
    }
    checkWin()
    {
        for (let p = 0; p < 8; p++)
        {
            let checkResults = [-1,-1,-1]
            let checkI = 0
            for (i = 0; i <3; i++)
            {
                for (j = 0; j <3; j++)
                {
                    if (winTemplate[i[j]] == 1)
                    {
                        checkResults[checkI] = this.getCell(
                            this._getCellIndex(i,j))
                        checkI++
                    }
                }
            }
            if (this._checkCellsIdentical(checkResults))
            {
                return checkResults[0].getCellState()
            }
        }
        return "N"
    }
    setCell(cellX, cellY, inCell)
    {
        if (this._getCellIndex(cellX, cellY) >= cells.length)
        {return false}
        else 
        {
            cells[this._getCellIndex(cellX, cellY)] = inCell
        }
    }
    getCell(cellX, cellY)
    {
        return cells[this._getCellIndex(cellX, cellY)]
    }

}
