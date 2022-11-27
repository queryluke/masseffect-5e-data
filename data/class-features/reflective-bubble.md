---
level: 10
klass: adept
subclass: justicar
mechanics:
  - type: augment
    value:
      model: adept
      id: biotic-bubble
    merge:
      shortDesc: >-
        Push out a Biotic Bubble for 1 minute or until you leave it's area. It occupies an <me-distance length="20" /> burst, centred
        around you. Allies inside of the Bubble recharge their shields at the end of every turn, even if they don't
        fulfill the requisites for recharging shields.
        <br>
        When you cast powers while inside the Biotic Bubble,
        you add your Powercasting Modifier to their damage rolls. This benefit only applies to you.
        <br>
        You can expend Barrier ticks to prevent damage being dealt
        to your allies inside of the bubble. Whenever you or your allies reduce damage via Barrier while inside the Bubble,
        the enemy that fired off the attack takes damage equal to double the roll of the Barrier die, bypassing shields.
      moreInfo:
        additional:
          - model: class-features
            id: reflective-bubble
name: Reflective Bubble
---
At 10th level, while you're inside of the Biotic Bubble, you can expend Barrier ticks to prevent damage being dealt
to your allies inside of the bubble. Whenever you or your allies reduce damage via Barrier while inside the Bubble,
the enemy that fired off the attack takes damage equal to double the roll of the Barrier die, bypassing shields.
