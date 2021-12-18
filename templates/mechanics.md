---
# possible paths
# species
# species/subspecies
# class
# class/[n-level]
# class/[n-level]/feat
# class/subclass
# class/subclass/[n-level]

# any mechanic that needs a selection should have
#   options: true
mechanics:
# Ability Score Increases
  # +X to a score
  - type: asi
    ability: int
    amount: 1
  - type: asi-choice
    options: true
    limit: [dex, str] #optional array
    amount: 1
    # results in
    # {type: asi, ability: (the selection), amount: 1, model: 'subspecies-options', id: 'cybernetic-augmentation-cerebral', path: 'species'}
# AC
  - type: natural-armor
    base: 13
    mod: dex
# IRVs
  #resistances
  - type: resistance
    damageType: enum or false #false used when the type is "special" for oddballs like "falling damage"
    note: string #optional, appends to damage type as a caveat or used to display text for special damage types
# Speeds
  # when rendering, 1) take the farther of identical speeds and/or the one without a note
  - type: speed
    speed: walk
    distance: 30
    note: string #note is optional.
# Attacks, Actions, Bonus Actions, and Reactions
  - type: enum [action, bonus-action, reaction, attack]
    recharge: enum [long, short, manual] # optional, 'manual' will display a "reload" button
    uses: integer # optional, required if recharge is used
    mod: enum [str, dex, con, int, wis, cha] # applied to damage, dc, etc
    damage:
      - dieCount: integer
        dieType: integer
        mod: boolean # whether to add the mod to the damage
        type: enum [damage types]
        bonus: integer # flat bonus
    proficient: boolean # whether or not to add the proficiency bonus to attack
    range: integer
    dc:
      base: integer (should almost always be 8...)
      mod: boolean # whether to add the mod to the dc
      save: enum [str, dex, con, int, wis, cha]
# Misc
  # Do not check for STR requirements of armor (to reduce speed by 10)
  - type: nullify-armor-str-restriction
---
