---
image: https://....
type: synorg # or organic or synthetic
unit: reaper # or one of the units
abilityScores:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 10
  cha: 10
ac: 10
entries:
  # features
  features:
    uses:
      uses: 3
    recharge:
      recharge:
        - 5
        - 6
    per-day:
      uses: 1
      perDay: true
  # actions
  actions:
    multiattack:
    m-8-avenger:
      ref: weapon
    frag-grenade:
      ref: grenade
      uses: 2
    impale:
      attack: melee
      range: 5
      target: one
      damage:
        dieCount: 3
        dieType: 8
      damage: piercing
      attackMod: str
    wail:
  # legendary actions
  legendary:
    text: The text that describes the banshees legendary actions
    actions:
      cast-a-power:
        cost: 3
      impale-attack:
        cost: 1
      wail-attack:
        cost: 2
  # reactions
  reactions:
    dodge:
alignment: ln
irv:
  imm:
    conditions:
      - prone
      - lifted
    damage:
      - force
  res:
    - necrotic
  vul:
    - radiant
savingThrows:
  - dex
  - wis
senses:
  darkvision: 20
size: large
skills:
  - acrobatics
speed:
  walk: 20
powercasting:
  mod: cha
  dc: 10
  # an innate example
  innate:
    - id: spell-id-1
      perDay: at-will
    - id: spell-id-2
      perDay: 6
      level: 4 # will need to retrieve the spell, check the level...if it doesn't match, indicate at a higher level
  # a leveled caster
  caster-level: 12
  caster-type: full # or half or third
  list:
    cantrips:
      - spell-id-1
    1st:
      - spell-id-2
    2nd:
      - spell-id-3
---