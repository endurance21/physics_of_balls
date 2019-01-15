  var bool=undefined;
  var gravity=2.9;
  var bool2=1;
  var bool3=-1;
  var bool4=undefined;
  var bool5=undefined;
  var bool6=-1;
  var bool8=1;
 
  
  

var colors=['#85144b',"#0074D9",'#D8C3A5','#FF851B'];

  
/*<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
*/  


     function collision()
     {  bool8=-bool8;

      if(bool8==1)
        { document.getElementById('collison').style.backgroundColor="#7CFC00";
    }
      
      else {
        document.getElementById('collison').style.backgroundColor="yellow";
    }




     }
     function changecolor()
          { bool2=-bool2;
             


                  }

    function changecanvascolor()
     { bool6=-bool6;

         
     
      }


     function gravity2()
      {  
                      bool=-bool;  changeradius();
                       


                       document.getElementById('gravity2').style.backgroundColor="#7CFC00";
    

                  }

 
       function gravity1()
                  { 
 
                    bool=1;
                 


                       

                      
                       document.getElementById('gravity1').style.backgroundColor="#7CFC00";                                      ////////////////////FUNCTIONS CONTROLLED BY BUTTONS

    
                        





                     }

       function interact()
       {   bool3=-bool3;



          if(bool3==1)
            { document.getElementById('interact').style.backgroundColor="#7CFC00";}
             
         else 
                document.getElementById('interact').style.backgroundColor="yellow";
      }

/*<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
*/

/*
var analyser;
window.onload = function() {
     
     
     
    
    setupWebAudio();
    
    
   
};

function setupWebAudio() {
    var audio = document.createElement('audio');                                      /////////audio setup using web audio inbuilt API//////////////NO OTHER API USED, SIMPLE CONCEPT OF AUDIO PIPELINE IS USED..................

    audio.src = 'audio/song.mp3';
    audio.controls = 'true';
    document.getElementById('audio5').appendChild(audio);
    audio.style.width = window.innerWidth;
    
    var audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    var source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    audio.play();
}


 */

 





/*<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
*/



         function rotate(velocity, angle) {                                                                    
                   const rotatedVelocities = {
                                            x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
                                            y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
                                           };

    return rotatedVelocities;
}

 
function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

     
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

       
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);
 
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

      
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };                     /////////////////UTILITY COLLISON FUNCTION ////ULTIMATE 

        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

       
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);
 
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}

        function distance(x1,y1,x2,y2)
                       { return Math.sqrt( Math.pow(x1-x2,2)+ Math.pow(y1-y2,2));
 }

