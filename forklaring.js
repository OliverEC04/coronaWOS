function forklaring(pos, str)
{
    statusAntal = 5;

    fill(normalFarve)
    rect(pos.x + str.x / statusAntal * 0, pos.y + str.y, str.x / statusAntal, 20);
    fill(255);
    textAlign(CENTER);
    text("Normal", pos.x + str.x / statusAntal * 0 + str.x / statusAntal * .5, pos.y + str.y + 14);

    fill(smittetFarve)
    rect(pos.x + str.x / statusAntal * 1, pos.y + str.y, str.x / statusAntal, 20);
    fill(255);
    textAlign(CENTER);
    text("Smittet", pos.x + str.x / statusAntal * 1 + str.x / statusAntal * .5, pos.y + str.y + 14);

    fill(helbredtFarve)
    rect(pos.x + str.x / statusAntal * 2, pos.y + str.y, str.x / statusAntal, 20);
    fill(255);
    textAlign(CENTER);
    text("Helbredt", pos.x + str.x / statusAntal * 2 + str.x / statusAntal * .5, pos.y + str.y + 14);

    fill(foolFarve)
    rect(pos.x + str.x / statusAntal * 3, pos.y + str.y, str.x / statusAntal, 20);
    fill(255);
    textAlign(CENTER);
    text("Fool", pos.x + str.x / statusAntal * 3 + str.x / statusAntal * .5, pos.y + str.y + 14);

    fill(dodFarve)
    rect(pos.x + str.x / statusAntal * 4, pos.y + str.y, str.x / statusAntal, 20);
    fill(255);
    textAlign(CENTER);
    text("Dod", pos.x + str.x / statusAntal * 4 + str.x / statusAntal * .5, pos.y + str.y + 14);
}
    // 0 = ikke smittet, 1 = smittet, 2 = helbredt, 3 = fool, 4 = død