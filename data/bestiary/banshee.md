---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/e/eb/ME3_Banshee.png/revision/latest/scale-to-width-down/548?cb=20120319210941
type: synorg
unit: reaper
alignment: le
profBonus: 5
ac: 16
hp:
  dieCount: 30
  dieType: 10
abilityScores:
  str: 11
  dex: 16
  con: 11
  int: 12
  wis: 18
  cha: 20
irv: false
savingThrows:
  - dex
  - wis
senses:
  darkvision: 30
size: large
skills: false
speed:
  walk: 15
entries:
  features:
    barrier:
      uses: 3
      perDay: true
    innate-powercasting:
      mod: cha
      list: [{"id":charge, "perDay":at_will},{"id":nova, "perDay":at_will},{"id":warp, "perDay":6, "level":4}]
  actions:
    impale:
      attack: melee
      proficient: true
      range: 5
      dc: false
      mod: str
      damage: [{"dieCount":'3', "dieType":'8', "mod":true, "type":piercing}]
      target: one
    wail:
      dc: false
      save: false
      recharge: ['5','6']
  legendary:
    actions:
      cast-a-power: {"cost":3}
      impale-attack: {"cost":1}
      wail-attack: {"cost":2}
cr: '13000'
shields: false
---