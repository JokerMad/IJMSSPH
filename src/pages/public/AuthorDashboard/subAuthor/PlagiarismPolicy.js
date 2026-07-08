import React from 'react'

const PlagiarismPolicy = () => {
  return (
    <div>

      <h2 className="fw-bold font-size-23">Plagiarism Policy</h2>

      <p>
        At the <b>International journal of Medical science studies and Public Health. (IJMSSPH)</b>, 
        we uphold the highest standards of academic integrity and rigor. 
        Plagiarism in any form is considered a serious breach of ethical conduct and is not tolerated 
        under any circumstances.
      </p>

      <h3 className="fw-bold text-blue font-size-21">1. Commitment to Academic Integrity</h3>
      <p>
        IJMSSPH maintains a zero-tolerance policy towards plagiarism. 
        We are committed to publishing only original, high-quality scholarly work. 
        To this end, all submitted manuscripts undergo a mandatory plagiarism screening 
        using the <b>iThenticate (Turnitin)</b> software.
      </p>

      <h3 className="fw-bold text-blue font-size-21">2. Screening Process</h3>
      <ul>
        <li>All manuscripts are checked for text similarity using iThenticate before peer review.</li>
        <li>A Turnitin similarity report is provided to authors along with editorial and peer review feedback.</li>
        <li>Manuscripts with excessive similarity or inadequate attribution will face editorial rejection.</li>
      </ul>

      <h3 className="fw-bold text-blue font-size-21">3. Editorial Actions Based on Similarity Index</h3>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th><b>Similarity Index</b></th>
            <th><b>Editorial Action</b></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Above 30%</td>
            <td>Rejected without the option of resubmission. Indicates excessive borrowing, poor citation, or unoriginal content.</td>
          </tr>
          <tr>
            <td>19–30%</td>
            <td>Returned to authors for major revision. Authors must improve citation clarity and paraphrasing.</td>
          </tr>
          <tr>
            <td>Below 19%</td>
            <td>Generally acceptable. Authors may be requested to make minor citation refinements.</td>
          </tr>
        </tbody>
      </table>

      <p><b>Note:</b> For manuscripts in the 19–30% range or below 19%, authors must:</p>
      <ul>
        <li>Carefully review paraphrased sections for accuracy and originality.</li>
        <li>Ensure complete and correct citation of all referenced sources.</li>
        <li>Submit a revised manuscript with an updated Turnitin report showing a similarity index below 19%.</li>
      </ul>

    </div>
  )
}

export default PlagiarismPolicy
