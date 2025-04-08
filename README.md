# Better Auth + RONIN

[![tests](https://img.shields.io/github/actions/workflow/status/ronin-co/better-auth/validate.yml?label=tests)](https://github.com/ronin-co/better-auth/actions/workflows/validate.yml)
[![code coverage](https://img.shields.io/codecov/c/github/ronin-co/better-auth)](https://codecov.io/github/ronin-co/better-auth)
[![install size](https://packagephobia.com/badge?p=@ronin/better-auth)](https://packagephobia.com/result?p=@ronin/better-auth)

A [Better Auth adapter](https://www.better-auth.com/docs/concepts/database#adapters) for storing session data in [RONIN](https://ronin.co/) with ease.

## Usage

```typescript
import { betterAuth } from 'better-auth';
import { ronin } from "@ronin/better-auth";

const auth = betterAuth({
  database: ronin(),
  // ...
});
```

## Testing

Use the following command to run the test suite:

```
bun test
```
