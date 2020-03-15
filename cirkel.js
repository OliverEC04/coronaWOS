class Cirkel
{
  constructor(status, window)
  {
    this.status = status;
    this.farve = color(0);
    this.position = createVector(random(window.x), random(window.y));
    this.radius = 15;
  }

  update()
  {
    if (this.status == 1)
    {
      this.farve = color(255, 0, 0);
    }
    
    if (this.position.x - this.radius > 0)
    {
      this.position.x += random(-2, 2);
    }
    if (this.position.x + this.radius < window.x)
    {
      this.position.x += random(-2, 2);
    }

    if (this.position.y - this.radius > 0)
    {
      this.position.y += random(-2, 2);
    }
    if (this.position.y + this.radius < window.y)
    {
      this.position.y += random(-2, 2);
    }
    /*
    if (this.position.x - this.radius <= 0)
    {
      this.position.x += 2;
    }
    if (this.position.x + this.radius >= window.x)
    {
      this.position.x -= 2;
    }
    if (this.position.y - this.radius <= 0)
    {
      this.position.y += 2;
    }
    if (this.position.y + this.radius >= window.y)
    {
      this.position.y -= 2;
    }
    */
  }

  draw()
  {
    fill(this.farve);
    circle(this.position.x, this.position.y, this.radius);
  }
}
