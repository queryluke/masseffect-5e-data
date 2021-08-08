---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/8/80/ME2_blood_pack_trooper.png/revision/latest/scale-to-width-down/305?cb=20140516115803
type: organic
unit: blood_pack
alignment: ce
profBonus: 2
ac: 11
hp:
  dieCount: 8
  dieType: 8
abilityScores:
  str: 11
  dex: 12
  con: 11
  int: 4
  wis: 4
  cha: 6
irv:
  res:
    - poison
savingThrows: false
senses: false
size: medium
skills: false
speed:
  walk: 40
entries:
  actions:
    - attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage:
        - {dieCount: '1', dieType: '6', mod: true, type: slashing}
      target: one
      id: claws
    - ref: weapon
      proficient: true
      id: m-3-predator
      weaponId: m-3-predator
    - ref: weapon
      proficient: true
      id: m-8-avenger
      weaponId: m-8-avenger
cr: '00250'
shields: false
---
