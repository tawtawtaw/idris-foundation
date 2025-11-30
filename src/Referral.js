import React from 'react';

const Referral = () => (
  <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
    <h1 style={{ textAlign: 'center', color: '#004080' }}>Refer Someone in Need</h1>
    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
      Do you know someone who could benefit from our programs? Whether it’s a child needing educational support or a patient requiring eye surgery, we’re here to help.
    </p>

    <h2>Who Can Be Referred?</h2>
    <ul>
      <li>Children from underserved communities needing school supplies or tuition support</li>
      <li>Patients with cataracts or other treatable eye conditions</li>
      <li>Families in need of basic healthcare or hygiene support</li>
      <li>Communities that could benefit from tree plantation or sustainability programs</li>
    </ul>

    <h2>How to Refer</h2>
    <p>
      Please email us with the following details:
    </p>
    <ul>
      <li>Full name of the person or family</li>
      <li>Location and contact information</li>
      <li>Brief description of their situation</li>
      <li>Any supporting documents or photos (optional)</li>
    </ul>

    <p>
      <strong>Email:</strong> referral@idrisfoundation.org<br />
      <strong>Phone:</strong> +44 20 1234 5678
    </p>

    <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
      Every referral is a chance to change a life. Thank you for being a bridge to hope.
    </p>
  </section>
);

export default Referral;