---
level: 3
klass: explorer
subclass: path-of-cyber
mechanics:
  - type: model-choice
    label: 'Choose one power'
    model: powers
    options: true
    limits:
      - attr: id
        value: [cryo-blast,incinerate,overload]
    hide: true
    append:
      klass: explorer
      alwaysCastable:
        type: progressive
        limit: explorer
        value:
          3: 1
  - type: advancements-choice
    options: true
    limit:
      valueLookup:
        model: class-features
        id: tech-ace
name: Tech Ace
---
At 3rd level, your tools are calibrated enough that you can rely on them without fear. Choose one power between
Incinerate, Cryo Blast and Overload. You always have this power prepared. You may cast the 1 tech point version of that
power without expending a 1st level power slot. This power is hereafter known as your Tech Ace.
When you receive the 10th level improvement to your cantrips, you can also select an advancement for your Tech Ace
