import React from 'react'
import { Link } from 'react-router-dom'

const AIPolicies = () => {
  return (
    <div>

      <h2 className="fw-bold font-size-23">AI Policies</h2>

      <p>
        The <b>International journal of Medical science studies and Public Health. (IJMSSPH)</b> 
        recognizes the increasing use of Artificial Intelligence (AI) and machine learning tools in 
        academic research and scholarly publishing. As generative AI technologies such as ChatGPT, Gemini, 
        and Claude become more accessible, IJMSSPH emphasizes the need to use these tools responsibly, 
        ethically, and transparently. This policy sets forth the journal’s official stance on the use of AI 
        by authors, reviewers, and editorial staff, in accordance with standards established by Elsevier and 
        the Committee on Publication Ethics (COPE).
      </p>

      <h3 className="fw-bold text-blue font-size-21">1. Use of AI Tools by Authors</h3>
      <p>
        Authors are permitted to use AI tools to assist in the preparation of their manuscripts, but this 
        must be done responsibly and with full transparency. Acceptable uses include language refinement, 
        grammar correction, formatting of references, and translation.
      </p>
      <p>
        AI tools must <b>not</b> be used to generate substantive content, conduct scientific reasoning, 
        interpret data, or replace the author’s intellectual contribution.
      </p>
      <p>
        All listed authors must be human. IJMSSPH does not accept AI tools or bots as credited authors, as they 
        cannot take responsibility for the work or provide accountability.
      </p>

      <h3 className="fw-bold text-blue font-size-21">2. Disclosure of AI Use</h3>
      <p>
        Authors must disclose any use of AI tools in their manuscript. This includes AI used for generating 
        text, analyzing data, translation, or code-related tasks.
      </p>

      <p>An example of an appropriate disclosure:</p>
      <blockquote>
        “The authors used ChatGPT (OpenAI, March 2025 version) to enhance the language and readability 
        of the manuscript. All outputs were reviewed and verified by the authors.”
      </blockquote>

      <p>
        Failure to disclose AI usage will be considered a violation of publishing ethics and may lead to 
        rejection or retraction.
      </p>

      <h3 className="fw-bold text-blue font-size-21">3. Author Responsibility and Accountability</h3>
      <p>
        Authors are fully responsible for the accuracy, originality, and integrity of their submitted work, 
        including content developed with AI. They must ensure AI outputs do not contain fabricated references, 
        plagiarism, errors, or bias.
      </p>
      <p>
        IJMSSPH reserves the right to investigate potential AI misuse, including predominantly AI-generated 
        manuscripts or undeclared AI content.
      </p>

      <h3 className="fw-bold text-blue font-size-21">4. Use of AI in Peer Review</h3>
      <p>
        Reviewers must uphold confidentiality and must not upload manuscript content to AI platforms. 
        AI tools must not be used to analyze, summarize, or evaluate manuscripts.
      </p>
      <p>
        If AI is used for minor non-confidential tasks (e.g., grammar editing), reviewers must disclose this 
        to the editorial team.
      </p>

      <h3 className="fw-bold text-blue font-size-21">5. Use of AI by Editorial Staff</h3>
      <p>
        IJMSSPH editorial staff may use AI for administrative tasks such as plagiarism detection, reference 
        formatting, or minor language editing. AI will not be used to make editorial decisions.
      </p>

      <h3 className="fw-bold text-blue font-size-21">6. Ethical Use and Prevention of Bias</h3>
      <p>
        All parties must ensure that AI-generated content does not introduce misinformation, bias, or 
        inappropriate material. AI must not replace expert academic judgment.
      </p>

      <h3 className="fw-bold text-blue font-size-21">7. Violations and Consequences</h3>
      <p>
        Misuse of AI will be treated as unethical conduct. Consequences may include:
      </p>
      <ul>
        <li>Rejection of the manuscript</li>
        <li>Retraction after publication</li>
        <li>Notification to affiliated institutions</li>
        <li>Suspension or ban from future submissions</li>
      </ul>
      <p>All violations will be investigated following COPE misconduct guidelines.</p>

      <h3 className="fw-bold text-blue font-size-21">8. Policy Review and Updates</h3>
      <p>
        This AI policy will be reviewed and updated periodically to reflect technological and ethical 
        developments in scholarly communication. IJMSSPH remains committed to academic integrity while 
        supporting responsible innovation.
      </p>

      <h3 className="fw-bold text-blue font-size-21">References</h3>
      <ul>
        <li>Elsevier (2023). Generative AI Policies for Journals.
             <Link to={"https://www.elsevier.com/about/policies-and-standards/generative-ai-policies-for-journals"} target='_blank' >Link</Link>
             </li>
        <li>COPE (2023). Position Statement on Authorship and AI Tools. <Link to={"https://publicationethics.org/guidance/cope-position/authorship-and-ai-tools"} target='_blank' >Link</Link></li>
        <li>COPE (2024). AI and Peer Review: Guidance Document. <Link to={"https://publicationethics.org/news/cope-publishes-guidance-on-ai-in-peer-review"} target='_blank' >Link</Link></li>
        <li>COPE (2023). Discussion Paper: Ethical Considerations in the Use of Generative AI. <Link to={"https://publicationethics.org/topic-discussions/artificial-intelligence-ai-and-fake-papers"} target='_blank' >Link</Link></li>
      </ul>

    </div>
  )
}

export default AIPolicies
