import React from 'react'

const OpenSpecialIssues = () => {
  return (
    <div>
        <p>The following Special Issues are currently open for submissions: </p>
        <ol>
            <li>
                <h4 className="fw-bold text-blue font-size-21">[Title of Special Issue]</h4>
                <ul>
                    <li><b>Guest Editors:</b> [Name, Affiliation] </li>
                    <li><b>Scope:</b> [Brief description of the theme]</li>
                    <li><b>Submission Deadline:</b> [Date] </li>
                    <li><b>Publication Date:</b> [Expected publication timeline] </li>
                </ul>
            </li><br/>
            <li>
           <h4 className="fw-bold text-blue font-size-21"> [Title of Special Issue]</h4>
           <ul>
                    <li><b>Guest Editors:</b> [Name, Affiliation] </li>
                    <li><b>Scope:</b> [Brief description of the theme]</li>
                    <li><b>Submission Deadline:</b> [Date] </li>
                    <li><b>Publication Date:</b> [Expected publication timeline] </li>
                </ul>
            </li>
        </ol>
        <p>
        <b>Authors are encouraged to submit their research articles under these open Special Issues</b> following the standard manuscript submission guidelines. 
        </p>
    </div>
  )
}

export default OpenSpecialIssues