import wdProduct from "@assets/wd_product_1776628871620.png";
import CaseStudyLayout, { CaseSection, CaseOutcomes, CaseOutcomeItem, CaseClosing, P } from "@/components/CaseStudyLayout";

export default function WesternDigital() {
  return (
    <CaseStudyLayout
      eyebrow="Western Digital · SanDisk Flash Memory · Milpitas, CA · 2022–2024"
      title={<>From Personal Frustration<br />to Team Infrastructure</>}
      meta={[
        { label: "Role", value: "Firmware Validation Engineer" },
        { label: "Team", value: "65 engineers" },
        { label: "Impact", value: "$450K annual savings" },
      ]}
      image={wdProduct}
      imageAlt="Western Digital project"
      navItems={[
        "The Moment I Noticed",
        "What I Did About It",
        "The Resistance I Had to Navigate",
        "What It Produced",
        "What This Was Really About",
      ]}
    >
      <CaseSection title="The Moment I Noticed">
        <P>
          Test runs at Western Digital could take anywhere from 5 minutes to 12 hours. Nobody knew when
          they'd finish. So engineers did what engineers do — they context-switched, checked back repeatedly,
          lost their train of thought, and accepted it as part of the job.
        </P>
        <P>I did the same thing. Until I stopped and asked why.</P>
        <P>
          There was no technical reason this had to be manual. The technology to solve it existed. So I
          asked around, and found something more interesting than a missing tool. Nobody was complaining.
          They'd just built their entire working rhythm around the uncertainty — context-switching, checking
          back, losing focus — without ever naming it as a problem worth solving.{" "}
          <strong className="text-text-primary font-semibold">The workaround had become the workflow.</strong>
        </P>
      </CaseSection>

      <CaseSection title="What I Did About It">
        <P>
          I built it for myself first. A lightweight Python notification tool that would alert me when a
          test completed — nothing more. If it didn't work for me, it wasn't worth proposing to anyone else.
        </P>
        <P>
          It worked. So I brought it to a small pilot group and watched how they used it — what broke, what
          they actually needed versus what I assumed they needed. I iterated. I offered one-on-one setup
          help. I made it easy to adopt without disrupting anyone's existing workflow — important in an
          environment where projects ran on 2-year cycles and teams were resistant to mid-cycle changes.
        </P>
        <P>
          When the results were clear, I brought it to the project lead.{" "}
          <strong className="text-text-primary font-semibold">Not as a proposal. As a proof.</strong>
        </P>
      </CaseSection>

      <CaseSection title="The Resistance I Had to Navigate">
        <P>
          The team's hesitation wasn't irrational. A 2-year validation cycle creates real risk aversion —
          nobody wants to introduce instability into a process that's already running. So I didn't ask for
          permission to build it. I built it, proved it, and let the pilot results make the case. By the
          time I presented to the full 65-person team, the question wasn't whether to adopt it — it was why
          they hadn't had it sooner.
        </P>
      </CaseSection>

      <CaseOutcomes title="What It Produced">
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">30% reduction</strong> in validation cycle
          time for the pilot team
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">$450K</strong> in annual savings from
          recaptured engineering hours
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">65-person team adoption</strong> — engineers,
          lab technicians, and product leads
        </CaseOutcomeItem>
        <CaseOutcomeItem>
          <strong className="text-text-primary font-semibold">Top 3 Innovation of 2023</strong> among all
          65 employees
        </CaseOutcomeItem>
        <CaseOutcomeItem>Still running after I left</CaseOutcomeItem>
      </CaseOutcomes>

      <CaseSection title="What This Was Really About">
        <P>
          The tool wasn't complicated. What was complicated was seeing a problem that nobody had thought to
          name — and deciding it was worth naming.
        </P>
        <CaseClosing>That's the instinct I bring into every system I work in.</CaseClosing>
      </CaseSection>
    </CaseStudyLayout>
  );
}
