// Parsec Cloud (https://parsec.cloud) Copyright (c) BUSL-1.1 2016-present Scille SAS

import type { KnipConfig } from "knip";

// Knip configuration
const config = {
  tags: ["-lintignore"],
  // Exclude the following checks from the report
  // TODO: Fix code base to enable these checks
  exclude: [
    "dependencies",
    "duplicates",
    "exports",
    "files",
    "types",
    "unlisted",
  ],
} satisfies KnipConfig;

export default config;
