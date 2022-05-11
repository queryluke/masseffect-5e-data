---
level: 3
klass: engineer
name: Engineer's Efficiency
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
      klass: engineer
      isLearned: true
      atWill: 1
---
Starting at 3rd level, you're able to optimize a basic tech power. Choose one of the following
tech powers: Cryo Blast, Incinerate, or Overload. You always have this power prepared. You may cast a 1 tech point version
of this power without expending any tech points. If you cast the power at a high level, you must spend all tech points as normal.

You can prepare the advanced version of the selected power at the cost of 1 prepared power.

At 11th level, you can cast a 2 tech point version of this power without expending any tech points.

With 8 hours of programming your omni-tool, you can exchange the selected power with either Cryo Blast, Incinerate, or Overload.
