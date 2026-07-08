import React from 'react'

const JournalInsights = () => {
  return (
    <div>

      <h2 className="fw-bold text-blue font-size-21">1. Title Page and Author Information</h2>
      <p>The first page of the manuscript should contain the following:</p>
      <ul>
        <li><b>Title of the article:</b> concise, informative, and relevant.</li>
        <li><b>Abstract:</b> A structured summary of 200–250 words.</li>
        <li><b>Five (5) keywords:</b> Specific to methodology, theory, and subject matter.</li>
        <li>
          <b>Contribution to Literature Statement (approx. 50 words):</b>  
          Clearly outlining how the paper advances existing knowledge.
        </li>
        <li>
          Provide full contributor details: names, institutional affiliations, ORCID IDs, and email addresses.
        </li>
        <li>
          Identify the corresponding author and provide a valid email address.  
          Decision emails will be sent to all authors.
        </li>
      </ul>

      <h2 className="fw-bold text-blue font-size-21">2. Abstract Guidelines</h2>
      <p>
        All submissions must include an abstract of 200–250 words summarizing the essential elements of the paper.
        For empirical economics papers, the abstract should include:
      </p>
      <ul>
        <li><b>Purpose of the study:</b> Brief context and objective.</li>
        <li><b>Data and methodology:</b> Datasets, models, or analytical tools used.</li>
        <li><b>Main findings:</b> Summary of key results.</li>
        <li><b>Conclusion/Implications:</b> Relevance to policy or academic research.</li>
      </ul>
      <p><b>Note:</b></p>
      <ul>
        <li>Write the abstract in clear, formal English.</li>
        <li>No citations, references, undefined abbreviations, or formulas.</li>
      </ul>

      <h2 className="fw-bold text-blue font-size-21">3. Keywords</h2>
      <p>Authors must provide exactly five (5) keywords immediately after the abstract. Keywords should:</p>
      <ul>
        <li>Accurately reflect the manuscript’s content.</li>
        <li>Enhance discoverability via academic databases.</li>
        <li>Include both subject-related and methodological terms.</li>
      </ul>

      <h2 className="fw-bold text-blue font-size-21">4. Contribution to the Literature</h2>
      <p>
        Include a concise 50-word statement emphasizing the manuscript's originality and significance.
      </p>

      <p><b>Example:</b></p>
      <blockquote>
        This study contributes to the empirical growth literature by examining regional convergence using 
        a dynamic panel threshold regression, offering new evidence on the role of institutional quality in 
        shaping growth trajectories in Southeast Asia.
      </blockquote>

      <h2 className="fw-bold text-blue font-size-21">5. Tables and Figures</h2>
      <p>
        Tables and figures should enhance the presentation of data, models, and findings. They must be clear, 
        accurate, and relevant.
      </p>

      <h3 className="fw-bold text-blue font-size-19">Placement and Numbering</h3>
      <ul>
        <li>Insert tables and figures immediately after the paragraph where they are first mentioned.</li>
        <li>Use sequential Arabic numbering (e.g., Figure 1, Table 2).</li>
        <li>Do not place all tables/figures at the end unless requested.</li>
      </ul>

      <h3 className="fw-bold text-blue font-size-19">Referencing Within Text</h3>
      <ul>
        <li>Refer to tables/figures explicitly before they appear.</li>
        <li><i>Example:</i> “As shown in Figure 1…” or “Table 2 presents…”</li>
        <li>Do not abbreviate “Figure” or “Table”.</li>
      </ul>

      <h3 className="fw-bold text-blue font-size-19">Formatting Guidelines</h3>

      <h4 className="fw-bold text-blue font-size-19">For Tables:</h4>
      <ul>
        <li>Use single spacing.</li>
        <li>Use 10-point font size.</li>
        <li>
          Each table must include:
          <ul>
            <li>A title above the table.</li>
            <li>A descriptive note or legend below, if needed.</li>
          </ul>
        </li>
        <li>Tables must be self-explanatory.</li>
      </ul>

      <h4 className="fw-bold text-blue font-size-19">For Figures:</h4>
      <ul>
        <li>Figures must be high-quality and preferably vector format.</li>
        <li>Captions must be placed below each figure.</li>
        <li>Ensure figures remain readable in grayscale.</li>
      </ul>

      <h3 className="fw-bold text-blue font-size-19">Additional Notes</h3>
      <ul>
        <li>Avoid repeating the same information in tables and figures.</li>
        <li>Combine similar results in a single figure/table when possible.</li>
        <li>Avoid decorative or overly complex designs.</li>
      </ul>

      <h2 className="fw-bold text-blue font-size-21">6. Footnotes</h2>
      <p>Footnotes must:</p>
      <ul>
        <li>Appear at the bottom of the same page.</li>
        <li>Be numbered consecutively.</li>
        <li>Use smaller font (9–10 pt).</li>
      </ul>

      <h2 className="fw-bold text-blue font-size-21">7. Reference Guidelines</h2>
      <p>
        IJMSSPH strictly adheres to the <b>APA referencing style</b>. Authors are responsible for ensuring 
        all citations are accurate and complete.
      </p>

      <h3 className="fw-bold text-blue font-size-19">In-Text Citations</h3>
      <ul>
        <li><b>One or two authors:</b>
          <ul>
            <li>Narrative: Ozturk and Acaravci (2010)…</li>
            <li>Parenthetical: (Ozturk & Acaravci, 2010)</li>
          </ul>
        </li>
        <li><b>Three or more authors:</b>
          <ul>
            <li>Narrative: Pesaran et al. (1999)…</li>
            <li>Parenthetical: (Pesaran et al., 1999)</li>
          </ul>
        </li>
        <li>Include page numbers for direct quotes.</li>
      </ul>

      <h3 className="fw-bold text-blue font-size-19">Reference List</h3>
      <ul>
        <li>Font: 11 pt, single spacing</li>
        <li>Alphabetical order by first author’s last name</li>
        <li>Hanging indent of 0.5 inches</li>
        <li>Ensure all cited works appear in the list</li>
      </ul>

      <h3 className="fw-bold text-blue font-size-19">Sample References (APA Style)</h3>
      <ul>
        <li>
          <b>Journal Article:</b>  
          Ozturk, I., & Acaravci, A. (2010). CO₂ emissions, energy consumption and economic growth in Turkey…
        </li>
        <li>
          <b>Book:</b>  
          Grossman, G. M., & Helpman, E. (1991). Innovation and growth in the global economy…
        </li>
        <li>
          <b>Book Chapter:</b>  
          Pesaran, H. M., & Shin, Y. (1999). Autoregressive distributed lag modelling approach…
        </li>
        <li>
          <b>Working Paper:</b> Barro, R. J. (1990). Government spending in a simple model…
        </li>
        <li>
          <b>Web Source:</b> World Bank. (2023). World Development Indicators…
        </li>
      </ul>

      <h2 className="fw-bold text-blue font-size-21">8. Funding Statement</h2>
      <p>Authors must disclose any financial support.</p>
      <p><b>Examples:</b></p>
      <ul>
        <li>This research was supported by the National Research Foundation…</li>
        <li>The authors received no financial support for this research.</li>
      </ul>

      <h2 className="fw-bold text-blue font-size-21">9. Institutional Review Board (IRB) and Ethics Statement</h2>
      <p><b>Examples:</b></p>
      <ul>
        <li>
          Approved by the Institutional Review Board of [University Name] 
          (Approval Code: ECON-IRB-2023-78…)
        </li>
        <li>Ethical review was waived…</li>
        <li>Not applicable.</li>
      </ul>

      <h2 className="fw-bold text-blue font-size-21">10. Submission Checklist</h2>
      <ul>
        <li>The manuscript is original and not under review elsewhere.</li>
        <li>The title page includes all required elements.</li>
        <li>Tables and figures are correctly formatted.</li>
        <li>The abstract is 200–250 words.</li>
        <li>References follow APA style.</li>
        <li>Funding and ethics statements are included.</li>
        <li>The manuscript is written in clear academic English.</li>
      </ul>
    </div>
  )
}

export default JournalInsights
