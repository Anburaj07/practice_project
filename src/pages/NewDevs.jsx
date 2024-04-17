import React from "react";
import { useNavigate } from "react-router-dom";
const NewDevs = () => {
  const naviagte=useNavigate();
  return (
    <div>
      <button onClick={()=>naviagte('/next')}> Next page</button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "auto",
        }}
      >
        <a href="mailto:anburaj2203@gmail.com">Mail us</a>
        <a href="tel:+8778118819">Call</a>
        <a href="sms:+8778118819">SMS</a>
      </div>

      <div>
        <details>
          <summary>Click to expand</summary>
          <p>This content can be expanded or collapsed.</p>
        </details>
      </div>

      <br />
      <br />
      <form action="">
        <fieldset>
          <legend>Personal details</legend>
          <label htmlFor="firstname">First name:</label>
          <input type="text" id="firstname" name="firstname" />
          <label htmlFor="email">email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="contact">contact:</label>
          <input type="text" id="contact" name="contact" />
        </fieldset>
      </form>
      <br />
      <select>
        <optgroup label="Fruits">
          <option>Apple</option>
          <option>Banana</option>
          <option>Mango</option>
        </optgroup>
        <optgroup label="Vegetables">
          <option>Tomato</option>
          <option>Broccoli</option>
          <option>Carrot</option>
        </optgroup>
      </select>

      <br />
      <video controls poster="image.png" width="500">
        <source src="video.mp4" type="video/mp4" />
      </video>

      <br />

      <input type="file" multiple />
      <select multiple>
        <option value="java">Java</option>
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="rust">Rust</option> <option value="java">Java</option>
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="rust">Rust</option>
      </select>

      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          margin: "auto",
        }}
      >
        <p>
          H<sub>2</sub>O
        </p>
        <p>
          a <sup>2</sup>+b <sup>2</sup>+2ab=(a+b) <sup>2</sup>
        </p>
        <a href="/Anburaj-Resume.pdf" download="Anburaj-Resume.pdf">Download PDF</a>
        {/* <img src="logo512.png" loading="auto" alt="img"></img>  */}
        {/* eager,lazy,auto */}
      </div>

      <br />

      <div>
        <p translate="no">
          This text should not be translated
        </p>
      </div>
    </div>
  );
};

export default NewDevs;
