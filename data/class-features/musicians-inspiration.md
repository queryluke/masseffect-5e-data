---
level: 1
klass: musician
mechanics:
  - type: bonus-action
    name: Musician's Inspiration
    resource:
      id: musicians-inspiration
      min: 1
      reset: long
      max:
        type: mod
        value: cha
    damage:
      - dieType: 6
        dieCount: 1
        label: 'Inspiration'
    range:
      short: 60
    shortDesc: >-
      Choose one creature other than yourself within <me-distance length="60" /> of you who can hear you.
      That creature gains one Inspiration die.
      <br><br>
      Once within the next 10 minutes, the target can roll the die and add the number rolled to one ability check or Attack
      roll it makes. The target can wait until after it rolls The D20 before deciding to use the Musician's Inspiration die,
      but must decide before the GM says whether the roll succeeds or fails. Once the Inspiration die is rolled, it is lost.
      A creature can have only one Inspiration die at a time.
name: Musician's Inspiration
---
You can inspire others through your music. To do so, you use a Bonus Action on your turn to choose one creature other
than yourself within <me-distance length="60" /> of you who can hear you. That creature gains one Inspiration die, a d6.

Once within the next 10 minutes, the target can roll the die and add the number rolled to one ability check or Attack
roll it makes. The target can wait until after it rolls The D20 before deciding to use the Musician's Inspiration die,
but must decide before the GM says whether the roll succeeds or fails. Once the Inspiration die is rolled, it is lost.
A creature can have only one Inspiration die at a time.

You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any
expended uses when you finish a Long Rest.

Your Inspiration die changes when you reach certain levels in this class. The die becomes a
d8 at 5th Level, a d10 at 10th level, and a d12 at 15th level.
