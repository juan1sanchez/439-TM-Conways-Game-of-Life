var refreshIntervalId = 0;
var secondIntervalID = 0;
var aliveNeighbors = 0;


// creates a multi dimentional array of size 20x35
var SIZE2 = 20;
var SIZE = 35;
var intervalTimer = 375000;
var matrix = createMatrix(SIZE, SIZE2);
var matrix2 = createMatrix(SIZE, SIZE2);
var stageMatrix = createMatrix(3,3);

//Setups main canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

//Setups stage canvas
var stageCanvas = document.getElementById('stageCanvas');
var stageCtx = stageCanvas.getContext("2d");
  
makeGrid();
fillMatrix();
  
function autoRun()
{
	refreshIntervalId = setInterval(aliveOrDead, intervalTimer);
	intervalTimer = intervalTimer / 2;
}

function pause()
{
	clearInterval(refreshIntervalId);
}

function makeGrid()
{

	
	ctx.clearRect(0, 0, 350, 200); // clear canvas	
	
	for( i = 0; i < SIZE; i++)
	{
		
		for (j = 0; j < SIZE2; j++)
		{
			ctx.strokeRect(i*10,j*10,10,10);
		}
		
	}
	
	stageCtx.clearRect(0, 0, 30, 30); // clear canvas	
	
	
	for( k = 0; k < 3; k++)
	{
		
		for (l = 0; l < 3; l++)
		{
			stageCtx.strokeRect(k*10,l*10,10,10);
		}
		
	}
}

function survivalLogic(  i, j)
{
	aliveNeighbors = 0;
	
	// i = size, j = size2
	
		for (var k = i - 1; k <= i + 1; k++)
		{
			for (var l = j - 1; l <= j + 1; l++)
			{

				if ( k < 0 || l < 0 || k > SIZE-1 || l > SIZE2-1)
				{
					//Do nothing
				}
				else if ( k == i && l == j)
				{
					//Once again, do nothing
				}
				else
				{
					console.log( "k[" + k + "] l[" + l + "] = " + aliveNeighbors);	
					aliveNeighbors += matrix[k][l];
					stageMatrix[k-i+1][l-j+1] = matrix[k][l];
				}
			
			}
		}
	
//Is it Dead?
	if(matrix[i][j] == 0)
	{		
		if (aliveNeighbors == 3)
		{
			matrix2[i][j] = 1;
			ctx.fillRect(i*10, j*10 , 10, 10);
		}
		else
		{
			matrix2[i][j] = 0;
		}
	}
	//If its not dead, its alive!
	else
	{		
		if (aliveNeighbors == 2 || aliveNeighbors == 3)
		{
			matrix2[i][j] = 1;
			ctx.fillRect(i*10, j*10 , 10, 10);
		}
		else
		{
			matrix2[i][j] = 0;
		}
	}
	
		stageCtx.clearRect(0, 0, 30, 30); // clear canvas	

		
		for( k = 0; k < 3; k++)
		{

			for (l = 0; l < 3; l++)
			{
				stageCtx.strokeRect(k*10,l*10,10,10);
			}
		}
	
	for( i = 0; i < 3; i++)
	{
		
		for (j = 0; j < 3; j++)
		{
			
			if(stageMatrix[i][j] == 1)
			{
				stageCtx.fillRect(i*10,j*10, 10, 10);
			}
		}
	}
	
	

}

function aliveOrDead()
{
	
  makeGrid();	
  
  var secondTimer = intervalTimer / 375;
		
  for(var i = 0; i < SIZE; i++)
  {
	    for(var j = 0; j < SIZE2; j++)
		{   
			
			secondIntervalID = setInterval(survivalLogic(i,j), secondTimer);

		}
		
  }

   for(var i = 0; i < SIZE; i++)
  {
	    for(var j = 0; j < SIZE2; j++)
		{   
			
			matrix[i][j] = matrix2[i][j];
			
		}
		
  }
}


function fillMatrix()
{
  // initializes the first row
  for(var i = 0; i < SIZE; i++)
  {
	    for(var j = 0; j < SIZE2; j++)
		{   
			if(j >= 5 && j < 10 && i ==5)
			{
				matrix[i][j] = 1;
				ctx.fillRect(i*10, j*10 , 10, 10);
			}
			else if(i == 9 && j >= 5 && j < 10)
			{
				matrix[i][j] = 1;
				ctx.fillRect(i*10, j*10 , 10, 10);
			}
			else if(i == 7 && j == 5)
			{
				matrix[i][j] = 1;
				ctx.fillRect(i*10, j*10 , 10, 10);
			}
			else if(i == 7 && j == 9)
			{
				matrix[i][j] = 1;
				ctx.fillRect(i*10, j*10 , 10, 10);
			}
			
			else if(j >= 5 && j < 10 && i ==25)
			{
				matrix[i][j] = 1;
				ctx.fillRect(i*10, j*10 , 10, 10);
			}
			else if(i == 29 && j >= 5 && j < 10)
			{
				matrix[i][j] = 1;
				ctx.fillRect(i*10, j*10 , 10, 10);
			}
			else if(i == 27 && j == 5)
			{
				matrix[i][j] = 1;
				ctx.fillRect(i*10, j*10 , 10, 10);
			}
			else if(i == 27 && j == 9)
			{
				matrix[i][j] = 1;
				ctx.fillRect(i*10, j*10 , 10, 10);
			}
			else
			{
				matrix[i][j] = 0;

			}
		}
		
  }
}

/* function that creates a matrix
   function was created with help of Stack Overflow answer by Matthew Crumley
 link: https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript */
function createMatrix(length)
{
      var array = new Array(length || 0), y = length;
      if (arguments.length > 1)
      {
          var argument = Array.prototype.slice.call(arguments, 1);
          while(y-- != 0)
          {
            array[length-1 - y] = createMatrix.apply(this, argument);
          }
      }
      return array;
  }



