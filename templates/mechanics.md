---
# possible paths
# species
# species/subspecies
# class
# class/[n-level]
# class/[n-level]/feat
# class/subclass
# class/subclass/[n-level]

# models

# resource (e.g., x per rest)
resource:
  displayType: enum [heat, counter, checkbox] # default checkbox
  reset: enum [short, long, manual, off] # 'manual' will display a "reload" button, default long, "off" will have no toggles
  resetTo: enum [min, max] #optional, default min
  max: # optional, default is flat, 1 per
    type: enum [flat, mod, proficiency, omni-gel]
    value: any [integer for flat, enum for mod, null for proficiency]
    min: integer # optional, if there were ever a use case for min 2
  isolated: boolean # optional, default false # electrogenesis vs seeker swarm. egen needs uses that are combined, ss needs isolated

# bonus
bonus:
  type: enum [flat, mod, proficiency, level]
  value: integer, string, or null
  multiplier: 1

# damage

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
    selections: integer (default 1)
    # results in
    # {type: asi, ability: (the selection), amount: 1, model: 'subspecies-options', id: 'cybernetic-augmentation-cerebral', path: 'species'}
# Proficiencies
  - type: prof
    profType: enum [skill, weapon, armor, saving_throw, tool]
    value: enum [types of that prof]
    expertise: boolean
  - type: prof-choice
    profType: enum [skill, weapon, armor, saving_throw, tool]
    options: true
    limit: [types] #optional array
    selections: integer
    expertise: boolean
# AC
  - type: ac
    bonus: integer
  - type: natural-armor
    base: integer
    mod: enum [abilities]
# HP
  - type: hp
    bonus: @bonus
# IRVs
  #resistances
  - type: resistance
    damageType: enum or false #false used when the type is "special" for oddballs like "falling damage"
    note: string #optional, appends to damage type as a caveat or used to display text for special damage types
  - type: condition-immunity
    condition: enum or false #false used when the type is "special" for oddballs like "falling damage"
    note: string #optional, appends to damage type as a caveat or used to display text for special damage types
# Saving Throws, skill checks
  - type: saving-throw
    note: string
    effect: enum [advantage, disadvantage]
# Initiative
  - type: initiative
    effect:
      type: [advantage, disadvantage, flat, mod, proficiency]
      value: any
# skill checks
  - type: skill-check
    skill: enum [skills]
    effect:
      type: [advantage, disadvantage, flat, mod, proficiency]
      value: any
      note: string
# Speeds
  # when rendering, 1) take the farther of identical speeds and/or the one without a note
  - type: speed
    speed: enum [walk, fly, burrow, swim, climb]
    distance: integer
    note: string #note is optional.
# Attacks, Actions, Bonus Actions, and Reactions
  - type: enum [action, bonus-action, reaction, attack, other] # simply indicates where to render on the character sheet
    resource: @resource #optional, default null
    range:
      short: integer (0 = self, touch = 1)
      long: integer (0 = self, touch = 1)
    attack: # optional, renders attack attributes
      proficient: boolean # optional, whether or not to add the proficiency bonus to attack, damage, etc
      mod: enum [str, dex, con, int, wis, cha] # optional
    damage:
      - dieCount: integer (0 = special)
        dieType: integer
        mod: enum [abilities]
        type: enum [damage types]
        bonus: @bonus
    dc:
      base: integer # default = true
      proficient: boolean # default = true
      mod: enum [str, dex, con, int, wis, cha] # whether to add the mod to the dc
      save: enum [str, dex, con, int, wis, cha]
    notes:
      - string # optional, appends to damage type as a caveat or used to display text for special damage types
    shortDesc: string # optional
    component: string # for pre-compiled components
# Powers
  - type: power
    powerId: string
    resource: @resource
    mod: enum [abilities]
  - type: power-choice
    options: true
    limit:
      type: enum [biotic, tech, combat]
      level: enum [0, 1, 2, 3, 4]
    resource: @resource
    selections: integer # optional, default 1
    mod: enum [abilities]
# Misc
  # Do not check for STR requirements of armor (to reduce speed by 10)
  - type: nullify-armor-str-restriction
  - type: regain-all-hit-dice
  - type: feat-choice
    options: true
  - type: starting-equipment
    equipmentType: enum [weapon, armor, omni-gel, medi-gel, hw-charges, tool]
    value: string or int
  # appends, in theory for bonus actions that increase damage, to hit, etc
  - type: append-note
    model: enum [weapon, power]
    note: string
  - type: append-damage
    model: weapon
    damage: @damage
# Unique
  - type: ardat-yakshi-addiction
  - type: ardat-yakshi-stave-off
  - type: ardat-yakshi-mating
  - type: avatars-inspiration
  - type: twice-as-bright
# senses
  - type: sense
    sense: enum [senses]
    distance: integer
    note: string
---


Display (Attacks, Actions, Bonus Actions, Reactions)
______________________________________________________________________________________
| | $name |           [ $range ]  [ $attackHit / $dc ]         [ $damage ]  [$notes] |
| | $properties OR $range-on-mobile |
| | $shortDesc or $desc |
| | $properties-on-mobile |                                            [ $resource ] |
______________________________________________________________________________________

Display Resource

Heat
| [$reload-if-manual] [progress-bar-md-and-up] [$fire] |
|                     [$current] / [$max]              |

Counter
| [$minus] [$current] / [$max] [$plus] [$reset-if-manual]|

Checkbox
| [$checkboxes] [if reset === short || long ( / [$reset]) else [$reset-button] ]|
