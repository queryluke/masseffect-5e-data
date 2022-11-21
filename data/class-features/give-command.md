---
level: 3
klass: tracker
subclass: beast-master
mechanics:
  - type: global-note
    subType: action
    value: Command Dice (1d8)
    moreInfo:
      model: class-features
      id: give-command
  - type: model-choice
    options: true
    model: commands
name: Give Command
---
As a commander of man and beast, you are able to give orders to not only your beast, but also your allies.

Starting at 3rd level, you gain 4 Command Dice, which are d8s. Choose 3 Commands from the options below. You learn
these Commands, and you can use them if the described trigger occurs during combat.

If a command requires a saving throw from the target, the DC is 8 + your proficiency bonus + your Intelligence modifier
(Synthetic Only) or your Charisma modifier (Organic).

You regain all Command dice at the end of a short rest.

<me-edge-list id="commands" />
