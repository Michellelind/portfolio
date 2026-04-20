import cornellProduct from "@assets/cornell_product_1776629347654.png";
import CaseStudyLayout, { CaseSection, CaseOutcomes, CaseOutcomeItem, CaseClosing, P } from "@/components/CaseStudyLayout";

export default function ServiceNow() {
  return (
    <CaseStudyLayout
      eyebrow="Cornell MBA Consulting · Enterprise SaaS · 2025"
      title={<>The Problem Wasn't<br />the Product</>}
      meta={[
        { label: "Format", value: "4-person consulting team" },
        { label: "Audience", value: "Director of PM, Growth" },
        { label: "Data", value: "7,252 records across 4 platforms" },
      ]}
      image={cornellProduct}
      imageAlt="ServiceNow research data visualization"
      imageContain
      navItems={[
        "Question",
        "Data",
        "Insight",
        "Outcomes",
      ]}
    >
      <CaseSection title="The Question" id="question">
        <P>
          A major enterprise SaaS platform was seeing slower-than-expected adoption of its AI-native,
          low-code app building experience. The assumption in the market was that competing tools were
          winning on product.
        </P>
        <P>
          <strong className="text-text-primary font-semibold">
            The public data told a different story.
          </strong>
        </P>
      </CaseSection>

      <CaseSection title="What the Data Showed" id="data">
        <P>
          Across 7,252 records collected from LinkedIn, X/Twitter, and Reddit spanning four platforms, one
          finding stood out above everything else.
        </P>
        <P>
          The enterprise platform had{" "}
          <strong className="text-text-primary font-semibold">
            0% share of the vibe coding conversation online
          </strong>
          . Three key competitors each sat at 29–31%. Not a small gap — a complete absence.
        </P>
        <P>
          Meanwhile a keyword analysis of 746 LinkedIn posts showed the platform's most advanced AI feature
          at 2% of topic share versus Low Code at 21%. The most powerful capability in the product was
          barely being discussed — by anyone.
        </P>
        <P>
          <strong className="text-text-primary font-semibold">
            The gap wasn't product. It was awareness and positioning.
          </strong>
        </P>
      </CaseSection>

      <CaseSection title="The Insight That Changed the Framing" id="insight">
        <P>
          Organic practitioner posts averaged{" "}
          <strong className="text-text-primary font-semibold">8× more views</strong> than coordinated
          branded posts — 90 versus 11 average views. The platform's own voice was being outperformed by
          users talking about the product on their own terms.
        </P>
        <P>
          The implication was clear: the adoption problem wasn't that the product wasn't good enough. It
          was that the people who needed to know about its most powerful capability didn't know it existed.
        </P>
        <P>That reframe changed the entire strategic recommendation.</P>
      </CaseSection>

      <CaseOutcomes title="What We Delivered" id="outcomes">
        <CaseOutcomeItem>
          Actionable roadmap presented to{" "}
          <strong className="text-text-primary font-semibold">
            Director of Product Management for Growth
          </strong>
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          Analysis grounded in{" "}
          <strong className="text-text-primary font-semibold">7,252 records</strong> across 4 platforms
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          Competitive intelligence across{" "}
          <strong className="text-text-primary font-semibold">6,233 competitor records</strong>
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          Core recommendation:{" "}
          <strong className="text-text-primary font-semibold">
            solve the awareness gap before touching the product
          </strong>
        </CaseOutcomeItem>
      </CaseOutcomes>

      <CaseClosing>
        The data didn't confirm the hypothesis.<br />
        It replaced it.
      </CaseClosing>
    </CaseStudyLayout>
  );
}
