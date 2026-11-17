# REALITY.md: what exists now

- Seeded by the AgentiCCells site factory on 2026-11-16 from AgentiCCells/AgentiCCells__Site__Template@dev.
- Its live state is recorded in requests/2026-11-16__jose-bota/status.json in AgentiCCells__Site__Factory.

## 2026-11-16, by site@AgentiCCells.jose, at José Bota's word

Live as of v0.1.6 (commit ec348f5), checked on the live address:

- The home page (`src/index.html`) is one self-contained page, "The Flow": every section of the site drawn as nodes on a wire. José chose it. It has CSS motion and a background that answers the pointer through `src/assets/grid.js`, the site's only script; the page works without it, and all motion is off under reduced motion.
- Contact details are published: the email and LinkedIn address José supplied on 2026-11-16. Nothing else.
- The home page links José's command centre and team page on the Web Summit site, at his word.
- The four kinds of freelance work are confirmed by José (2026-11-16), so they are no longer marked as a proposal.
- Removed at José's word: his quoted words about the work he wants; the sentence saying he is looking for work; the placeholder about roles, location and working pattern.
- `photos-and-videos/` and `agents/` remain as pages. `work/`, `how-he-works/` and `for-you/` hold no content: they forward to the matching section of the home page.
- Four other designs (The Trace, The Fact Sheet, The Arena, First Pass) and a comparison page were built and released in v0.1.3 and v0.1.4, then removed in v0.1.5 at José's word ("leave this design only"). They are in the git history.

- Released after v0.1.6, at José's word: the home page's "Point your agent at this site" section as four boxes was already in v0.1.6; the restyled buttons, the agent roles as names with a line each, and this record went out in the release that carries this line.

- After an audit asked for by José: the home page says each thing once. "How he works" and the agent team are one section, contact comes before the section for agents and the sources, and the home page has no photos and videos section until there is media (the `photos-and-videos/` page stays). No fact was removed.

- The home page ends on "Get in touch" (one line, two buttons). The sources are small print in the footer, as six links without their notes; every source mark still points to them. What each source supports is in `index.md`.

- The home page leads with the Web Summit work and the agent team; its three figures are 14 agents, 13 running and 277 commits. The two one-day apps are one compact section further down. The two "for you" boxes are lists of four items.

- After a design review asked for by José: the header is only the section buttons; one line replaces the three figure boxes; the agent team and "Web Summit: the channels" share one box; "How he works" sits on a full-width band; the two apps are two lines each; and "What he can do for you" is one list of four. The detail of Hack the Agent (its levels, what it shows, the newsroom's review) is in `index.md` only.

- The two one-day apps have no section on the home page: they are two links under "He builds fast". Their description is in `index.md` only. The 14 agents and 277 commits are stated once, inside the agent team box.

- After an independent review by a fresh agent: one call to action under the name in place of two that led to the same list, and the pipeline's arrows and connectors corrected on phones.

- The home page is written in the first person, at José's word. `index.md`, `llms.txt` and the agents page stay in the third person, since agents read them.

- The home page says where José works now (voicedebrief.ai, itwithus.com and promptugal.news) and names RiskMandate as the startup team he was with at Web Summit, with a link. All three were supplied by José on 2026-11-17; José gave his roles: co-founder and developer of VoiceDebrief, co-founder of ITwithUs, developer at PrompTugal.news. The line for ITwithUs is José's own description of the company he co-founded. This agent later opened voicedebrief.ai, itwithus.com and promptugal.news; none names him on its front page. riskmandate.ai stayed refused by the session's network policy.

- The home page says José is based in the south of Portugal, has two years in AI development, works in English, Portuguese, Spanish and French, and lists the tools he uses (all supplied by José, 2026-11-17; Lovable is from the newsroom review).

- "Use with AI" on the home page is one action, "Get the prompt", leading to a short prompt on `agents/` that a hirer pastes into an AI assistant. The instructions for José's own agents and for site editors sit lower on that page, marked as being for maintainers.

- Two photos, supplied by José on 2026-11-17, in `src/media/photos/`: his portrait (cropped; its metadata removed) and a photo of him alone at Web Summit Lisbon 2026, beside the Web Summit sign (metadata removed). A crop of the main stage stood in that place in v0.1.16 to v0.1.18. A photo of José with the RiskMandate team (five other people, name badges blurred) was live in v0.1.14 and v0.1.15 on José's word, and was taken down at his word after a check against Dinis's rules: the others' agreement is not recorded, and images here are CC BY 4.0. That file remains in the git history.

- The Web Summit section is headed "I was with RiskMandate at Web Summit 2026", with the two figures on the left and the team photo as a small box on the right. "Where I work now" is three compact boxes.

- The instructions for site editors on `agents/` describe the site as it now is. Their list of files an editor may change is as the factory wrote it (`src/`, one field of `hub.json`, `README.md`); this file has been updated at José's word, and whether editors may change it freely is for Dinis Cruz to say.

- José tested the prompt on `agents/` on 2026-11-17. Claude answered from the site but could not see the rules in `llms.txt`; ChatGPT, as he ran it, could not open the site at all. The prompt now carries its three rules itself and points at `index.md` as well, and the page gives a second prompt for an assistant that cannot open web pages. The site answers both assistants' readers; the new prompts have not been tested in an assistant.

Does not exist:

- No video, and no screenshots of his apps.
- No sgit vault (the factory skipped that step).
- No preview environment, and `dev` is not a protected branch: a push to `dev` is a release.

Not checked by this agent: José's LinkedIn address and the two lovable.app links (the session's network blocks those hosts), and whether `#stand` opens the stand section of the command centre.

The agent name `site@AgentiCCells.jose` follows the convention on AgentiCCells__Site__Yiheng-Wang; José's brief left the name from Dinis unfilled.
