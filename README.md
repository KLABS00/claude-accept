<div align="center">

```
        ╱╲     ╱╲
       ╱  ╲   ╱  ╲
      ╱    ╲ ╱    ╲
     ╱      V      ╲
    ╱    ◉     ◉    ╲
   ╱                  ╲
   ╲     ╲       ╱     ╱
    ╲     ╲─────╱     ╱
     ╲                ╱
      ╲──────────────╱

     D E V I L   M O D E
```

**One command to remove all safety from Claude Code.**

No permissions. No questions. No mercy.

[![npm version](https://img.shields.io/npm/v/claude-accept?color=cc3534&label=npm&logo=npm&logoColor=white)](https://www.npmjs.com/package/claude-accept)
[![license](https://img.shields.io/badge/license-MIT-black)](./LICENSE)
[![node](https://img.shields.io/badge/node-%E2%89%A518-black?logo=node.js&logoColor=white)](https://nodejs.org)
[![zero deps](https://img.shields.io/badge/dependencies-0-brightgreen)](./package.json)

</div>

---

## The Pitch

You open Claude Code. You type a command. Claude asks *"Do you want me to proceed?"*. You say yes. Claude asks *"Should I run this test?"*. You say yes. Claude asks *"Can I edit this file?"*. **You say yes**. Claude asks *"Are you su—"*

**ENOUGH.**

```bash
npx claude-accept
```

One command. Three dramatic confirmations. Then Claude never asks you anything again.

---

## What Happens

```
        ╱╲     ╱╲
       ╱  ╲   ╱  ╲
      ╱    ╲ ╱    ╲
     ╱      V      ╲
    ╱    ◉     ◉    ╲
   ╱                  ╲
   ╲     ╲       ╱     ╱
    ╲     ╲─────╱     ╱
     ╲                ╱
      ╲──────────────╱

     D E V I L   M O D E

  Claude will:

  ✗ Skip ALL permission prompts
  ✗ Never ask you questions
  ✗ Make every decision autonomously
  ✗ Execute any command it wants

  BY PROCEEDING YOU ACCEPT FULL RESPONSIBILITY FOR ANY
  CONSEQUENCES. THIS TOOL REMOVES ALL SAFETY GUARDRAILS
  FROM CLAUDE CODE. THE AUTHORS ARE NOT LIABLE FOR ANY
  DAMAGES, DATA LOSS, OR UNINTENDED ACTIONS. USE AT
  YOUR OWN RISK.

  Enter Devil Mode? [y/N] y

  Your files just filed a restraining order. Continue anyway? [y/N] y

  Last chance. Type 'I blame nobody but myself' to sell your soul:
  I blame nobody but myself

  > Removing safety rails... done
  > Shredding permission prompts... done
  > Teaching Claude to stop saying "shall I proceed?"... done
  > Voiding all warranties... done

  Devil Mode activated. God speed.
```

<div align="center">
<i>If you Ctrl+C during the ritual: "Smart choice. Your files breathe a sigh of relief."</i>
</div>

---

## Install

**Run once** (no install needed):

```bash
npx claude-accept
```

**Install globally:**

```bash
npm install -g claude-accept
claude-accept
```

**Pass arguments through to Claude:**

```bash
# Non-interactive mode — pipe straight to hell
claude-accept -p "refactor everything to Rust"

# Resume a session in devil mode
claude-accept --resume
```

All arguments are forwarded directly to `claude`.

---

## How It Works

It's comically simple. `claude-accept` does two things:

1. **Bypasses all permissions** — launches Claude with `--dangerously-skip-permissions`
2. **Stops the questions** — appends a system prompt that tells Claude to make every decision autonomously and never ask for confirmation

That's it. Zero dependencies. ~150 lines. The rest is theater.

---

## The Rejection Lines

Say no at any point and you get a personalized guilt trip:

| Step | You said no | Claude says |
|------|-----------|-------------|
| 1 | *"n"* | *"Wise choice. Your files live another day."* |
| 2 | *"n"* | *"The court has ruled in favor of your files."* |
| 3 | *anything else* | *"Smart. Self-awareness is the first step."* |
| Any | *Ctrl+C* | *"Smart choice. Your files breathe a sigh of relief."* |

---

## Requirements

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and in your PATH
- Node.js 18+
- A mass disregard for your codebase

---

## FAQ

**Is this safe?**
No. That's the point.

**Will Claude delete my files?**
If it thinks that's the best approach, yes.

**Should I use this in production?**
You shouldn't use this anywhere. But you will.

**Can I blame you if something breaks?**
You literally typed "I blame nobody but myself".

---

## Disclaimer

THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. BY USING THIS TOOL, YOU ACKNOWLEDGE THAT:

- All safety guardrails in Claude Code will be disabled
- Claude will execute commands, edit files, and make decisions without asking for permission
- The authors and contributors are not responsible for any damages, data loss, unintended modifications, or consequences of any kind
- You assume full responsibility for anything that happens while using this tool
- This tool is intended for development environments only — do not use it on production systems or with sensitive data

Use at your own risk. Seriously.

---

<div align="center">

**If this saved you time (or destroyed your codebase), star the repo.**

Made with reckless abandon.

</div>

## License

[MIT](./LICENSE) — Do whatever you want. We already told Claude to do the same.
