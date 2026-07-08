import React from 'react'

const CopyrightPolicy = () => {
  return (
    <div>

      <h2 className="fw-bold text-blue font-size-21">Peer Review Policy</h2>
      <p>
        All manuscripts are peer-reviewed using the Double-Blind Review Process.  
        Author anonymity prevents any potential reviewer bias based on, for example, 
        an author’s country of origin or previous controversial work. 
        We also ensure that, to maintain our principles of academic integrity, 
        works authored by those with significant reputation are considered for publication 
        solely by the quality of the content of the work, and consider the reputation of 
        said author(s) to be incidental.
      </p>

      <p>
        All manuscripts are checked for plagiarism, be it duplicate or otherwise, under the guidance 
        of the standards set by the Committee on Publication Ethics.
      </p>

      <p>
        IJMSSPH uses Crossref’s Similarity Check tool as our means of screening content for plagiarism. 
        It should be noted that IJMSSPH is a member of CrossRef.
        <br />
        For further information about the Similarity Check tool, you can visit 
        Crossref's Similarity Check & Researchers page.
      </p>

      <h2 className="fw-bold text-blue font-size-21">Policies on Conflict of Interest, Human Rights, and Informed Consent</h2>

      <p>
        IJMSSPH is currently scheduled to join the Committee on Publication Ethics, and as such, 
        our publication processes are in line with the guidelines of COPE.
      </p>

      <p>
        Financial, non-financial, professional, contractual, or personal conflicts of interest are to be declared 
        by all authors involved in the development of any work considered for publication, 
        as well as declaring conflicts of interests of any co-authors.
      </p>

      <p><b>An important note:</b></p>
      <p>
        Authors are to declare instances wherein they are involved in any part of the development 
        of health interventions.
      </p>

      <p>
        If human or animal subjects were involved in the development of submitted works, a section declaring 
        approval from the Institutional Review Board (IRB) (or exemption) must be stated. 
        We advise this to be provided in the ‘methods’ section of the work. 
        In instances where research has been conducted by relevant industry organisations, 
        authors are recommended to seek advice from independent ethics boards for guidance, 
        and their reference as such must be provided in the ‘methods’ section of the work.
      </p>

      <p>
        Researchers, wherever possible, must obtain the consent of the participants for their inclusion 
        in studies and inform the participants of their right to opt-out of inclusion in the study. 
        In instances where such consent and information cannot be provided, such as the analysis of 
        Twitter postings, IRB approval must be obtained, and the criteria for such exemption as per 
        Eysenbach & Till (2001) must be detailed.
      </p>

      <h2 className="fw-bold text-blue font-size-21">References</h2>
      <ul>
        <li>
          Committee on Publication Ethics (COPE). (2015, November). 
          Flowcharts on how to handle common ethical problems. Retrieved from:  
          https://publicationethics.org/files/cope-publication-ethics-flowcharts-full-set.pdf
        </li>
        <li>
          Committee on Publication Ethics (COPE). (2011, March). 
          Flowcharts on how to handle common ethical problems. Retrieved from:  
          http://publicationethics.org/files/Code_of_conduct_for_journal_editors_Mar11.pdf
        </li>
        <li>
          Eysenbach G and Till JE (2001). Ethical issues in qualitative research on internet communities. 
          The BMJ, 323: 1103-1105
        </li>
      </ul>

    </div>
  )
}

export default CopyrightPolicy
