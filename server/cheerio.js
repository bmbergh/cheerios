var com = require("serialport"),
	serialPort = new com.SerialPort("/dev/cu.usbmodem1411", {
    baudrate: 9600,
    parser: com.parsers.readline('\r\n')
  });

module.exports = function (socket){

	serialPort.on('open',function() {
	  console.log('Port open');
	});

	serialPort.on('data', function(data) {
	  socket.emit('BPM', data);
	  console.log(data);
	});
}