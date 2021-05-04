---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/1/16/ME3_Cerberus_Atlas.png/revision/latest/scale-to-width-down/700?cb=20120322140845
type: synthetic
unit: cerberus
alignment: 'n'
profBonus: 5
ac: 20
hp:
  dieCount: 14
  dieType: 10
abilityScores:
  str: 20
  dex: 10
  con: 20
  int: 18
  wis: 10
  cha: 9
irv:
  conImm:
    - blinded
    - deafened
    - grappled
    - paralyzed
    - petrified
    - poisoned
    - stunned
  damImm:
    - poison
    - psychic
  res:
    - bludgeoning
    - piercing
    - slashing
  vul:
    - lightning
savingThrows:
  - str
  - int
senses:
  darkvision: 24
size: large
skills: false
speed:
  walk: 15
entries:
  features:
    grenades:
      list: [{"id":smoke, "mark":grenade, "uses":5}]
  actions:
    smash:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'3', "dieType":'8', "mod":true, "type":bludgeoning}]
      target: one
    mass-accelerator-cannon:
      attack: ranged
      proficient: true
      range: 300
      dc: false
      mod: dex
      damage: [{"dieCount":'5', "dieType":'8', "mod":true, "type":radiant}]
      target: one
    rocket-launcher:
      dc: false
      save: false
      recharge: ['5','6']
  legendary:
    eject:
      cost: 3
    mass-accelerator-cannon-attack:
      cost: 1
    smash-attack:
      cost: 1
cr: '14000'
shields:
  capacity: 50
  regen: 5
---