/*<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
*/                                

         function changeradius()

     {                                                                  ////////////////////////////this is updating function  .......................................................................



                           var data4=document.getElementById('gravity').value;
 
                           document.getElementById('gravityvalue').innerHTML=data4;                   ////////////////tAKING DATA FROM SLIDER  ////DATA OF GRAVITY 
                                gravity=data4/2;

                   
   
                           var status=document.getElementById('SliderStatus');                     ///////////////DATA OF SPEED OF BALLS

   
                          var data2=document.getElementById('speed').value; 
                          document.getElementById('speedvalue').innerHTML=data2; 





                          var data3=document.getElementById('numberofball').value;
                                                                                                 /////////////////////////DATA OF NUMBER OF BALLS TO SHOW 
                          document.getElementById('nmbrofball').innerHTML=data3;



                          var canvas=document.querySelector('canvas');                              ///////////////////SELECTING CANVAS 
                          canvas.width=window.innerWidth;
                          canvas.height=window.innerHeight;






                             var c=canvas.getContext('2d');                              


                             var colors=['#85144b',"#0074D9",'#D8C3A5','#FF851B'];

  
                            var friction=0.92;
  
  
                   


 

                            var mouse =
                             { x:undefined,y:undefined};



window.addEventListener('mousemove',function(event){ 
 mouse.x=event.pageX;
 mouse.y=event.pageY;
  

  }
 ); 

/*<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
*/

 function Circle(x,y,dx,dy,radius,index)
  { this.x=x;
   this.y=y;
   this.velocity={ x:dx,y:dy};

   this.radius=radius;
   this.index=index;
   this.mass=1;

   

    





         this.draw=function(){



                              c.beginPath();






                              c.arc(this.x,this.y,this.radius,0,Math.PI*2,0);
                              c.strokeStyle="red";
                              c.stroke();

                            if ( bool2==1){    
                              c.fillStyle=colors[Math.floor(Math.random()*colors.length)];

                                c.fill();
                              }
                        

                               
                       else if(true){                                                                                   ////////////////////////CIRCLE OBJECT CONSTRUCTION USINMG OOPS ABILITY OF JS

                                   c.fillstyle="blue";


                                  c.fill();
                             
                                     }
 

                             

                         }
  this.update=function(circlearray)
         {     

                      this.draw();
            
    







                              if(bool8==1)   {

                               for( var i=0; i<circlearray.length; i++)
                                                    { 
        
                                            if(this===circlearray[i]) continue;


                                             
                                        if( distance(this.x,this.y,circlearray[i].x,circlearray[i].y)<this.radius+circlearray[i].radius)
                                                  {     resolveCollision(this,circlearray[i]);

                                                      
                                                  }
   
  
                                       }
                                            }







  
    




      


 



                 if( bool6==1) 
                              {
                     canvas.style.backgroundColor="BLACK";
                              }
                           else canvas.style.backgroundColor="white";


 




                  if( this.y+this.radius>=innerHeight||this.y-this.radius<=0)
                                                                                           /////////////////////////////APPLIED FOR WALL COLLISION......................................................
                    { this.velocity.y=-this.velocity.y; }

 
                   if (this.x+this.radius>innerWidth||this.x-this.radius<0)

                      { this.velocity.x=-this.velocity.x;
                      }
              else {}







    
             if(bool==1){


                if(this.y+this.radius+this.velocity.y>canvas.height)




                 this.velocity.y=-this.velocity.y*friction;
                     
                 else {this.velocity.y+=gravity; } 


 
                     }

   else{}








       if(bool3==1)
                        {
   
           if(this.x-mouse.x<100&&this.x-mouse.x>-100&&this.y-mouse.y<100&&this.y-mouse.y>-100)
                 { if(this.radius<40)
                       { this.radius+=1;
        

                     }                                                                                  //THIS MAKES MY HOVER INTERACTION WORKS************************************************* 

               }
     else if(this.radius>5)
              { this.radius-=1;
              }



     }


else{}



 





if(bool2==1) {

    document.getElementById('changecolor').style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];


  }
            
      
         else  {
           document.getElementById('changecolor').style.backgroundColor="yellow"; }



 
          








               this.x+=this.velocity.x; /////////updating POSITIN OF CIRCLE ...........
 
 
               this.y+=this.velocity.y; 



            




 



}
                          



}
 
/*<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
*/
  
 


/*<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
*/

 

 var circlearray=[];
 
 
 for(var i=0; i<data3; i++)
  {   var x=Math.random()*innerWidth;
      var y=Math.random()*innerHeight;
      var dx=(Math.random()-0.5)*data2;
        var dy=(Math.random()-0.5)*data2;
        var radius=Math.random()*20;

        if(i!=0){


     for( let j=0; j<circlearray.length; j++)

       {

      if( distance(x,y,circlearray[j].x,circlearray[j].y)<radius*2)                   ///////////////////////MAKING OF RANDOM NO. OF CIRCLE ........................................................................................

               {       y=Math.random()*innerHeight;

                        x=Math.random()*innerWidth;

                        j=-1;                                                        /////checking newly generated co-ordinate //should not collide with existing

               }
        }
               }

 

        
       circlearray.push(new Circle(x,y,dx,dy,radius,i));
      
 
  }

 
 
/*<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
*/
function animate()
{ 

      requestAnimationFrame(animate);
      c.clearRect(0,0,innerWidth,innerHeight);                           ////////////////ENSURING NO REMAIN OF LAST IMAGE OF CIRCLES...SO AS TO MAKE THEM SEE IN MOTION........................................................................

    /*   var freqByteData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(freqByteData);               //////////audio analyser ke liye 
   */
     
       
        
        for(var i=0; i<circlearray.length; i++)                                                    ///////////////////THIS IS WHAT RUNS THE ANIMATION..
                                                                                                                //////////////THE RECURSIVE METHOD 
                {                                                   

            circlearray[i].update(circlearray);
               }
        
        

   }

animate();




}
changeradius();



/*<------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
*/
