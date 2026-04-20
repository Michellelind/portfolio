import simaProduct from "@assets/sima_product_1776628985132.jpg";
import CaseStudyLayout, { CaseSection, CaseOutcomes, CaseOutcomeItem, CaseClosing, P } from "@/components/CaseStudyLayout";

export default function Sima() {
  return (
    <CaseStudyLayout
      eyebrow="SIMA Agustus · Jakarta, Indonesia · 2024–2025"
      title={<>The Problem Wasn't<br />the Competition</>}
      meta={[
        { label: "Role", value: "Technical Product Specialist" },
        { label: "Company age", value: "65 years" },
        { label: "Impact", value: "80% inbound lift" },
      ]}
      image={simaProduct}
      imageAlt="SIMA Agustus project"
      navItems={[
        "Problem",
        "Research",
        "Reframe",
        "Approach",
        "Outcomes",
        "Reflection",
      ]}
    >
      <CaseSection title="Problem">
        <P>
          SIMA Agustus has been building audiovisual and immersive experiences in Indonesia for 65 years.
          Clients include global names — BTS, Justin Bieber, Samsung — and installations ranging from
          Jakarta malls to the National Monument. The business was real. The craft was proven.
        </P>
        <P>
          But sales were getting harder. Competitors were slashing prices and the assumption inside the
          company was clear: this is a pricing problem.
        </P>
        <P>I wasn't so sure.</P>
      </CaseSection>

      <CaseSection title="Research">
        <P>
          I came in with no AV industry background and no inherited assumptions about how things should
          work. So I mapped the entire system — from the moment a potential customer first encountered SIMA
          to the moment they received a quote.
        </P>
        <P>
          What I found wasn't a pricing problem.{" "}
          <strong className="text-text-primary font-semibold">It was a front door problem.</strong>
        </P>
        <P>
          New customers interested enough to reach out were hitting a wall. The website was outdated and
          non-intuitive — it didn't reflect the caliber of work SIMA was actually delivering. Routing was
          broken; requests weren't reliably reaching the right internal teams. Some leads fell into a
          complete void, disappearing before anyone inside even knew they existed. The ones that survived
          had no structured follow-up process waiting for them.
        </P>
        <P>
          65 years of "this is how we do it" had made all of it invisible to the people inside. To me it
          was obvious.
        </P>
      </CaseSection>

      <CaseSection title="Reframe">
        <P>
          When I brought this to leadership the reception was open. Competitors were cheaper, but that was
          never SIMA's game. Premium product, proven quality, global clients. Price wasn't the lever. The
          real question was why interested customers weren't converting — and the answer had nothing to do
          with what things cost.
        </P>
        <P>
          <strong className="text-text-primary font-semibold">
            That reframe changed where we looked and what we built.
          </strong>
        </P>
      </CaseSection>

      <CaseSection title="Approach">
        <P>
          I redesigned the customer intake workflow end to end. I rebuilt the website to reflect SIMA's
          actual work — updated, intuitive, credible to a first-time visitor. I rebuilt the routing logic
          so every qualified inquiry reached the right internal team member. I closed the void. I created
          structure where there had been none.
        </P>
        <P>
          Every decision came back to the same question: what does a new customer experience when they
          first try to reach us, and where do we lose them?
        </P>
      </CaseSection>

      <CaseOutcomes title="Outcomes">
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">80% increase</strong> in qualified inbound
          engagement
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">100% of digital leads</strong> now reaching
          internal team members — the void was closed
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          Measurably improved first-time customer experience across the full intake journey
        </CaseOutcomeItem>
      </CaseOutcomes>

      <CaseSection title="Reflection">
        <P>
          They thought the threat was outside — competitors with lower prices. The real gap was inside — a
          system that was losing interested customers before price ever became a factor.
        </P>
        <CaseClosing>
          I didn't know the AV industry.<br />
          That turned out to be the point.
        </CaseClosing>
      </CaseSection>
    </CaseStudyLayout>
  );
}
