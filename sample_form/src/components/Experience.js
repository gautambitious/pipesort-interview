import React, {useState} from "react";

export const Experience = ({nextStep, prevStep}) => {
    const [resume, setResume] = useState("");
    const [skills, setSkills] = useState("")
    const [experience, setExperience] = useState("")
    const saveExperience = (event) => {
        event.preventDefault();
        const expData = {
            resume: resume,
            skills: skills,
            experience: experience
        };
        console.log(expData);
        nextStep();
    }
    return (
        <main className="pa4 black-80 shadow-1 mt3">
            <h1 className="measure center ph5">Experience</h1>
            <form className="mt3" id="basic-form">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">Link to Resume</label>
                        <input onChange={(event) => setResume(event.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100" id="resumelink" type="url" placeholder="" />
                    </div>
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">Skills</label>
                        <textarea onChange={(event) => setSkills(event.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100" type="text" id="skills"/>
                    </div>
                    <div className="mt2">
                        <label className="db fw6 lh-copy f6">Past work experience</label>
                        <textarea onChange={event => setExperience(event.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100" type="text" id="experience"/>
                    </div>
                </fieldset>
                <div>
                    <input value="Back" type="submit" onClick={prevStep} className="grow pointer b--solid b--black-20 bg-white black pa2 b mr3"/>
                    <input value="Save" type="submit" onClick={saveExperience} className="grow pointer b--solid b--black-20 bg-white black pa2 b"/>
                </div>
            </form>
        </main>
    );
}