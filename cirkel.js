class Cirkel
{
  constructor(status, window)
  {
    this.status = status;
    this.farve = color(0);
    this.position = createVector(random(window.x), random(window.y));
  }

  update()
  {
    if (this.status == 1)
    {
      this.farve = color(255, 0, 0);
    }

    this.position.x += random(-1, 1);
    this.position.y += random(-1, 1);
  }

  draw()
  {
    fill(this.farve);
    circle(this.position.x, this.position.y, 15);
  }
}
