class Graf
{
    constructor(xData, yData, xMax, yMax, str, pos, farve)
    {
        this.xData = xData;
        this.yData = yData;
        this.xMax = xMax;
        this.yMax = yMax;
        this.str = str;
        this.pos = pos;
        this.farve = farve;
    }

    update()
    {

    }

    draw()
    {
        line(this.pos.x, this.pos.y + this.str.y, this.pos.x + this.str.x, this.pos.y + this.str.y); //x-akse
        line(this.pos.x, this.pos.y + this.str.y, this.pos.x, this.pos.y); //y-akse

        for (i = 0; i < this.xMax; i++)
        {
            stroke(this.farve);
            strokeWeight(3)
            line(this.xData[i-1] / this.xMax * this.str.x, 
                this.pos.y + this.str.y - this.yData[i-1] / this.yMax * this.str.y, 
                this.xData[i] / this.xMax * this.str.x, 
                this.pos.y + this.str.y - this.yData[i] / this.yMax * this.str.y);
            stroke(0)
            strokeWeight(1)
        }        
    }
}
