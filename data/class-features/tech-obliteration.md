---
level: 10
klass: soldier
subclass: engi-knight
mechanics:
  - type: augment
    value:
      model: soldier
      id: tech-avenger
      limit: [global-note]
    merge:
      moreInfo:
        additional:
          - model: class-features
            id: tech-obliteration
  - type: augment
    value:
      model: soldier
      id: tech-strike
      limit: [global-note]
    merge:
      moreInfo:
        additional:
          - model: class-features
            id: tech-obliteration
  - type: augment
    value:
      model: soldier
      id: tech-avenger
      limit: [other]
    merge:
      toggle:
        options:
          - {}
          - whenOn:
              - {}
              - type: resistance
                value: cold
          - whenOn:
              - {}
              - type: resistance
                value: fire
          - whenOn:
              - {}
              - type: resistance
                value: lightning
      moreInfo:
        additional:
          - model: class-features
            id: tech-obliteration
name: Tech Obliteration
---
At 10th level, your onboard AI has improved your omni-tool's power output for your strikes. Your Tech Strike damage dice will now double on critical hits.

Additionally, you do not need to spend short or long rests installing Tech Strike programs anymore as your AI has managed to master the omni-tool's minimum processing requirements. You now permanently have all three Tech Strike programs installed at once.

Your chosen Tech Strike Focus will now provide you the following additional benefit:

___Frostbite Strike___: You have resistance to cold damage

___Blazing Strike___: You have resistance to fire damage

___Storm Strike___: You have resistance to lightning damage

This above benefit does not require the B.E.C Field Tech Power to be active to use.
