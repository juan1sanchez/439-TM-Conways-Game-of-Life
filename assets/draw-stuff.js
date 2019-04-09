var refreshIntervalId = 0;
  var aliveNeighbors = 0;


// creates a multi dimentional array of size 400x400
var SIZE2 = 8;
var SIZE = 8;
var matrix = createMatrix(SIZE, SIZE2);
var matrix2 = createMatrix(SIZE, SIZE2);


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
  
  
makeGrid();
fillMatrix();
  
function autoRun()
{
refreshIntervalId = setInterval(aliveOrDead, 1010);//don't change time, this connects with how fast animations go
}

function pause()
{
  clearInterval(refreshIntervalId);
}

function makeGrid()
{
	var x =0;
	var	y=0;
	
	ctx.clearRect(0, 0, 80, 80); // clear canvas	
	
	for( i = 0; i < 8; i++)
	{
		
		ctx.strokeRect(x,y,10,10);
		ctx.strokeRect(x,y+10,10,10);
		ctx.strokeRect(x,y+20,10,10);
		ctx.strokeRect(x,y+30,10,10);
		ctx.strokeRect(x,y+40,10,10);	
		ctx.strokeRect(x,y+50,10,10);	
		ctx.strokeRect(x,y+60,10,10);		
		ctx.strokeRect(x,y+70,10,10);		

		x += 10;
	}
}

function aliveOrDead()
{
	
  makeGrid();	
	
	
	
  for(var i = 1; i <= 6; i++)
  {
	    for(var j = 1; j <= 6; j++)
		{   
			aliveNeighbors = 0;
	
			aliveNeighbors += matrix[i-1][j-1];
			aliveNeighbors += matrix[i-1][j];
			aliveNeighbors += matrix[i-1][j+1];
			aliveNeighbors += matrix[i][j-1];
			aliveNeighbors += matrix[i][j+1];
			aliveNeighbors += matrix[i+1][j-1];
			aliveNeighbors += matrix[i+1][j];
			aliveNeighbors += matrix[i+1][j+1];

	
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
					//console.log( "die");
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

			console.log( "i[" + i + "] j[" + j + "] = " + aliveNeighbors);

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
			if(j == 3 && i >= 3 && i <= 5)
			{
				matrix[i][j] = 1;
				ctx.fillRect(i*10, j*10 , 10, 10);
			}
			else if(j == 4 && i >= 2 && i <= 4)
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



