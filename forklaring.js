function forklaring(pos, str)
{
    statusAntal = 5;
    fill()
    rect(pos.x, pos.y + str.y, str.x / statusAntal, 20);
}
    // 0 = ikke smittet, 1 = smittet, 2 = helbredt, 3 = fool, 4 = død