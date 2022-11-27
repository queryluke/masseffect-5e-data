---
level: 6
klass: adept
subclass: justicar
mechanics:
  - type: action
    name: Biotic Bubble
    resource:
      max:
        type: powercastingMod
        value: adept
      reset: long
    range:
      short: 0
      aoe:
        type: sphere
        size: 20
    shortDesc: >-
      Push out a Biotic Bubble for 1 minute or until you leave it's area. It occupies an <me-distance length="20" adj /> burst, centred
      around you. Allies inside of the Bubble recharge their shields at the end of every turn, even if they don't
      fulfill the requisites for recharging shields.
      <br>
      When you cast powers while inside the Biotic Bubble,
      you add your Powercasting Modifier to their damage rolls. This benefit only applies to you.
name: Biotic Bubble
---
At 6th level, as an action, you can push out a Biotic Bubble. It occupies an <me-distance length="20" adj /> burst, centred
around you. Allies inside of the Bubble recharge their shields at the end of every turn, even if they don't
fulfill the requisites for recharging shields.

Additionally, when you cast powers while inside the Biotic Bubble, you add your Powercasting Modifier to their damage
rolls. This benefit only applies to you.

Your Bubble lasts for 1 minute or until you leave it's area. You can use Bubble a number of times equal to your
powercasting modifier , and you regain all uses when you finish a long rest.
