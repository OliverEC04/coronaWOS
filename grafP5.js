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
        
    for (i = 0; i < this.yMax; i++)
        {
            line(this.xData[i], smittetData[i], this.this.xData[i-1], smittetData[i-1] );
        }
        
    }
}
