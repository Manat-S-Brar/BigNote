import React from "react";

function Footer() {
  return (
    <footer className="py-3 bg-dark">
      <div className="container text-center">
        <span className="text-light">
          © Copyright {new Date().getFullYear()} BIGNOTE
        </span>
      </div>
    </footer>
  );
}

export default Footer;
