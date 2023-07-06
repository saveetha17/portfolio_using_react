import React, { useState } from "react";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Resume from "./Resume";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("aboutme");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch (currentPage) {
      case "aboutme":
        return <AboutMe />;
      case "work":
        return <Work />;
      case "resume":
        return <Resume />;
      case "contactMe":
        return <ContactMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}
