var o=can.getContext("2d");
setInterval(clock,1000);
function clock(){
	o.clearRect(0,0,500,500)
	o.save();
	o.beginPath();
	o.translate(250,250);
	o.strokeStyle="transparent";
	// o.strokeStyle="red";
	o.lineWidth='10';
	o.arc(0,0,200,0,Math.PI*2);
	o.stroke();
	o.closePath();

	o.beginPath();
	// o.strokeStyle="#999";
	o.lineWidth='5';
	o.arc(0,0,190,0,Math.PI*2);
	o.stroke();
	o.closePath();


	
	for(var i=0;i<12;i++){
		o.beginPath();
		// o.strokeStyle="red";
		o.rotate(Math.PI/6);
		o.lineTo(170,0);
		o.lineTo(190,0);
		o.stroke();
		
		o.closePath();

	}

	for(var i=0;i<60;i++){
		if(i%5!=0){
			o.beginPath();
			// o.strokeStyle="green";			
			o.lineTo(180,0);
			o.lineTo(190,0);
			o.stroke();
			o.closePath();
		}
		o.rotate(Math.PI/30);
	}
	

	o.rotate(-Math.PI/2);

	var d=new Date();
	var h=d.getHours();
	h=h>12?h-12:h;
	var m=d.getMinutes();
	var s=d.getSeconds();
	var ha=h*Math.PI/6+m*Math.PI/6/60+s*Math.PI/6/60/60;
	var ma=m*Math.PI/30+s*Math.PI/30/60;

	var sa=s*Math.PI/30;
	// var ha=
	//时针
	o.save();
	o.beginPath()
	o.rotate(ha)
	o.lineTo(-10,0);
	o.lineTo(80,0);
	o.lineWidth='8';
	o.strokeStyle="#fff";	
	o.stroke();
					

	o.closePath()
	o.restore();
	

	//分针
	o.save();
	o.beginPath()
	o.rotate(ma);
	o.lineTo(-10,0);
	o.lineTo(120,0);
	o.lineWidth='5';
	o.strokeStyle="#fff";	
	o.stroke();
	o.closePath()
	o.restore();
	


	//秒针
	o.save();
	o.beginPath()
	o.rotate(sa);
	o.lineTo(-10,0);
	o.lineTo(150,0);
	o.lineWidth='3';
	o.strokeStyle="#fff";	
	o.stroke();
	o.closePath()
	o.restore();


	o.fillStyle="transparent";
	o.arc(0,0,8,0,Math.PI*2);
	o.fill();
	o.restore();
}