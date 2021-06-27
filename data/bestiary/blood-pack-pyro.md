---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/ec/Blood_Pack_Pyro.png/revision/latest/scale-to-width-down/348?cb=20100621053224
type: organic
unit: blood_pack
alignment: ce
profBonus: 2
ac: 11
hp:
  dieCount: 6
  dieType: 8
abilityScores:
  str: 13
  dex: 11
  con: 13
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
  walk: 35
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
cr: '01000'
shields: false
---
