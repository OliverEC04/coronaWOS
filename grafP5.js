class Graf
{
    constructor(xData, yData, xMax, yMax, str, pos)
    {
        this.xData = xData;
        this.yData = yData;
        this.xMax = xMax;
        this.yMax = yMax;
        this.str = str;
        this.pos = pos;
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
            stroke(255,0,0)
            strokeWeight(5)
            line(this.xData[i], this.pos.y + this.str.y - this.yData[i], this.xData[i-1], this.pos.y + this.str.y - this.yData[i-1]);
            stroke(0)
            strokeWeight(1)
        }        
    }
}
