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
    
    this.position.x += random(-2, 2);
    this.position.y += random(-2, 2);

    if (this.position.x < 0)
    {
      this.position.x++;
    }
    if (this.position.x > window.x)
    {
      this.position.x--;
    }
    if (this.position.y < 0)
    {
      this.position.y++;
    }
    if (this.position.y > window.y)
    {
      this.position.y--;
    }
  }

  draw()
  {
    fill(this.farve);
    circle(this.position.x, this.position.y, this.radius);
  }
}
