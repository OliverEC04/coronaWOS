class Cirkel
{
  constructor(status)
  {
    this.status = status;
  }

  update()
  {
    var position = createVector(random(0, window.x), random(0, window.y));
  }

  draw()
  {
    fill(this.farve);
    circle(this.position.x, this.position.y, 15)
  }
}