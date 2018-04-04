 function u(t){
     
        c.width=1920
        for(n=0;n<99;n++){var y=S(t+n/3)*100;x.fillRect(n*50,300-y,50,50);}     
     
        }

loop()



    //u(t) is called 60 times per second.
    //t: Elapsed time in seconds.
    //S: Shorthand for Math.sin.
    //C: Shorthand for Math.cos.
    //T: Shorthand for Math.tan.
    //R: Function that generates rgba-strings, usage ex.: R(255, 255, 255, 0.5)
    //c: A 1920x1080 canvas.
    //x: A 2D context for that canvas.
  