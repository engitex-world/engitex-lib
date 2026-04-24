# Engitex Lib

> Shared TypeScript library used by [engitex-fe](https://github.com/engitex-world/engitex-fe) and [engitex-be](https://github.com/engitex-world/engitex-be)

This library contains common logic, utilities, constants, enums, and types shared between the frontend and backend of the Engitex platform. It is structured to be used as a Git submodule in both projects.

## Structure

- **`common/`** – Cross-cutting concerns: constants and shared utilities
- **`modules/`** – Business domain modules with contracts, DTOs, types, and enums

## Development

```bash
# Build the library
npm run build

# Lint and format
npm run checkup
```

The library is built as an ESM module with TypeScript declarations included.
