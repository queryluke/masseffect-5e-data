---
level: 18
klass: soldier
subclass: holo-operative
mechanics:
  - type: augment
    value:
      model: soldier
      id: hologram
    merge:
      moreInfo:
        additional:
          - model: class-features
            id: holo-legion
  - type: augment
    value:
      model: soldier
      id: holo-fury
    merge:
      shortDesc: >-
        Regain one use when you roll initiative
        <br><br>
        When you take the Attack action and have a Hologram out, you can make an additional attack from the
        hologram's position. If you have two holograms out, make an additional extra attack on your attack action.
      moreInfo:
        additional:
          - model: class-features
            id: holo-legion
name: Holo-Legion
---
At 18th level, you can use your bonus action to create two holograms with your Hologram ability, and you can have a
total of two holograms active at once. If you try to create a third hologram, the oldest one you have is destroyed.
Anything that could be done from one hologram's position can be done from either position.

In addition, when you roll initiative and don't have a use of Holo Fury remaining,
you regain one use of Holo Fury. If you have two holograms out,
Holo Fury allows you to make an additional extra attack on your attack action.
