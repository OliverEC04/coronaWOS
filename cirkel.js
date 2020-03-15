class Cirkel
{
  constructor(status, window)
  {
    this.status = status;
    this.farve = color(0);
    this.window = window;
    this.position = createVector(random(window.x), random(window.y));
    this.radius = 15;
    this.farveskift = function()
    {
      this.farve = color(255, 0, 0);
    }
    /*this.overlap = funtion(other)
    {
      var afstand = dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (afstand > (this.radius + other.radius)) 
      {
          return true;
      }
      else
      {
        return false;
      }
         
      }*/
    }
  

  update()
  {
    if (this.status == 1)
    {
      this.farve = color(255, 0, 0);
    }
    
    this.position.x += random(-2, 2);
    this.position.y += random(-2, 2);

    if (this.position.x - this.radius <= 0)
    {
      this.position.x += 4;
    }
    if (this.position.x + this.radius >= this.window.x)
    {
      this.position.x -= 4;
    }
    if (this.position.y - this.radius <= 0)
    {
      this.position.y += 4;
    }
    if (this.position.y + this.radius >= this.window.y)
    {
      this.position.y -= 4;
    }
  }

  draw()
  {
    fill(this.farve);
    circle(this.position.x, this.position.y, this.radius);
  }
}
