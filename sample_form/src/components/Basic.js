import React, {useState, Component} from "react";

class Basic extends Component
{

    render() {
        return (
          <main className="pa4 black-80">
              <h1 className="measure center">Internship Application</h1>
              <form className="" id="basic-form">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <div>
                      <label className="db fw6 lh-copy f6">First Name</label>
                      <input className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" id="firstname" type="text" placeholder="Micheal"/>
                  </div>
                  <br/>
                  <div>
                      <label className="db fw6 lh-copy f6">Last Name</label>
                      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" id="lastname" placeholder="Scott"/><br />
                  </div>
                  </fieldset>
                  <input type="submit" onClick="" />
              </form>
          </main>
        );
}}

export default Basic