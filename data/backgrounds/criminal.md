---
startingCredits: 1500
mechanics:
  - id: criminal_specialty
    type: picker
    choices:
      items:
        - id: assassin
          mechanics:
            - type: profs
              subType: skill
              has:
                - acrobatics
                - stealth
        - id: blackmailer
          mechanics:
            - type: profs
              subType: skill
              has:
                - deception
                - intimidation
        - id: fence
          mechanics:
            - type: profs
              subType: skill
              has:
                - deception
                - persuasion
        - id: gambler
          mechanics:
            - type: profs
              subType: skill
              has:
                - deception
                - sleight-of-hand
        - id: gang_member
          mechanics:
            - type: profs
              subType: skill
              has:
                - intimidation
                - stealth
        - id: pickpocket
          mechanics:
            - type: profs
              subType: skill
              has:
                - sleight-of-hand
                - stealth
        - id: smuggler
          mechanics:
            - type: profs
              subType: skill
              has:
                - sleight-of-hand
                - vehicle-handling
        - id: thief
          mechanics:
            - type: profs
              subType: skill
              has:
                - perception
                - stealth
      count: 1
  - type: profs
    subType: tool
    has:
      - gaming-set
      - thieves-tools
---
