---
level: 14
klass: adept
subclass: justicar
mechanics:
  - type: augment
    value:
      model: adept
      id: biotic-bubble
    merge:
      range:
        aoe:
          size: 30
      damage:
        - dieCount: 1
          dieType: 10
          type: necrotic
          bonus:
            type: powercastingMod
            value: adept
      shortDesc: >-
        Push out a Biotic Bubble for 1 minute or until you leave it's area. It occupies a <me-distance length="30" adj /> burst, centred
        around you. Allies inside of the Bubble recharge their shields at the end of every turn, even if they don't
        fulfill the requisites for recharging shields.
        <br><br>
        When you cast powers while inside the Biotic Bubble,
        you add your Powercasting Modifier to their damage rolls. This benefit only applies to you.
        <br><br>
        You can expend Barrier ticks to prevent damage being dealt
        to your allies inside of the bubble. Whenever you or your allies reduce damage via Barrier while inside the Bubble,
        the enemy that fired off the attack takes damage equal to double the roll of the Barrier die, bypassing shields.
        <br><br>
        Whenever an enemy wanders inside of the range of the barrier, starts its turn there, or is damaged by the
        effect of Reflective Bubble, they take 1d10+{{wisMod}} necrotic damage and are
        <me-condition id="primed" sub="necrotic" /> while inside the bubble, or for one
        turn if they are outside.
      moreInfo:
        additional:
          - {}
          - model: class-features
            id: warp-bubble
name: Warp Bubble
---
At 14th level, the area of the barrier increases to a <me-distance length="30" adj /> burst. Whenever an enemy wanders
inside of the range of the barrier, starts its turn there, or is damaged by the effect of Reflective Bubble, they take
1d10+your Wisdom modifier necrotic damage and are <me-condition id="primed" sub="necrotic" /> while inside the bubble, or for one
turn if they are outside.
