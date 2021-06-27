---
image: >-
  https://vignette.wikia.nocookie.net/masseffect/images/b/b6/ME3_Krogan_Warlord_Sentinel.png/revision/latest/scale-to-width-down/240?cb=20130227103010
type: organic
unit: blood_pack
alignment: ce
profBonus: 4
ac: 18
hp:
  dieCount: 8
  dieType: 8
abilityScores:
  str: 18
  dex: 15
  con: 22
  int: 11
  wis: 14
  cha: 12
irv:
  res:
    - necrotic
savingThrows:
  - con
  - str
senses: false
size: medium
skills:
  - athletics
speed:
  walk: 25
entries:
  features:
    - uses: 1
      perDay: true
      id: tech-armor
    - recharge: short
      id: rage
    - recharge:
        - '5'
        - '6'
      id: biotic-hammer
    - recharge:
        - '5'
        - '6'
      id: electrical-hammer
  actions:
    - ref: weapon
      proficient: true
      id: krogan-warhammer
      weaponId: krogan-warhammer
    - ref: weapon
      proficient: true
      id: m-300-claymore
      weaponId: m-300-claymore
cr: '05000'
shields: false
---
