import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <h2>ABOUT ME</h2>
        <li>นักศึกษาภาควิศวกรรมคอมพิวเตอร์ จุฬาลงกรณ์มหาวิทยาลัย</li>
        <li>Co-Founder ธุรกิจสอนพิเศษออนไลน์ "The Blitz"</li>
        <br></br>
        <li>
          <p style={{ "font-weight": "bold" }}>Programming Skill:</p> C++,
          Python
        </li>
        <li>
          <p style={{ "font-weight": "bold" }}>Web development Skill:</p> HTML,
          CSS, JS, React
        </li>
        <li>
          <p style={{ "font-weight": "bold" }}>Data Analysis Skill:</p>{" "}
          Spreadsheet, SQL, R
        </li>
      </div>
      <div className="profile-content">
        {/* <button class="button-50" role="button">Button 50</button> */}
        <h2>CONTACT</h2>
        <a href="https://file.notion.so/f/s/1cab75e7-addd-4ad3-b59e-16f4d2c50b54/Resume__2023.pdf?id=dcb4420c-463f-4d31-a84f-9145b6d53096&table=block&spaceId=5266f207-bfbd-4b3f-af75-f497008d3a1c&expirationTimestamp=1686461628948&signature=M7MKwVzQvQ4p4GHTo0aA83RcF3uzVgm8oK4wIKAyzFE&downloadName=Resume_%E0%B8%93%E0%B8%A0%E0%B8%B1%E0%B8%97%E0%B8%A3_2023.pdf" target="_blank">
          <button class="button-50">Resume</button>
        </a>
        <a href="https://www.linkedin.com/in/naphat-serirak/" target="_blank">
          <button class="button-50">Linkedin</button>
        </a>
        <a href="https://github.com/neennera/" target="_blank">
          <button class="button-50">GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
