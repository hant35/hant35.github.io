#!/usr/bin/env python3
"""Parse vehicle entries from comma.ai vehicles file and output JSON."""

import json
import re

INPUT_FILE = "/Users/nguyenha/.cursor/projects/Users-nguyenha-Projects-CommaPilot/agent-tools/61eb19c4-becc-404a-b1b7-8ea2ca1de1ca.txt"
OUTPUT_FILE = "/Users/nguyenha/Projects/CommaPilot/vehicles.json"

BRAND_PATTERN = re.compile(r"^### (.+?) \(\d+\)$")
YEARS_PATTERN = re.compile(r"^\d{4}(?:, \d{4})*(?:–\d{4})?(?:, \d{4})*$")
DESC_PATTERN = re.compile(r"^openpilot upgrades your |^The .+ is a .+\. ")
SUPPORT_PATTERN = re.compile(r"^openpilot (requires|will work)")
HARNESS_PATTERN = re.compile(r"^car harness: (.+)$")


def parse_vehicles(content):
    lines = content.split("\n")
    vehicles = []
    i = 0
    current_brand = None

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Check for brand header
        brand_match = BRAND_PATTERN.match(stripped)
        if brand_match:
            current_brand = brand_match.group(1).strip()
            i += 1
            continue

        if not current_brand:
            i += 1
            continue

        # Skip known boilerplate lines that could be mistaken for model
        skip_prefixes = (
            "Support", "openpilot", "comma ", "$999", "car harness",
            "[Buy now]", "included", "30-day", "Don't love", "Note", "Some "
        )
        if any(stripped.startswith(p) for p in skip_prefixes) or not stripped:
            i += 1
            continue

        # Could be model: check next non-empty line is years
        j = i + 1
        while j < len(lines) and not lines[j].strip():
            j += 1
        if j >= len(lines):
            i += 1
            continue

        next_stripped = lines[j].strip()
        if YEARS_PATTERN.match(next_stripped):
            model = stripped
            years = next_stripped
            i = j + 1

            # Collect description (lines starting with openpilot/The until Support)
            desc_parts = []
            while i < len(lines):
                l = lines[i].strip()
                if l == "Support":
                    break
                if l and (l.startswith("openpilot upgrades your ") or
                         (l.startswith("The ") and "is a " in l and "." in l)):
                    desc_parts.append(l)
                i += 1
            desc = " ".join(desc_parts) if desc_parts else ""

            # Skip Support label, get support requirement
            support = ""
            if i < len(lines) and lines[i].strip() == "Support":
                i += 1
            while i < len(lines):
                l = lines[i].strip()
                if SUPPORT_PATTERN.match(l):
                    support = l
                    i += 1
                    break
                # Skip Note sections
                if l == "Note":
                    i += 1
                    while i < len(lines) and lines[i].strip() and not lines[i].strip().startswith("comma "):
                        i += 1
                    continue
                if l.startswith("comma ") or l == "$999":
                    break
                i += 1

            # Find harness (scan until next vehicle or next brand)
            harness = ""
            while i < len(lines):
                l = lines[i].strip()
                h_match = HARNESS_PATTERN.match(l)
                if h_match:
                    harness = h_match.group(1).strip()
                    i += 1
                    break
                if l.startswith("### "):
                    break
                # Next vehicle: non-empty line followed by years
                if l and i + 1 < len(lines):
                    k = i + 1
                    while k < len(lines) and not lines[k].strip():
                        k += 1
                    if k < len(lines) and YEARS_PATTERN.match(lines[k].strip()):
                        break
                i += 1

            vehicles.append({
                "brand": current_brand,
                "model": model,
                "years": years,
                "desc": desc,
                "support": support,
                "harness": harness,
            })
            continue

        i += 1

    return vehicles


def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    vehicles = parse_vehicles(content)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(vehicles, f, indent=2, ensure_ascii=False)

    print(f"Extracted {len(vehicles)} vehicles to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
