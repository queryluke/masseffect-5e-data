---
level: 2
klass: sentinel
subclass: warleader
mechanics:
  - type: bonus-action
    name: Activate Tech Barricade
    toggle:
      id: tech-armor
      whenOn:
        - type: resource
          id: tech-armor
          method: add
          value:
            type: flat
            value: 1
        - type: resource
          id: tech-barricade
          method: set
          value:
            type: flat
            value: 0
        - type: other
          name: Tech Barricade
          shortDesc: >-
            You and adjacent allies gain half cover. If an attack misses a target behind the Barricade because of
            this bonus, that means the barricade took a hit.
          moreInfo:
            model: class-features
            id: tech-barricade
          resource:
            reset: off
            label: 'Hits'
            max:
              type: multi
              value:
                - type: level
                  multiplier: 0.33
                  value: sentinel
                - type: powercastingMod
                  value: sentinel
    resource:
      max:
        type: flat
        value: 2
      id: tech-armor
name: Tech Barricade
---
At 3rd level, when you use Tech Armor, you can instead chose to activate an omni-barricade for you and your teammates.
When you do so, you don't gain the normal benefits of Tech Armor, but any allies adjacent to you gain the benefits of
half cover. The bonus remains for as long as your Tech Barrier would have held up.

If an attack misses a target behind the Barricade because of this bonus, that means the barricade took a hit. The
barricade can take a number of hits before breaking equal to your Sentinel Level divided by 3, plus your powercasting modifier
