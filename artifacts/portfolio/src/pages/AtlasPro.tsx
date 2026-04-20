import atlasproArtifact from "@assets/atlaspro_artifact_1776629175950.png";
import CaseStudyLayout, { CaseSection, CaseOutcomes, CaseOutcomeItem, CaseClosing, P } from "@/components/CaseStudyLayout";

export default function AtlasPro() {
  return (
    <CaseStudyLayout
      eyebrow="AtlasPro AI · San Francisco, CA (Remote) · January 2026–Present"
      title={<>Finding What's<br />Worth Building</>}
      meta={[
        { label: "Role", value: "PM Intern → Competitive Intelligence Fellow" },
        { label: "Scale", value: "27,915 signals" },
        { label: "Status", value: "Features in progress" },
      ]}
      image={atlasproArtifact}
      imageAlt="AtlasPro AI — Impact vs Complexity Map"
      imageContain
      navItems={[
        "The Brief",
        "Where I Started",
        "Going Deeper",
        "Turning Signals Into Decisions",
        "What It Produced",
        "What This Was Really About",
      ]}
    >
      <CaseSection title="The Brief">
        <P>
          Most product briefs come with constraints — a problem to solve, a user to serve, a direction to
          explore. The brief I got at AtlasPro AI was different.
        </P>
        <P>
          <em className="text-text-primary">
            <strong className="font-semibold">
              Propose what to build next. It needs to have product market fit.
            </strong>
          </em>
        </P>
        <P>
          That was it. No prescribed method, no defined scope, no inherited research to build on. Just an
          early-stage AI startup in the location analytics space and an open question that the whole
          company's next move depended on.
        </P>
      </CaseSection>

      <CaseSection title="Where I Started">
        <P>
          I had no background in location or geospatial analytics. So before I could answer what to build,
          I had to understand the landscape well enough to ask the right questions.
        </P>
        <P>
          I conducted a full industry and competitive analysis — mapping the market, the key players, the
          business models, the regulatory environment, the technology constraints, the user habits, and the
          broader ecosystem dynamics. I considered every angle before deciding where to look next.
        </P>
        <P>
          The founder wanted to check if an outsider saw what she saw.{" "}
          <strong className="text-text-primary font-semibold">
            I came back with points she hadn't encountered.
          </strong>{" "}
          That told us both the research was working.
        </P>
        <P>
          It also told me the original scope was too broad. AtlasPro had been considering both location
          analytics and geospatial analytics as target markets. I proposed narrowing to geospatial analytics
          only — a more defensible, higher-signal opportunity. The founder agreed. Scope set.
        </P>
      </CaseSection>

      <CaseSection title="Going Deeper">
        <P>
          With the landscape understood and scope narrowed, I designed a targeted research phase to get
          closer to real user frustration — not polished feedback, not competitor marketing claims, but what
          people actually say online when nobody's packaging it for them.
        </P>
        <P>
          I determined the methodology myself. I identified 22 sources across 8 platform types —
          StackExchange, Reddit, GitHub, Discourse, Khoros, and others. I collected 27,915 posts, cleaned
          and deduplicated them to 26,982, and flagged 6,707 posts carrying frustration markers — 24.8% of
          the entire dataset. I ran NLP clustering and BERTopic topic modeling to surface 80+ topic clusters
          from the noise.
        </P>
        <P>
          <strong className="text-text-primary font-semibold">
            Every decision about what to collect, where to look, and how to interpret it was mine.
          </strong>
        </P>
      </CaseSection>

      <CaseSection title="Turning Signals Into Decisions">
        <P>
          Raw clusters aren't a product strategy. I mapped every cluster onto a two-dimensional impact
          versus complexity framework and built an interactive visualization the founding team could
          navigate — not a static deck, but a live decision-making tool showing where the
          highest-leverage opportunities lived relative to the effort required to build them.
        </P>
        <P>
          The founder could look at the map and see exactly which problems were worth solving first,
          grounded in real user signal rather than assumption.
        </P>
      </CaseSection>

      <CaseOutcomes title="What It Produced">
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">
            10 companies across 2 market sectors
          </strong>{" "}
          — comprehensive industry and competitive analysis, including points the founder hadn't previously
          surfaced
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">Scope narrowed from 2 markets to 1</strong>{" "}
          — recommendation accepted by the founder
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">27,915 posts collected</strong> — across 22
          sources and 8 platform types
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">80+ topic clusters</strong> — generated,
          labeled, and mapped
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">
            Feature prioritization framework
          </strong>{" "}
          — impact vs. complexity map built to guide product decisions
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">
            Promoted to Competitive Intelligence Fellow
          </strong>{" "}
          — from Product Management Intern, based on research quality and strategic depth
        </CaseOutcomeItem>
      </CaseOutcomes>

      <CaseSection title="What This Was Really About">
        <P>
          The brief was open-ended by design — that's the hardest kind. No playbook, no senior PM to check
          with, no predefined scope to stay inside.
        </P>
        <P>
          I designed the method, ran the research, challenged the scope, found what the insider had missed,
          and handed the founding team a map they could navigate by.
        </P>
        <CaseClosing>
          That's what I mean when I say<br />I find what's worth building.
        </CaseClosing>
      </CaseSection>
    </CaseStudyLayout>
  );
}
