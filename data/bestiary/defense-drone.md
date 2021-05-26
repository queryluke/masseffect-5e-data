---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/e0/Info_Drone.png/revision/latest/scale-to-width-down/531?cb=20100908213419
type: synthetic
unit: mech
alignment: nn
profBonus: 2
ac: 14
hp:
  dieCount: 6
  dieType: 6
abilityScores:
  str: 15
  dex: 10
  con: 14
  int: 12
  wis: 10
  cha: 7
irv:
  conImm:
    - poisoned
  damImm:
    - poison
    - psychic
  vul:
    - lightning
savingThrows: false
senses: false
size: small
skills: false
speed:
  fly: 30
entries:
  actions:
    bash:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'1', "dieType":'8', "mod":true, "type":bludgeoning}]
      target: one
cr: '00500'
shields:
  capacity: 5
  regen: 5
---
