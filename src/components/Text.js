import React, { useEffect, useState } from "react";
import eCommerce from "../data/ecommerce";
import Business from "../data/business";
import Membership from "../data/membership";
import Blog from "../data/blog";
import Education from "../data/education";
import Portfolio from "../data/portfolio";

const Text = ({ type, category }) => {
  const [Copied, setCopied] = useState("");
  useEffect(() => {
    navigator.clipboard.writeText(Copied)
  }, [Copied]);
  switch (category + type) {
    //  ...eCommerce...
    case "eCommerceHeadings":
      return (
        <div className="TextCont">
          {eCommerce.Headings.map((type) => (
            <div className="Copy">
             <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "eCommerceTaglines":
      return (
        <div className="TextCont">
          {eCommerce.Taglines.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "eCommerceBody Text":
      return (
        <div className="TextCont">
          {eCommerce.BodyText.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );

    //   ... MemberShip...

    case "MembershipHeadings":
      return (
        <div className="TextCont">
          {Membership.Headings.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "MembershipTaglines":
      return (
        <div className="TextCont">
          {Membership.Taglines.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "MembershipBody Text":
      return (
        <div className="TextCont">
          {Membership.BodyText.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );

    //   ...Business...

    case "BusinessHeadings":
      return (
        <div className="TextCont">
          {Business.Headings.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "BusinessTaglines":
      return (
        <div className="TextCont">
          {Business.Taglines.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "BusinessBody Text":
      return (
        <div className="TextCont">
          {Business.BodyText.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );

    //   ....Blog...

    case "BlogHeadings":
      return (
        <div className="TextCont">
          {Blog.Headings.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "BlogTaglines":
      return (
        <div className="TextCont">
          {Blog.Taglines.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "BlogBody Text":
      return (
        <div className="TextCont">
          {Blog.BodyText.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );

    // ...Education....

    case "EducationHeadings":
      return (
        <div className="TextCont">
          {Education.Headings.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "EducationTaglines":
      return (
        <div className="TextCont">
          {Education.Taglines.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "EducationBody Text":
      return (
        <div className="TextCont">
          {Education.BodyText.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );

    //   ....Portfolio...

    case "PortfolioHeadings":
      return (
        <div className="TextCont">
          {Portfolio.Headings.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "PortfolioTaglines":
      return (
        <div className="TextCont">
          {Portfolio.Taglines.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    case "PortfolioBody Text":
      return (
        <div className="TextCont">
          {Portfolio.BodyText.map((type) => (
            <div className="Copy">
                <span className="CopyBtn" onClick={() => setCopied(type)}>
                {
                  Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
                }
               
              </span>
              <p id="Text">{type}</p>
            </div>
          ))}
        </div>
      );
    default:
      break;
  }

  // return (
  //     <div className="TextCont">
  //         <div className="Copy">
  //           <span className="CopyBtn" onClick={() => setCopied(type)}>
              //   {
              //     Copied === type ?  <i className="bi bi-check2"></i> :  <i className="bi bi-clipboard"></i>
              //   }
               
              // </span>
  //         <p id="Text">Generate the text you need.</p>
  //         </div>
  //     </div>
  // );
};

export default Text;
