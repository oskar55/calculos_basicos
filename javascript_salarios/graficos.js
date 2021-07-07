function draw() {
    
    var canvas = document.getElementById("circle");

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var X = canvas.width / 2;
        var Y = canvas.width / 2;
        var R = 45;

        ctx.beginPath();
        // ctx.arc(X,Y,R,0,2 * Math.PI, false);
        ctx.arc(100, 75, 50, 0 * Math.PI, totalSalarios * Math.PI);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#e455d1';
        ctx.stroke();

    }

}