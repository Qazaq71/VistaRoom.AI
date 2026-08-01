---
trust_level: medium
tags: [context, retrieval]
dependencies: []
---
# Context Intelligence Notes

## Section Retrieval

Context retrieval for an architecture note should pull only the sections relevant to the feature
under discussion, not entire documents, to keep the reviewer's context budget small.

## Token Budgeting

A deterministic token-budget approximation is enough for an internal architecture note; a full
tokenizer is not required at this stage.
