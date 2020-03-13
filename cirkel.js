class Cirkel
{
  constructor(status)
  {
    this.status = status;
    this.farve = color(0);
    this.position = createVector(random(0, window.x), random(0, window.y));
  }

  update()
  {
    if (this.status == 1)
    {
      this.farve = color(255, 0, 0);
    }

    p5.Vector.add(random(-5, 5), random(-5, 5), this.position);
  }

  draw()
  {
    fill(this.farve);
    circle(this.position.x, this.position.y, 15);
  }
}
