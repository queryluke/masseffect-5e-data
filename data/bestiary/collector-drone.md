---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/a/a3/Collector.png/revision/latest/scale-to-width-down/331?cb=20100130000709
type: organic
unit: collector
alignment: le
profBonus: 2
ac: 13
hp:
  dieCount: 7
  dieType: 8
abilityScores:
  str: 10
  dex: 10
  con: 10
  int: 8
  wis: 8
  cha: 8
irv: false
savingThrows:
  - dex
senses:
  darkvision: 30
size: medium
skills:
  - athletics
speed:
  walk: 30
  fly: 15
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '1', dieType: '6', mod: true, type: bludgeoning}
      target: one
      id: weapon-bash
    - ref: weapon
      proficient: true
      id: collector-assault-rifle
      weaponId: collector-assault-rifle
cr: '01000'
shields: false
---
