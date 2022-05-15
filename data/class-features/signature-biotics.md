---
level: 18
klass: adept
name: Signature Biotics
mechanics:
  - type: model-choice
    label: 'Choose two powers'
    model: powers
    options: true
    known: true
    limits:
      - attr: level
        value: [1,2]
    hide: true
    isolated: true
    selections: 2
    append:
      type: 'power-resource'
      levels: [2]
      resource:
        reset: short
        id: signature-biotics
---
When you reach 18th level, you gain mastery over two powerful powers and can cast them with little effort. Choose
two 1st or 2nd-level biotic powers you know as your signature biotics. You can cast each of them once at 2nd level without
expending a power slot. When you do so, you can't do so again until you finish a short or long rest.

If you want to cast either power at 3rd-level or higher, you must expend a power slot as normal.
