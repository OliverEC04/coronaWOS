class Cirkel
{
  constructor(status)
  {
    this.status = status;
    this.farve = (0);
  }

  update()
  {
    this.position = createVector(random(0, window.x), random(0, window.y));

    if (this.status == 1)
    {
      this.farve = color(255, 0, 0);
    }
  }

  draw()
  {
    
  }
}