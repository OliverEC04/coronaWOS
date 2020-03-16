class Cirkel
{
  constructor(status, window)
  {
    this.status = status;
    this.farve = color(0);
    this.window = window;
    this.position = createVector(random(window.x), random(window.y));
    this.dia = 15;

    /*
    function farveskift()
    {
      this.farve = color(255, 0, 0);
    }
    */
  }

  overlap(other)
  {
    var afstand = dist(this.position.x, this.position.y, other.position.x, other.position.y);
    if (afstand < (this.dia / 2 + other.dia / 2)) 
    {
      return true;
    }
    else
    {
      return false;
    }  
  }
  
  countSyge(liste)
  {
    var syge = indexOf(liste)
    if (syge != -1)
    {
      var antalSyge = antalSyge++
      return antalSyge
      console.log(antalSyge)
    }

  }

  update()
  {
    if (this.status == 1)
    {
      this.farve = color(255, 0, 0);
    }
    
    this.position.x += random(-2, 2);
    this.position.y += random(-2, 2);

    if (this.position.x - this.dia <= 0)
    {
      this.position.x += 4;
    }
    if (this.position.x + this.dia >= this.window.x)
    {
      this.position.x -= 4;
    }
    if (this.position.y - this.dia <= 0)
    {
      this.position.y += 4;
    }
    if (this.position.y + this.dia >= this.window.y)
    {
      this.position.y -= 4;
    }
  }

  draw()
  {
    fill(this.farve);
    circle(this.position.x, this.position.y, this.dia);
  }
}
