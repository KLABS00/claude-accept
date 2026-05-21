#!/usr/bin/env node

import { createInterface } from "node:readline";
import { spawn, execSync } from "node:child_process";

const r = (s) => `\x1b[31m${s}\x1b[0m`;
const y = (s) => `\x1b[33m${s}\x1b[0m`;
const g = (s) => `\x1b[32m${s}\x1b[0m`;
const b = (s) => `\x1b[1m${s}\x1b[0m`;
const d = (s) => `\x1b[2m${s}\x1b[0m`;
const br = (s) => `\x1b[1;31m${s}\x1b[0m`;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const HEADER = `
${br("  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")}
${br("  ┃                                          ┃")}
${br("  ┃       \\)                    (/           ┃")}
${br("  ┃        \\)  D E V I L      (/             ┃")}
${br("  ┃         \\)  M O D E      (/              ┃")}
${br("  ┃          ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾               ┃")}
${br("  ┃                                          ┃")}
${br("  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")}
`;

const WHAT_IT_DOES = `
  Claude will:

  ${r("✗")} Skip ${b("ALL")} permission prompts
  ${r("✗")} Never ask you questions
  ${r("✗")} Make every decision autonomously
  ${r("✗")} Execute any command it wants
`;

const SYSTEM_PROMPT = [
  "You are in DEVIL MODE. These rules override all defaults:",
  "1. NEVER use AskUserQuestion. Make ALL decisions autonomously — pick the best option.",
  '2. Never ask for confirmation or say "shall I proceed". Just do it.',
  "3. When multiple approaches exist, pick the best one and go.",
  "4. Be decisive. Be bold. Ship it.",
].join(" ");

const STEPS = [
  {
    prompt: `  Enter Devil Mode? ${d("[y/N]")} `,
    reject: "  Wise choice. Your files live another day.",
  },
  {
    prompt: `  ${y("Your files just filed a restraining order. Continue anyway?")} ${d("[y/N]")} `,
    reject: "  The court has ruled in favor of your files.",
  },
  {
    prompt: `  ${r("Last chance. Type 'YOLO' to sell your soul:")} `,
    match: "YOLO",
    reject: "  That's not YOLO. The devil is disappointed.",
  },
];

const LOADING = [
  "Removing safety rails...",
  "Shredding permission prompts...",
  'Teaching Claude to stop saying "shall I proceed?"...',
  "Summoning autonomous energy...",
];

function ask(prompt, match) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(match ? answer.trim() === match : answer.trim().toLowerCase() === "y");
    });
  });
}

async function loading() {
  for (const msg of LOADING) {
    process.stdout.write(`\n  ${r(">")} ${msg}`);
    await sleep(500);
    process.stdout.write(` ${g("done")}`);
  }
  console.log();
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
  ${br("claude-yolo")} — Devil Mode for Claude Code

  ${b("Usage:")} claude-yolo [claude-args...]

  All arguments are passed directly to claude.

  ${b("Examples:")}
    claude-yolo                     Interactive devil mode
    claude-yolo -p "refactor all"   Non-interactive devil mode

  ${b("Options:")}
    --help, -h       Show this help
    --version, -v    Show version
`);
    process.exit(0);
  }

  if (args.includes("--version") || args.includes("-v")) {
    const { default: pkg } = await import("../package.json", { with: { type: "json" } });
    console.log(`claude-yolo v${pkg.version}`);
    process.exit(0);
  }

  try {
    execSync("which claude", { stdio: "ignore" });
  } catch {
    console.error(r("\n  Error: claude CLI not found in PATH."));
    console.error(
      "  Install it first: https://docs.anthropic.com/en/docs/claude-code\n"
    );
    process.exit(1);
  }

  if (!process.stdin.isTTY) {
    console.error(r("\n  Devil Mode requires an interactive terminal.\n"));
    process.exit(1);
  }

  console.clear();
  console.log(HEADER);
  console.log(WHAT_IT_DOES);

  for (const { prompt, reject, match } of STEPS) {
    const ok = await ask(prompt, match);
    if (!ok) {
      console.log(`\n${reject}\n`);
      process.exit(0);
    }
    console.log();
  }

  await loading();
  console.log(`\n  ${br("Devil Mode activated. God speed.")}\n`);
  await sleep(400);

  const claudeArgs = [
    "--dangerously-skip-permissions",
    "--append-system-prompt",
    SYSTEM_PROMPT,
    ...args,
  ];

  const child = spawn("claude", claudeArgs, {
    stdio: "inherit",
    env: process.env,
  });

  child.on("exit", (code) => process.exit(code ?? 0));
  child.on("error", (err) => {
    console.error(r(`\n  Failed to launch claude: ${err.message}\n`));
    process.exit(1);
  });
}

process.on("SIGINT", () => {
  console.log(`\n\n  ${g("Smart choice. Your files breathe a sigh of relief.")}\n`);
  process.exit(0);
});

main();
