---
trust_level: high
tags: [architecture, principles]
dependencies: [overview.md]
---
# Architecture Principles

## Separation of Concerns

Every VistaRoom feature architecture keeps rendering, data fetching, and state management in
distinct layers. This makes each layer independently testable.

## Progressive Enhancement

An architecture note should describe a baseline experience first, then layer in enhancements —
never require the enhancement for the feature to be usable at all.
