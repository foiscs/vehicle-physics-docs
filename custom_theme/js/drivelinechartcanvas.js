

function drivelinechartcanvas (canvasId, canvasWidth, canvasHeight)
	{
	var self = this;

	var canvas = new texturecanvas(
		{
		canvasId: canvasId,
		pixelsWidth: 16 * canvasWidth,
		pixelsHeight: 17 * canvasHeight,
		width: canvasWidth,
		height: canvasHeight,
		originX: 0,
		originY: canvasHeight,
		});

	var originX = 0;
	var originY = 0;


	// Initialization

	canvas.Grid({ stroke: "#DDF", strokeWidth: 0.4 });


	// Chart helper methods

	self.Wheel = function (x, y)
		{
		var sizeX = 1;
		var sizeY = 2;

		canvas.Rect([ x, y, sizeX, sizeY ], { fill: "transparent", stroke: "black", strokeWidth: 3, rx: 6, ry: 6 });
		}


	self.ConnectX = function (x, y, length)
		{
		canvas.Line([ x, y, x+length, y ], { stroke: "black", strokeWidth: 3 });
		}


	self.ConnectY = function (x, y, length)
		{
		canvas.Line([ x, y, x, y+length ], { stroke: "black", strokeWidth: 3 });
		}


	self.Differential = function (x, y)
		{
		var options = { stroke: "black", strokeWidth: 3 };

		canvas.Line([ x, y-1, x+1, y ], options);
		canvas.Line([ x, y-1, x+1, y-2 ], options);
		canvas.Line([ x+1, y, x+2, y-1 ], options);
		canvas.Line([ x+1, y-2, x+2, y-1 ], options);
		}


	self.TorqueInputTop = function (x, y)
		{
		var options = { stroke: "black", strokeWidth: 3 };

		canvas.Line([ x, y+1, x, y ], options);
		canvas.Line([ x-0.5, y+1, x+0.5, y+1 ], options);
		}


	self.TorqueInputRightTop = function (x, y)
		{
		var options = { stroke: "black", strokeWidth: 3 };

		canvas.Line([ x, y, x+1, y ], options);
		canvas.Line([ x+1, y, x+1, y+1 ], options);
		canvas.Line([ x+0.5, y+1, x+1.5, y+1 ], options);
		}


	self.Axle = function (x, y)
		{
		self.Wheel ( x, y );
		self.ConnectX ( x+1, y-1 , 2);
		self.Differential ( x+3, y );
		self.ConnectX ( x+5, y-1 , 2);
		self.Wheel ( x+7, y );
		}
	}