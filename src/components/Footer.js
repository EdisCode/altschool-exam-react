import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;
  return (
    <section className="footer">
      <div>
        © {yearTxt} Service - Developed by
        <a href="https://github.com/EdisCode">Edikan Ekanem</a>
      </div>
    </section>
  );
}

export default Footer;
