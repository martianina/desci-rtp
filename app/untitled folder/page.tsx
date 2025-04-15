export const metadata = {
  title: 'Privacy Policy',
  description: 'Details how we collect, use, and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="prose dark:prose-invert max-w-4xl mx-auto py-8 px-4">
      <h1>Privacy Policy</h1>
      <p><em>Last updated: April 15, 2025</em></p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal data that you voluntarily provide to us, such as:
      </p>
      <ul>
        <li>Your name and email address (e.g., if you subscribe to our newsletter or submit a project)</li>
        <li>Project details and associated content you submit</li>
        <li>Technical and usage data from your device (e.g., IP address, browser type, pages visited)</li>
      </ul>

      <h2>Legal Basis for Processing</h2>
      <p>
        Under the General Data Protection Regulation (GDPR), we process your personal data on the following legal bases:
      </p>
      <ul>
        <li><strong>Consent</strong> – when you explicitly opt in (e.g., to receive email updates)</li>
        <li><strong>Legitimate interest</strong> – to maintain and improve the functionality of the site</li>
        <li><strong>Legal obligation</strong> – where required to comply with law</li>
      </ul>

      <h2>Use of Your Information</h2>
      <p>
        We use your personal data to:
      </p>
      <ul>
        <li>Respond to inquiries and submissions</li>
        <li>Display and manage community-submitted projects</li>
        <li>Improve our site and understand usage patterns</li>
        <li>Send updates or newsletters, where you have opted in</li>
      </ul>
      <p><strong>We do not sell or rent your personal data.</strong></p>

      <h2>Data Retention</h2>
      <p>
        We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected,
        including any legal, accounting, or reporting requirements.
      </p>

      <h2>Data Storage and Transfer</h2>
      <p>
        Your data may be stored or processed using:
      </p>
      <ul>
        <li>Google Workspace (Sheets, Forms)</li>
        <li>MailerLite (for newsletters)</li>
        <li>Vercel (for deployment and analytics)</li>
      </ul>
      <p>
        Some of these services may involve transfers of personal data outside the European Economic Area (EEA). We ensure
        appropriate safeguards are in place for such transfers, such as standard contractual clauses.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We use trusted third-party service providers for functionality and analytics. These providers may collect anonymized
        or aggregated data and operate under their own privacy policies.
      </p>

      <h2>Your Rights (GDPR)</h2>
      <p>
        If you are located in the EU or UK, you have the right to:
      </p>
      <ul>
        <li>Access your personal data</li>
        <li>Correct inaccuracies in your personal data</li>
        <li>Request deletion of your data ("right to be forgotten")</li>
        <li>Restrict or object to processing</li>
        <li>Withdraw consent at any time</li>
        <li>Lodge a complaint with a supervisory authority</li>
      </ul>
      <p>
        To exercise these rights, contact us at: <strong>privacy@optilex.io</strong>
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time to reflect changes in our practices. The updated version will always
        be posted on this page with a new revision date.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this privacy policy or our handling of your data, contact us at:
      </p>
      <p>
        <strong>Optilex LLC</strong><br />
        privacy@optilex.io<br />
        Raleigh, NC
      </p>
    </div>
  )
}
