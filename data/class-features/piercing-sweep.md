---
level: 15
klass: soldier
subclass: migrant-marine
mechanics:
  - type: augment
    value:
      model: soldier
      id: tactical-sweep
      limit: [powers]
    merge:
      merge:
        notes:
          - 'Targets up to {{ intMod }} targets'
          - 'Learn damage resistances, immunities, vulnerabilities'
  - type: augment
    value:
      model: soldier
      id: tactical-sweep
      limit: [bonus-action]
    merge:
      type: other
  - type: global-note
    subType: action
    value: 3x Vulnerability
    moreInfo:
      model: class-features
      id: piercing-sweep
name: Piercing Sweep
---
At 15th level, you don't need to spend a bonus action to switch targets with Tactical Sweep. Additionally, when you use
Tactical Sweep, you learn any damage immunities, damage resistances and vulnerabilities that your targets have.
Against targets marked by Tactical Sweep, vulnerability triples the damage they receive instead of doubling it.
